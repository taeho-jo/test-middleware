import React, { useCallback, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Components
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import Input from '../../atoms/Input';
import BasicButton from '../../atoms/Button/BasicButton';
import Form from '../../atoms/Form';
// libraries
import { useForm } from 'react-hook-form';
// Styles
import { colors } from '../../../styles/Common.styles';
import { caption1_bold } from '../../../styles/FontStyles';
// Types
import { InputType } from '../../../common/types/commonTypes';
import { ReducerType } from '../../../store/reducers';
import Select from '../../atoms/Select';
import { useRouter } from 'next/router';
import TextArea from '../../atoms/TextArea';
import { createTeamProduct } from '../../../store/reducers/teamReducer';
import { css } from '@emotion/react';
import CheckBox from '../../atoms/CheckBox';

const TeamProductCreateModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const createResearchTeamSeq = useSelector<ReducerType, any>(state => state.researchCreate.researchBasicInfo);
  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleCreateProduct('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [sendObject, setSendObject] = useState(null);
  const [categoryArr, setCategoryArr] = useState([]);

  const [selected, setSelected] = useState({
    productType: null,
  });

  const handleCreateProduct = useCallback(
    (status, data) => {
      const serviceUrlValue = data?.serviceUrl?.includes('https://') ? data?.serviceUrl : `https://${data?.serviceUrl}`;
      const sendObject = {
        productNm: data.productNm,
        productType: selected.productType,
        categoryType: categoryArr,
        productIntroduce: data.productIntroduce,
        serviceUrl: serviceUrlValue,
      };

      if (selectTeamSeq) {
        const pathname = router.pathname;

        dispatch(
          createTeamProduct({
            sendObject: sendObject,
            teamSeq: pathname === '/admin/research/[id]' ? createResearchTeamSeq?.teamSeq : selectTeamSeq,
          }),
        );
      }
    },
    [selected, selectTeamSeq, categoryArr, createResearchTeamSeq],
  );

  const onClickValue = useCallback(
    (value, label) => {
      setSelected({
        ...selected,
        [label]: value,
      });
    },
    [selected],
  );
  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const handleChangeCheckBox = useCallback(
    value => {
      if (categoryArr.length === 0) {
        setCategoryArr([...categoryArr, value]);
      }
      if (categoryArr.includes(value)) {
        const newCategoryArr = categoryArr.filter(el => el !== value);
        setCategoryArr(newCategoryArr);
      } else {
        setCategoryArr([...categoryArr, value]);
      }
    },
    [categoryArr],
  );

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox
        style={{ position: 'absolute', top: '96px', left: '50%', transform: 'translate(-50%, 0)' }}
        padding={'0px'}
        width={'1116px'}
        height={'auto'}
      >
        <ModalTitle title={'프로덕트에 대해 알려주세요.'} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <FlexBox style={{ width: '100%' }} justify={'space-between'}>
            <div
              css={css`
                width: 400px;
              `}
            >
              <Input
                title={'프로덕트 이름'}
                register={register}
                label={'productNm'}
                errors={errors}
                errorMsg={'프로덕트 이름을 입력해주세요.'}
                placeholder={`프로덕트 이름을 입력해주세요.`}
                registerOptions={{
                  required: true,
                }}
              />

              <Select
                title={'서비스 카테고리'}
                options={commonCode?.ProductType}
                selected={selected}
                setSelected={setSelected}
                name="productType"
                onClick={onClickValue}
                registerOptions={{
                  required: true,
                }}
              />

              <div
                css={css`
                  margin-top: 16px;
                `}
              >
                <TextArea
                  title={'프로덕트 소개 (선택)'}
                  register={register}
                  label={'productIntroduce'}
                  errors={errors}
                  errorMsg={'프로덕트 소개를 입력해주세요.'}
                  placeholder={'프로덕트 소개를 입력해주세요.'}
                  style={css`
                    height: 142px;
                  `}
                />
              </div>

              <div
                css={css`
                  margin-top: 10px;
                `}
              >
                <Input
                  title={'서비스 접속 경로 URL (선택)'}
                  register={register}
                  label={'serviceUrl'}
                  errors={errors}
                  errorMsg={'서비스 접속 경로 URL을 입력해주세요.'}
                  placeholder={`서비스 접속 경로 URL을 입력해주세요.`}
                />
              </div>
            </div>

            <div
              css={css`
                width: 558px;
              `}
            >
              <label css={[caption1_bold, labelTextStyle]}>카테고리 *중복 선택 가능 (선택)</label>
              <div css={categorySelectBox}>
                {commonCode?.CategoryType?.map((el, index) => {
                  return (
                    <div
                      key={index}
                      css={css`
                        width: 174px;
                        padding: 8px;
                      `}
                    >
                      <CheckBox
                        handleChangeCheckBox={() => handleChangeCheckBox(el.value)}
                        checked={categoryArr.find(el => el.value)}
                        inputName={el.value}
                        label={el.displayName}
                        register={register}
                        errors={errors}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </FlexBox>

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'정보 저장하기'} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamProductCreateModal;

const categorySelectBox = css`
  width: 100%;
  height: 392px;
  border: 1px solid ${colors.grey._3c};
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;
const labelTextStyle = css`
  margin-bottom: 8px;
  color: #999999;
  display: inline-block;
`;
