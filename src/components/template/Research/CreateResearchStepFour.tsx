import React, { useCallback, useEffect, useState } from 'react';
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
import { updateResearchBasicInfo, updateResearchModifyInfo } from '../../../store/reducers/researchCreateReducer';
import Select from '../../atoms/Select';
import { isShow } from '../../../store/reducers/modalReducer';
import Input from '../../atoms/Input';
interface PropsType {
  detailInfo: any;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  setValue?: any;
}

const FGD_ARR = [
  { key: 'aa', value: 'aa', displayName: '직접입력' },
  { key: 'bb', value: 'bb', displayName: '직접입력2' },
];

const CreateResearchStepFour = ({ detailInfo, register, setValue }: PropsType) => {
  const methodsType = useSelector<ReducerType, any>(state => state.common.commonCode.ResearchType);
  const dispatch = useDispatch();

  // hook saasaform
  const {
    control,
    handleSubmit,
    setValue: serValueArray,
    reset,
    formState: { errors },
  } = useForm({});
  const { fields, append, insert, remove } = useFieldArray({
    control,
    name: 'detailInfo',
  });

  console.log(fields, 'FIE');

  const [openField, setOpenField] = useState(null);

  // FGD select box value
  const [selected, setSelected] = useState({
    topic: '',
  });
  const onClickValue = useCallback(
    (value, label) => {
      // if (label === '직접입력') {
      setSelected({
        ...selected,
        topic: 'aa',
      });
      // }
    },
    [selected],
  );

  const handleAppendPanel = () => {
    append({ mission: '' });
  };
  const handleAppendHypo = () => {
    append({ hypothesis: '', hypothesisReason: '' });
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
    if (!detailInfo?.detailInfo || detailInfo?.detailInfo?.length === 0) {
      if (detailInfo?.researchType === 'FGD') {
        setValue('agenda', '');
      } else if (detailInfo?.researchType === 'UI_DIAGNOSIS') {
        serValueArray('detailInfo', [{ mission: '' }]);
      } else if (detailInfo?.researchType === 'HYPOTHESIS_VERIFICATION') {
        serValueArray('detailInfo', [{ hypothesis: '', hypothesisReason: '' }]);
        // setValue('detailInfo', [{ hypothesis: '', hypothesisReason: '' }]);
      }
    } else {
      dispatch(updateResearchModifyInfo({ name: 'detailInfo', value: detailInfo?.detailInfo }));
      if (detailInfo?.researchType === 'FGD') {
        setValue('agenda', detailInfo?.detailInfo?.[0].agenda);
        setSelected({ topic: 'aa' });
      } else if (detailInfo?.researchType === 'UI_DIAGNOSIS') {
        serValueArray('detailInfo', detailInfo?.detailInfo);
      } else if (detailInfo?.researchType === 'HYPOTHESIS_VERIFICATION') {
        serValueArray('detailInfo', detailInfo?.detailInfo);
      }
    }
  }, [detailInfo]);

  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);
  return (
    <>
      {/* UX 포지션 분석 */}
      {detailInfo?.researchType === 'UX_POSITION_ANALYSIS' && (
        <FlexBox
          direction={'column'}
          align={'center'}
          justify={'center'}
          width={'100%'}
          height={'500px'}
          style={[selectContainer, { overflow: 'hidden', background: colors.grey._fa, borderRadius: '16px' }]}
        >
          <span css={descriptionText2}>
            리서치 설계 단계에서
            <br />
            서비스의 기획의도 파악을 위한 질문/답변을 별도로 진행합니다.
          </span>
          <br />
          <span css={descriptionText}>
            리서치 이후 실제 고객에게 파악한 서비스 인식과 서비스의 기획의도를
            <br /> 비교/분석한 내용을 리포트로 제공합니다.
          </span>
        </FlexBox>
      )}

      {/* 짧은 설문 */}
      {detailInfo?.researchType === 'SHORT_SURVEY' && (
        <FlexBox
          direction={'column'}
          align={'center'}
          justify={'center'}
          width={'100%'}
          height={'500px'}
          style={[selectContainer, { overflow: 'hidden', background: colors.grey._fa, borderRadius: '16px' }]}
        >
          <span css={descriptionText}>
            리서치 설계 단계에서
            <br />
            응답자의 선호를 확인하고 싶으신 비교 시안과
            <br />
            선택지를 전달해주시면 설계가 마무리됩니다.
          </span>
        </FlexBox>
      )}

      {/* UI 진단 */}
      {detailInfo?.researchType === 'UI_DIAGNOSIS' && (
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
                      {openField?.[`detail${index}`] === false ? (
                        <ToggleHeader title={`미션${index + 1}`} onClick={() => handleToggleField(`mission${index}`)} />
                      ) : (
                        <>
                          <ToggleHeader title={`미션${index + 1}`} onClick={() => handleToggleField(`mission${index}`)} />
                          <TextArea
                            // title={'이메일'}
                            register={register}
                            label={`detailInfo[${index}].mission`}
                            errors={errors}
                            defaultValue={item.mission}
                            errorMsg={'텍스트를 입력해주세요.'}
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
            <span css={bottomAddBtn}>+ 미션 추가하기</span>
          </div>
        </>
      )}

      {/* FGD */}
      {detailInfo?.researchType === 'FGD' && (
        <FlexBox align={'flex-start'} width={'100%'} height={'444px'} style={selectContainer}>
          {/*<button onClick={checkField}>asdfas</button>*/}
          <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ boxSizing: 'border-box' }}>
            <div
              css={css`
                margin-bottom: 16px;
              `}
            >
              <Select
                title={'FGD 아젠다'}
                options={FGD_ARR}
                value={selected.topic}
                selected={selected}
                setSelected={setSelected}
                name="topic"
                onClick={onClickValue}
              />
            </div>
            {selected.topic === 'aa' && (
              <div>
                <Input
                  register={register}
                  label={'agenda'}
                  errors={errors}
                  errorMsg={'필수 항목입니다.'}
                  placeholder={'FGD 아젠다를 직접 입력해 주세요.'}
                  registerOptions={{
                    required: true,
                  }}
                />
              </div>
            )}
          </Form>
        </FlexBox>
      )}

      {/* 가설검증 */}
      {detailInfo?.researchType === 'HYPOTHESIS_VERIFICATION' && (
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
                      {openField?.[`detail${index}`] === false ? (
                        <ToggleHeader title={`가설${index + 1}`} onClick={() => handleToggleField(`mission${index}`)} />
                      ) : (
                        <>
                          <ToggleHeader title={`가설${index + 1}`} onClick={() => handleToggleField(`mission${index}`)} />
                          <TextArea
                            title={'가설'}
                            register={register}
                            label={`detailInfo[${index}].hypothesis`}
                            errors={errors}
                            errorMsg={'텍스트를 입력해주세요.'}
                            placeholder={'텍스트를 입력해주세요.'}
                            registerOptions={{
                              required: true,
                            }}
                          />
                          <TextArea
                            title={'가설을 수립한 배경/이유'}
                            register={register}
                            label={`detailInfo[${index}].hypothesisReason`}
                            errors={errors}
                            errorMsg={'텍스트를 입력해주세요.'}
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
            <span css={bottomAddBtn}>+ 가설 추가하기</span>
          </div>
        </>
      )}
    </>
  );
};

export default CreateResearchStepFour;

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

const descriptionText = css`
  white-space: pre-wrap;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
`;
const descriptionText2 = [
  descriptionText,
  css`
    font-weight: 700;
    line-height: 24px;
  `,
];
