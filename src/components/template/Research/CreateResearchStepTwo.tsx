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
import { updateResearchModifyArrayInfo, updateResearchModifyInfo } from '../../../store/reducers/researchCreateReducer';
import { forEach } from 'lodash';
interface PropsType {
  detailInfo: any;
  getResearchMethod?: (value) => void;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  // handleSubmit: any;
  // reset: any;
  // watch: any;
  // errors: any;
}
const CreateResearchStepTwo = ({ detailInfo, getResearchMethod, register }: PropsType) => {
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);
  const dispatch = useDispatch();
  // hook saasaform
  const {
    control,
    // register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({});
  const { fields, append, insert, remove } = useFieldArray({
    control,
    name: 'panelInfo',
  });

  const [openField, setOpenField] = useState(null);

  const handleAppendPanel = () => {
    append({ value: '' });
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
    if (!detailInfo?.panelInfo || detailInfo?.panelInfo?.length === 0) {
      setValue('panelInfo', [{ panel: '' }]);
    } else {
      dispatch(updateResearchModifyInfo({ name: 'panelInfo', value: detailInfo?.panelInfo }));
      setValue('panelInfo', detailInfo?.panelInfo);
    }
  }, [detailInfo]);

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);

  return (
    <>
      <FlexBox align={'flex-start'} width={'100%'} height={'444px'} style={selectContainer}>
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
                  {openField?.[`panel${index}`] === false ? (
                    <ToggleHeader title={`패널조건${index + 1}`} onClick={() => handleToggleField(`panel${index}`)} />
                  ) : (
                    <>
                      <ToggleHeader title={`패널조건${index + 1}`} onClick={() => handleToggleField(`panel${index}`)} />
                      <TextArea
                        // title={'이메일'}
                        register={register}
                        label={`panelInfo[${index}].panel`}
                        errors={errors}
                        errorMsg={'이메일을 입력해주세요.'}
                        defaultValue={item?.panel}
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
                          // iconColor={colors.red}
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
