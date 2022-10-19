import React, { useCallback, useEffect, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Components
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import Input from '../../atoms/Input';
import BasicButton from '../../atoms/Button/BasicButton';
import Form from '../../atoms/Form';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import TextButton from '../../atoms/Button/TextButton';
// libraries
import { useForm } from 'react-hook-form';
// Styles
import { colors } from '../../../styles/Common.styles';
import { body3_medium, caption1_bold, caption1_regular } from '../../../styles/FontStyles';
// Types
import { InputType } from '../../../common/types/commonTypes';
import { ReducerType } from '../../../store/reducers';
import { fetchDeleteProductAi, fetchUpdateProductApi } from '../../../api/teamApi';
import { isShow } from '../../../store/reducers/modalReducer';
import Select from '../../atoms/Select';
import Icon from '../../atoms/Icon';
import { deleteTeamProduct, TeamProductType, updateTeamProduct } from '../../../store/reducers/teamReducer';
import { useMutation, useQueryClient } from 'react-query';
import { fetchRefreshToken } from '../../../api/authApi';
import { showToast } from '../../../store/reducers/toastReducer';
import { useRouter } from 'next/router';
import { clearLocalStorage } from '../../../common/util/commonFunc';
import { css } from '@emotion/react';
import TextArea from '../../atoms/TextArea';
import CheckBox from '../../atoms/CheckBox';

const TeamProductModifyModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);
  const selectProduct = useSelector<ReducerType, any>(state => state.team.selectProduct);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  // hook form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleUpdateProduct('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [categoryArr, setCategoryArr] = useState([]);
  const [selected, setSelected] = useState({
    productType: '',
  });

  const handleUpdateProduct = useCallback(
    (status, data) => {
      const serviceUrlValue = data?.serviceUrl?.includes('https://') ? data?.serviceUrl : `https://${data?.serviceUrl}`
      const sendObject = {
        productNm: data.productNm ? data.productNm : selectProduct.productNm,
        productType: selected.productType,
        categoryType: categoryArr,
        productIntroduce: data.productIntroduce ? data.productIntroduce : selectProduct.productIntroduce,
        serviceUrl: data.serviceUrl ? serviceUrlValue : selectProduct.serviceUrl,
      };

      dispatch(updateTeamProduct({ teamSeq: selectTeamSeq, productSeq: selectProduct.productSeq, sendObject: sendObject }));
    },
    [selected, categoryArr],
  );

  const deleteProduct = useCallback(() => {
    dispatch(deleteTeamProduct({ teamSeq: selectTeamSeq, productSeq: selectProduct.productSeq, callback: () => router.push('/admin/setting') }));
  }, [selectTeamSeq, selectProduct]);

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

  // 초기 값 세팅
  useEffect(() => {
    if (selectProduct) {
      setSelected({
        productType: selectProduct.productType,
      });
      setCategoryArr(selectProduct.categoryType);

      selectProduct?.categoryType?.forEach(el => setValue(el, true));
    }
  }, [selectProduct]);

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
                defaultValue={selectProduct?.productNm}
                placeholder={`프로덕트 이름을 입력해주세요.`}
                // style={{ marginBottom: '16px' }}
                registerOptions={{
                  required: true,
                }}
              />

              <Select
                title={'서비스 카테고리'}
                options={commonCode?.ProductType}
                // value={selected.funnelsCd}
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
                  defaultValue={selectProduct?.productIntroduce}
                  // titleStyle={{ marginTop: '20px' }}
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
                  defaultValue={selectProduct?.serviceUrl}
                  title={'서비스 접속 경로 URL (선택)'}
                  register={register}
                  label={'serviceUrl'}
                  errors={errors}
                  errorMsg={'서비스 접속 경로 URL을 입력해주세요.'}
                  placeholder={`서비스 접속 경로 URL을 입력해주세요.`}
                  // style={{ marginBottom: '16px' }}
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
                        checked={categoryArr?.find(el => el.value)}
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
            <FlexBox justify={'center'} align={'center'} style={{ marginTop: '22px' }}>
              <span onClick={deleteProduct} css={[caption1_regular, { color: colors.red, cursor: 'pointer' }]}>
                프로덕트 삭제하기
              </span>
              <Icon name={'NAVIGATION_CLOSE_SM'} iconColor={colors.red} />
            </FlexBox>
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamProductModifyModal;

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
