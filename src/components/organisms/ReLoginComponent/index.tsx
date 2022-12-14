import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
// Redux
import { showToast } from '../../../store/reducers/toastReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// API
import { fetchLoginApi } from '../../../api/authApi';
// Libraries
import { useForm } from 'react-hook-form';
// Components
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import TextButton from '../../atoms/Button/TextButton';
import ModalTitle from '../../molecules/ModalTitle';
import BasicButton from '../../atoms/Button/BasicButton';
// Styles
import { css } from '@emotion/react';
import { body3_medium } from '../../../styles/FontStyles';
// Types
import { InputType } from '../../../common/types/commonTypes';
import { useMutation, useQuery } from 'react-query';
import { fetchUserInfoApi } from '../../../api/userApi';
import { setUserInfo, updateCancelWithdrawal, updateWithdrawalUserInfo } from '../../../store/reducers/userReducer';
import { isShow } from '../../../store/reducers/modalReducer';

const ReLoginComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const isWithdrawalUser = useSelector<ReducerType, boolean>(state => state.user.cancelWithdrawal);

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleLogin('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  // const loginResponse = useLoginApi();
  const {
    mutate: loginMutate,
    isLoading,
    data: loginData,
  } = useMutation(['login'], fetchLoginApi, {
    onError: (e: any) => {
      const { data } = e.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
      if (data.code === 'E0022') {
        dispatch(isShow({ isShow: true, type: 'cancelWithdrawalModal' }));
        dispatch(updateCancelWithdrawal(true));
      }
    },
  });

  const { data: usersInfo } = useQuery(['fetchUserInfo', `signup/${loginData?.code}`], () => fetchUserInfoApi(loginData?.data.token), {
    enabled: !!loginData?.code,
    onSuccess: data => {
      sessionStorage.clear();
      dispatch(setUserInfo(data.data));
      if (data.data.emailVerifiedYn === 'N') {
        dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (data.data.emailVerifiedYn === 'Y') {
        router.push('/admin/team');
      }
    },
  });

  // ????????? ?????????
  const handleLogin = useCallback(
    (status, data) => {
      dispatch(
        updateWithdrawalUserInfo({
          userId: data.userId,
          password: data.password,
        }),
      );
      const sendObject = {
        userId: data.userId,
        password: data.password,
        userDelWithdraw: 'Y',
      };
      if (isWithdrawalUser) {
        loginMutate(sendObject);
      } else {
        loginMutate(data);
      }
    },
    [isWithdrawalUser],
  );

  useEffect(() => {
    if (loginData) {
      const token = loginData?.data?.token;
      localStorage.setItem('accessToken', token);
    }
  }, [loginData]);

  // ????????? ?????? ??????
  const handleProcessingError = useCallback((status, errors) => {
    dispatch(showToast({ message: '????????? ????????? ????????????. ?????? ??????????????????!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle closed={false} title={'?????????'} titlePosition={'center'} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'?????????'}
            register={register}
            label={'userId'}
            errors={errors}
            errorMsg={'?????? ???????????????.'}
            placeholder={'???????????? ??????????????????.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
              // onChange: e => updateLoginField('userId', e.target.value),
              pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            }}
          />

          <Input
            title={'????????????'}
            type={'password'}
            // pattern="[A-Za-z0-9]{6,10}"
            // required
            register={register}
            label={'password'}
            errors={errors}
            errorMsg={'?????? ???????????????.'}
            placeholder={'??????????????? ??????????????????.'}
            // disabled={true}
            registerOptions={{
              required: true,
              // onChange: e => updateLoginField('password', e.target.value),
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
            }}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton isLoading={isLoading} type={'submit'} text={'???????????????'} style={{ marginBottom: '18px' }} />
          </FlexBox>
        </Form>
        <FlexBox justify={'center'} align={'center'}>
          <TextButton textStyle={body3_medium} text={'??????????????? ?????? ???????????? ????????????????'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ReLoginComponent;

const bottomTextStyle = css`
  cursor: pointer;
`;
