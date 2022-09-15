import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import Form from '../../atoms/Form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import TextArea from '../../atoms/TextArea';
import ToggleHeader from '../../atoms/ToggleHeader';
import Icon from '../../atoms/Icon';
import IconTextButton from '../../atoms/Button/IconTextButton';
interface PropsType {
  detailInfo: any;
}
const CreateResearchStepTwo = ({ detailInfo }: PropsType) => {
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);

  // hook saasaform
  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({});
  const { fields, append, insert, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'panel', // unique name for your Field Array
    // keyName: 'screening_additional_id', //default to "id", you can change the key name
  });

  const [openField, setOpenField] = useState(null);

  const handleAppendPanel = () => {
    append({ value: '' });
  };
  const handleRemovePanel = (index: number) => {
    remove(index);
  };

  useEffect(() => {
    setValue('panel', [{ value: '' }]);
    // setPanelArr([...panelArr, data]);
  }, []);

  // TODO: 리팩토링 해야함
  const handleToggleField = name => {
    if (!openField?.[name]) {
      setOpenField({
        ...openField,
        [name]: false,
      });
    }
    if (openField?.[name] === false) {
      if (openField?.[name] === true) {
        setOpenField({
          ...openField,
          [name]: false,
        });
      } else {
        setOpenField({
          ...openField,
          [name]: true,
        });
      }
    }
    if (openField?.[name] === true) {
      if (openField?.[name] === true) {
        setOpenField({
          ...openField,
          [name]: false,
        });
      } else {
        setOpenField({
          ...openField,
          [name]: true,
        });
      }
    }
  };

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);
  return (
    <>
      <FlexBox align={'flex-start'} width={'100%'} height={'444px'} style={selectContainer}>
        {/*<button onClick={checkField}>asdfas</button>*/}
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ boxSizing: 'border-box' }}>
          {fields?.length > 0 &&
            fields?.map((item, index) => {
              return (
                <div
                  key={index}
                  css={css`
                    margin-bottom: 50px;
                  `}
                >
                  {openField?.[`panel${index}`] === false ? (
                    <ToggleHeader title={`패널조건${index + 1}`} onClick={() => handleToggleField(`panel${index}`)} />
                  ) : (
                    <>
                      <ToggleHeader title={`패널조건${index + 1}`} onClick={() => handleToggleField(`panel${index}`)} />
                      <TextArea
                        // title={'이메일'}
                        register={register}
                        label={`panel${index}`}
                        errors={errors}
                        errorMsg={'이메일을 입력해주세요.'}
                        placeholder={'ex. 20대, 여성, SNS 사용자, 25명'}
                        registerOptions={{
                          required: true,
                        }}
                      />
                      {index !== 0 && (
                        <IconTextButton
                          onClick={() => handleRemovePanel(index)}
                          text={'삭제하기'}
                          textStyle={{ color: colors.red }}
                          iconColor={colors.red}
                          roundBorder={false}
                          name={'NAVIGATION_CLOSE_SM'}
                          iconPosition={'left'}
                        />
                      )}
                    </>
                  )}
                </div>
              );
            })}
        </Form>
      </FlexBox>
      <div onClick={handleAppendPanel} css={bottomAddBtnContainer}>
        <span css={bottomAddBtn}>+ 패널 조건 추가하기</span>
      </div>
    </>
  );
};

export default CreateResearchStepTwo;

// ==============================
const selectContainer = css`
  border: 1px solid #dcdcdc;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: 25px;
  padding: 56px;
  position: relative;
  overflow-y: scroll;
`;
const bottomAddBtnContainer = css`
  width: 100%;
  height: 56px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background: ${colors.grey._3c};
  //position: absolute;
  //bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const bottomAddBtn = [
  heading3_bold,
  css`
    color: white;
  `,
];
