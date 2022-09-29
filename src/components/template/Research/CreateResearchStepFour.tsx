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
import { debounceFunction } from '../../../common/util/commonFunc';
interface PropsType {
  detailInfo: any;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  setValue?: any;
  setAgendaType: any;
  respondentDebounceSave?: (value: string) => void;
}

const CreateResearchStepFour = ({ detailInfo, register, setValue, setAgendaType, respondentDebounceSave }: PropsType) => {
  const dispatch = useDispatch();
  const AgendaList = useSelector<ReducerType, any>(state => state.common.commonCode.AgendaType);

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
    name: 'detailDesignInfo',
  });

  const [openField, setOpenField] = useState(null);

  // FGD select box value
  const [selected, setSelected] = useState({
    topic: '',
  });
  const onClickValue = useCallback(
    (value, label) => {
      console.log(value, label);
      setSelected({
        ...selected,
        [label]: value,
      });
      setAgendaType(value);
      if (value !== 'ETC') {
        setValue('agenda', '');
      }
    },
    [selected],
  );

  const handleAppendRespondent = () => {
    append({ mission: '' });
  };
  const handleAppendHypo = () => {
    append({ hypothesis: '', hypothesisReason: '' });
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
    if (!detailInfo?.detailDesignInfo || detailInfo?.detailDesignInfo?.length === 0) {
      if (detailInfo?.researchType === 'FGD') {
        setValue('agenda', '');
        setSelected({ topic: '' });
      } else if (detailInfo?.researchType === 'UI_DIAGNOSIS') {
        serValueArray('detailDesignInfo', [{ mission: '' }]);
      } else if (detailInfo?.researchType === 'HYPOTHESIS_VERIFICATION') {
        serValueArray('detailDesignInfo', [{ hypothesis: '', hypothesisReason: '' }]);
        // setValue('detailInfo', [{ hypothesis: '', hypothesisReason: '' }]);
      }
    } else {
      dispatch(updateResearchModifyInfo({ name: 'detailInfo', value: detailInfo?.detailDesignInfo }));
      if (detailInfo?.researchType === 'FGD') {
        setValue('agenda', detailInfo?.detailDesignInfo?.[0].agenda);
        setSelected({ topic: detailInfo?.detailDesignInfo?.[0].agendaType });
        setAgendaType(detailInfo?.detailDesignInfo?.[0].agendaType);
      } else if (detailInfo?.researchType === 'UI_DIAGNOSIS') {
        serValueArray('detailDesignInfo', detailInfo?.detailDesignInfo);
      } else if (detailInfo?.researchType === 'HYPOTHESIS_VERIFICATION') {
        serValueArray('detailDesignInfo', detailInfo?.detailDesignInfo);
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
            <strong>다음으로 넘어가주세요.</strong>
            UX 포지션 분석의 경우 리서치 설계를 신청하신 후,
            <br />
            Diby 매니저가 별도로 서비스의 기획의도 파악을 위한 질문을 드릴 예정입니다.
            <br />
            <br />
            리서치 결과에서 답변해주신 서비스 기획의도와 실제 고객의 인식을 비교한
            <br />
            리포트를 확인하실 수 있습니다.
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
            <strong>다음으로 넘어가주세요.</strong>
            <br />
            짧은 설문의 경우 리서치 설계를 신청하신 후,
            <br />
            Diby 매니저가 별도록 연락하여 응답자의 선호를
            <br />
            확인하고 싶으신 비교 시안과 선택지를 받을 예정입니다.
          </span>
        </FlexBox>
      )}

      {/* 사용성 테스트 */}
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
                        <ToggleHeader
                          title={`미션${index + 1} : 응답자에게 어떤 미션을 지시할까요?`}
                          onClick={() => handleToggleField(`mission${index}`)}
                        />
                      ) : (
                        <>
                          <ToggleHeader
                            title={`미션${index + 1} : 응답자에게 어떤 미션을 지시할까요?`}
                            onClick={() => handleToggleField(`mission${index}`)}
                          />
                          <TextArea
                            // title={'이메일'}
                            register={register}
                            label={`detailDesignInfo[${index}].mission`}
                            errors={errors}
                            defaultValue={item.mission}
                            errorMsg={'텍스트를 입력해주세요.'}
                            placeholder={
                              '예시) 당신은 회사에서 외부 미팅을 위해 쏘카{서비스}에서 차량을 빌려서 미팅장소에 도착하려고 합니다. 회사 혹은 집 근처 차량을 빌려보세요.'
                            }
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
          <div onClick={handleAppendRespondent} css={bottomAddBtnContainer}>
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
                title={'어떤 주제로 FGD를 진행할까요?'}
                options={AgendaList}
                value={selected.topic}
                selected={selected}
                setSelected={setSelected}
                label={'topic'}
                name="topic"
                onClick={onClickValue}
              />
            </div>
            {selected.topic === 'ETC' && (
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
                        <ToggleHeader
                          title={`가설?${index + 1} : 어떤 가설을 검증하고 싶으신가요`}
                          onClick={() => handleToggleField(`mission${index}`)}
                        />
                      ) : (
                        <>
                          <ToggleHeader
                            title={`가설?${index + 1} : 어떤 가설을 검증하고 싶으신가요?`}
                            onClick={() => handleToggleField(`mission${index}`)}
                          />
                          <TextArea
                            title={'검증하고 싶은 가설을 말씀해주세요'}
                            register={register}
                            label={`detailDesignInfo[${index}].hypothesis`}
                            errors={errors}
                            defaultValue={item.hypothesis}
                            errorMsg={'텍스트를 입력해주세요.'}
                            placeholder={
                              '예시) 특정 뷰티 제품을 구매하는 사용자 중 00%가 넘는 사용자들은 인스타그램을 통해 특정 뷰티 제품의 정보를 가장 많이 조회 할 것이다.'
                            }
                            registerOptions={{
                              required: true,
                              onChange: debounceFunction(e => respondentDebounceSave(e.target.value), 1000),
                            }}
                          />
                          <TextArea
                            title={'위 가설을 검증하고 싶은 이유는 무엇인가요?'}
                            register={register}
                            label={`detailDesignInfo[${index}].hypothesisReason`}
                            errors={errors}
                            defaultValue={item.hypothesisReason}
                            errorMsg={'텍스트를 입력해주세요.'}
                            placeholder={
                              '예시) 가설 검증을 통해 특정 뷰티 제품을 구매하는 사용자들을 타겟으로 하는 인스타그램 마케팅 비중을 기존 대비 00% 높이기 위함이다.'
                            }
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
          <div onClick={handleAppendRespondent} css={bottomAddBtnContainer}>
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
