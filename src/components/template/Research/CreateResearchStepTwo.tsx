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
import { debounceFunction } from '../../../common/util/commonFunc';
interface PropsType {
  detailInfo: any;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  respondentDebounceSave?: (value: string) => void;
  // handleSubmit: any;
  // reset: any;
  // watch: any;
  // errors: any;
}
const CreateResearchStepTwo = ({ detailInfo, register, respondentDebounceSave }: PropsType) => {
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
    name: 'respondentInfo',
  });

  const [openField, setOpenField] = useState(null);

  const handleAppendRespondent = () => {
    append({ value: '' });
  };
  const handleRemoveRespondent = (index: number) => {
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
    if (!detailInfo?.respondentInfo || detailInfo?.respondentInfo?.length === 0) {
      setValue('respondentInfo', [{ respondent: '' }]);
    } else {
      dispatch(updateResearchModifyInfo({ name: 'respondentInfo', value: detailInfo?.respondentInfo }));
      setValue('respondentInfo', detailInfo?.respondentInfo);
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
                  {openField?.[`respondent${index}`] === false ? (
                    <ToggleHeader title={`응답자 조건${index + 1}`} onClick={() => handleToggleField(`respondent${index}`)} />
                  ) : (
                    <>
                      <ToggleHeader title={`응답자 조건${index + 1}`} onClick={() => handleToggleField(`respondent${index}`)} />
                      <TextArea
                        // title={'이메일'}
                        register={register}
                        label={`respondentInfo[${index}].respondent`}
                        errors={errors}
                        errorMsg={'응답자 조건을 입력해주세요.'}
                        defaultValue={item?.respondent}
                        placeholder={'어떤 사람에게 응답을 받고싶으신가요?'}
                        registerOptions={{
                          required: true,
                          onChange: debounceFunction(e => respondentDebounceSave(e.target.value), 1000),
                        }}
                      />
                      {index !== 0 && (
                        <IconTextButton
                          onClick={() => handleRemoveRespondent(index)}
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
      <div onClick={handleAppendRespondent} css={bottomAddBtnContainer}>
        <span css={bottomAddBtn}>+ 응답자 조건 추가하기</span>
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