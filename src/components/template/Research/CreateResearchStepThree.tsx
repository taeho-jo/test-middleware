import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import Form from '../../atoms/Form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import TextArea from '../../atoms/TextArea';
import ToggleHeader from '../../atoms/ToggleHeader';
import Icon from '../../atoms/Icon';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { updateResearchModifyInfo } from '../../../store/reducers/researchCreateReducer';
interface PropsType {
  detailInfo: any;
  getResearchMethod?: (value) => void;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  // handleSubmit: any;
  // reset: any;
  // watch: any;
  // errors: any;
}
const CreateResearchStepThree = ({ detailInfo, getResearchMethod, register }: PropsType) => {
  const dispatch = useDispatch();
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);

  // hook saasaform
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    reset,
    formState: { errors },
  } = useForm({});
  const { fields, append, insert, remove } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: 'decisionInfo', // unique name for your Field Array
    // keyName: 'screening_additional_id', //default to "id", you can change the key name
  });

  const [openField, setOpenField] = useState(null);

  const handleAppendPanel = () => {
    append({ decision: '' });
  };
  const handleRemovePanel = (index: number) => {
    remove(index);
  };

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

  useEffect(() => {
    if (!detailInfo?.decisionInfo || detailInfo?.decisionInfo?.length === 0) {
      setValue('decisionInfo', [{ decision: '' }]);
    } else {
      dispatch(updateResearchModifyInfo({ name: 'decisionInfo', value: detailInfo?.decisionInfo }));
      setValue('decisionInfo', detailInfo?.decisionInfo);
    }
  }, [detailInfo]);

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);
  return (
    <>
      <FlexBox align={'flex-start'} width={'100%'} height={'444px'} style={selectContainer}>
        {/*<button onClick={checkField}>asdfas</button>*/}
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ boxSizing: 'border-box' }}>
          {fields?.length > 0 &&
            fields?.map((item: any, index: number) => {
              return (
                <div
                  key={item.id}
                  css={css`
                    margin-bottom: 50px;
                  `}
                >
                  {openField?.[`decision${index}`] === false ? (
                    <ToggleHeader title={`유저 리서치를 통해 하고 싶은 의사결정${index + 1}`} onClick={() => handleToggleField(`decision${index}`)} />
                  ) : (
                    <>
                      <ToggleHeader
                        title={`유저 리서치를 통해 하고 싶은 의사결정${index + 1}`}
                        onClick={() => handleToggleField(`decision${index}`)}
                      />
                      <TextArea
                        // title={'이메일'}
                        register={register}
                        label={`decisionInfo[${index}].decision`}
                        errors={errors}
                        errorMsg={'텍스트를 입력해주세요.'}
                        defaultValue={item.decision}
                        placeholder={'텍스트를 입력해주세요.'}
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
        <span css={bottomAddBtn}>+ 의사 결정 추가하기</span>
      </div>
    </>
  );
};

export default CreateResearchStepThree;

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
