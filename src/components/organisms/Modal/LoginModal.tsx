import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// API
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
import IconTextButton from '../../atoms/Button/IconTextButton';
// Styles
import { isShow } from '../../../store/reducers/modalReducer';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_medium } from '../../../styles/FontStyles';
// Types
import { InputType } from '../../../common/types/commonTypes';
import { loginAction, updateLoginType } from '../../../store/reducers/authReducer';
import { updateWithdrawalUserInfo } from '../../../store/reducers/userReducer';

const CURRENT_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN;

const LoginModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const isWithdrawalUser = useSelector<ReducerType, boolean>(state => state.user.cancelWithdrawal);
  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleLogin('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  // 이메일 로그인
  const handleLogin = useCallback(
    (status, data) => {
      dispatch(
        updateWithdrawalUserInfo({
          userId: data.userId,
          password: data.password,
        }),
      );
      dispatch(updateLoginType('email'));
      const sendObject = {
        userId: data.userId,
        password: data.password,
        userDelWithdraw: 'Y',
      };
      // if (isWithdrawalUser) {
      //   console.log('탈퇴유저 로그인');
      //   console.log(sendObject, 'a');
      // dispatch(loginAction(sendObject));
      // } else {
      const pathname = router.pathname;
      if (pathname === '/admin/research/recommendation/result') {
        console.log('리서치 추천 받은 유저');
        dispatch(loginAction({ ...data, callback: router, recommendation: true }));
      } else {
        console.log('일반 유저 로그인');
        dispatch(loginAction({ ...data, callback: router }));
      }
      // }
    },
    [isWithdrawalUser],
  );

  // 구글 로그인
  const loginWithGoogle = useCallback(() => {
    if (isWithdrawalUser) {
      router.push(
        `${process.env.NEXT_PUBLIC_GOOGLE}/api/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google&requestView=login&userDelWithdraw=Y`,
      );
    } else {
      dispatch(updateLoginType('google'));
      router.push(`${process.env.NEXT_PUBLIC_GOOGLE}/api/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google&requestView=login`);
    }
  }, [isWithdrawalUser]);

  // 로그인 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  // 비밀번호 찾기 클릭
  const handleFindPassword = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'resetPassword' }));
  }, []);

  // 회원가입 클릭
  const handleSignupMember = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'signup' }));
  }, []);

  // useEffect(() => {
  //   if (loginData?.code === '200') {
  //     localStorage.setItem('accessToken', loginData.data.token);
  //     dispatch(setToken(loginData.data.token));
  //     dispatch(showToast({ message: '로그인에 성공하였습니다.', isShow: true, status: 'success', duration: 5000 }));
  //     dispatch(isShow({ isShow: false, type: '' }));
  //     dispatch(
  //       updateWithdrawalUserInfo({
  //         userId: '',
  //         password: '',
  //       }),
  //     );
  //     sessionStorage.clear();
  //     dispatch(setUserInfo(loginData.data));
  //     if (loginData.data.emailVerifiedYn === 'N') {
  //       dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
  //     }
  //     if (loginData.data.emailVerifiedYn === 'Y') {
  //       router.push('/admin/team');
  //     }
  //
  //     // router.push('/admin/team');
  //   }
  // }, [loginData]);

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={'로그인'} titlePosition={'space-between'} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'이메일'}
            register={register}
            label={'userId'}
            errors={errors}
            errorMsg={'이메일을 입력해주세요.'}
            placeholder={'이메일을 입력해주세요.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
              pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            }}
          />

          <Input
            title={'비밀번호'}
            type={'password'}
            register={register}
            label={'password'}
            errors={errors}
            errorMsg={'비밀번호를 입력해주세요.'}
            placeholder={'비밀번호를 입력해주세요.'}
            registerOptions={{
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,20}$/,
            }}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton type={'submit'} text={'로그인하기'} style={{ marginBottom: '18px' }} />
            <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 로그인'} />
          </FlexBox>
        </Form>

        <FlexBox
          style={{ padding: '16px 24px', background: `${colors.grey._f7}`, borderRadius: '0 0 16px 16px' }}
          justify={'space-between'}
          align={'center'}
        >
          <TextButton onClick={handleFindPassword} textStyle={body3_medium} text={'비밀번호를 잃어버리셨나요?'} />
          <TextButton onClick={handleSignupMember} textStyle={body3_medium} text={'계정이 없으신가요?'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default LoginModal;

const bottomTextStyle = css`
  cursor: pointer;
`;
