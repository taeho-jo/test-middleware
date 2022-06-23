import React, { useCallback, useState } from 'react';
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
import { fetchCreateProductApi } from '../../../api/teamApi';
import { isShow } from '../../../store/reducers/modalReducer';
import Select from '../../atoms/Select';
import Icon from '../../atoms/Icon';
import { useMutation, useQueryClient } from 'react-query';
import { fetchRefreshToken } from '../../../api/authApi';
import { showToast } from '../../../store/reducers/toastReducer';
import { useRouter } from 'next/router';

const TeamProductCreateModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleCreateProduct('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [sendObject, setSendObject] = useState(null);

  const { mutate } = useMutation(['fetchCreateProduct'], fetchCreateProductApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);

        mutate([selectTeamSeq, sendObject]);

        queryClient.invalidateQueries(['fetchCreateProduct']);
      } else if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      } else {
        dispatch(showToast({ message: '팀 생성에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
      }
    },
    onSuccess: data => {
      queryClient.invalidateQueries(['fetchProductList', selectTeamSeq]);
      dispatch(isShow({ isShow: false, type: '' }));
    },
  });

  const [selected, setSelected] = useState({
    planetType: '',
    serviceType: '',
    revenueModelType: '',
  });

  const handleCreateProduct = useCallback(
    (status, data) => {
      const sendObject = {
        productNm: data.productNm,
        ...selected,
      };
      const sendArr = [selectTeamSeq, sendObject];
      setSendObject(sendObject);
      mutate(sendArr);
    },
    [selected],
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
            errorMsg={'필수 항목입니다.'}
            placeholder={`프로덕트 이름을 입력해주세요.`}
            // style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
            }}
          />

          <Select
            title={'서비스 카테고리 (선택)'}
            options={commonCode?.PlanetType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="planetType"
            onClick={onClickValue}
          />

          <Select
            title={'서비스 유형 (선택)'}
            options={commonCode?.ServiceType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="serviceType"
            onClick={onClickValue}
          />

          <Select
            title={'수익 모델 (선택)'}
            options={commonCode?.RevenueModelType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="revenueModelType"
            onClick={onClickValue}
          />
          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'정보 저장하기'} />
            {/*<FlexBox justify={'center'} align={'center'} style={{ marginTop: '22px' }}>*/}
            {/*  <span css={[caption1_regular, { color: colors.red }]}>프로덕트 삭제하기</span>*/}
            {/*  <Icon name={'NAVIGATION_CLOSE_SM'} iconColor={colors.red} />*/}
            {/*</FlexBox>*/}
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamProductCreateModal;
