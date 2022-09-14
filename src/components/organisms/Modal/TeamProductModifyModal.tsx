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
import { body3_medium, caption1_regular } from '../../../styles/FontStyles';
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
    reset,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleUpdateProduct('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [sendArr, setSendArr] = useState(null);

  // const { mutate } = useMutation(['fetchUpdateProduct', selectTeamSeq, selectProduct.productSeq], fetchUpdateProductApi, {
  //   onError: (e: any) => {
  //     const errorData = e.response.data;
  //     if (errorData.code === 'E0008') {
  //       queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
  //
  //       mutate(sendArr);
  //
  //       queryClient.invalidateQueries(['fetchUpdateProduct', selectTeamSeq, selectProduct.productSeq]);
  //     } else if (errorData.code === 'E0007') {
  //       clearLocalStorage();
  //       router.push('/');
  //     } else {
  //       dispatch(showToast({ message: errorData.message, isShow: true, status: 'warning', duration: 5000 }));
  //     }
  //   },
  //   onSuccess: data => {
  //     dispatch(showToast({ message: '프로덕트 정보가 수정되었습니다.', isShow: true, status: 'success', duration: 5000 }));
  //     queryClient.invalidateQueries(['fetchProductList', selectTeamSeq]);
  //     dispatch(isShow({ isShow: false, type: '' }));
  //   },
  // });

  // const { mutate: deleteMutate } = useMutation(['fetchDeleteProduct', selectTeamSeq, selectProduct.productSeq], fetchDeleteProductAi, {
  //   onSuccess: data => {
  //     dispatch(showToast({ message: '프로덕트가 삭제되었습니다.', isShow: true, status: 'success', duration: 5000 }));
  //     queryClient.invalidateQueries(['fetchProductList', selectTeamSeq]);
  //     dispatch(isShow({ isShow: false, type: '' }));
  //     router.push('/admin/setting');
  //   },
  // });

  const [selected, setSelected] = useState({
    productType: '',
    categoryType: '',
  });

  const handleUpdateProduct = useCallback(
    (status, data) => {
      const sendObject = {
        productNm: data.productNm ? data.productNm : selectProduct.productNm,
        productType: selected.productType,
        categoryType: [selected.categoryType],
        productIntroduce: data.productIntroduce ? data.productIntroduce : selectProduct.productIntroduce,
        serviceUrl: data.serviceUrl ? data.serviceUrl : selectProduct.serviceUrl,
      };

      // const sendArr = [selectTeamSeq, selectProduct.productSeq, sendObject];
      // setSendArr(sendArr);
      // mutate(sendArr);
      dispatch(updateTeamProduct({ teamSeq: selectTeamSeq, productSeq: selectProduct.productSeq, sendObject: sendObject }));
    },
    [selected],
  );

  const deleteProduct = useCallback(() => {
    // const sendObject = {
    //   teamSeq: selectTeamSeq,
    //   productSeq: selectProduct.productSeq,
    // };
    //
    //
    // deleteMutate(sendObject);
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

  useEffect(() => {
    if (selectProduct) {
      setSelected({
        productType: selectProduct.productType,
        categoryType: selectProduct.categoryType ? selectProduct.categoryType?.[0] : null,
      });
    }
  }, [selectProduct]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'프로덕트에 대해 알려주세요.'} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
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
          <Select
            title={'카테고리 (선택)'}
            options={commonCode?.CategoryType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="categoryType"
            onClick={onClickValue}
          />
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
