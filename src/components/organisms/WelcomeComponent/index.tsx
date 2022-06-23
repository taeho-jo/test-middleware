import React, { useCallback, useEffect, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import { showToast } from '../../../store/reducers/toastReducer';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { fetchLoginApi, fetchSignupApi } from '../../../api/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReducerType } from '../../../store/reducers';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { CURRENT_DOMAIN, INVITE_CONFIRM_EMAIL_TEMPLATE } from '../../../common/util/commonVar';
import { useMutation, useQuery } from 'react-query';
import { setToken } from '../../../store/reducers/authReducer';
import { body3_medium } from '../../../styles/FontStyles';
import TextButton from '../../atoms/Button/TextButton';
import { isShow } from '../../../store/reducers/modalReducer';
import { fetchInviteUserInfoApi, fetchUserInfoApi } from '../../../api/userApi';
import { setUserInfo } from '../../../store/reducers/userReducer';

const WelcomeComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = localStorage.getItem('accessToken');
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);

  const [teamSeq, setTeamSeq] = useState(null);

  const [toggleStatus, setToggleStatus] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    // setFocus,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => (toggleStatus ? handleLogin('loginsuccess', data) : handleSignup('success', data));

  const onError = errors => handleProcessingError('fail', errors);

  const { mutate: loginMutate, data: loginData } = useMutation(['login'], fetchLoginApi, {
    onError: (e: any) => {
      const { data } = e.response;
      console.log(data, 'DATA');
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
    },
  });
  const { data: LoginUsersInfo } = useQuery(
    ['fetchInviteUserInfo', `login/${loginData?.code}`],
    () => fetchInviteUserInfoApi(teamSeq, loginData?.data.token),
    {
      enabled: !!loginData?.code,
      onSuccess: data => {
        dispatch(setUserInfo(data.data));
        if (data.data.emailVerifiedYn === 'N') {
          dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
        }
        if (data.data.emailVerifiedYn === 'Y') {
          router.push('/admin/team');
        }
      },
    },
  );

  const { mutate: signupMutate, data: signupData } = useMutation(['signup', 'invite', teamSeq], fetchSignupApi, {
    onError: (e: any) => {
      const { data } = e.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
    },
    onSuccess: data => {
      localStorage.setItem('accessToken', signupData.data.token);
      dispatch(setToken(signupData.data.token));
      dispatch(showToast({ message: data.message, isShow: true, status: 'success', duration: 5000 }));
    },
  });
  const { data: signUpUsersInfo } = useQuery(
    ['fetchInviteUserInfo', `sign/${signupData?.code}`],
    () => fetchInviteUserInfoApi(router.query.teamSeq, loginData?.data.token),
    {
      enabled: !!signupData?.code,
      onSuccess: data => {
        dispatch(setUserInfo(data.data));
        if (data.data.emailVerifiedYn === 'N') {
          dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
        }
        if (data.data.emailVerifiedYn === 'Y') {
          router.push('/admin/team');
        }
      },
    },
  );

  // token이 있는 경우 --> 로그인이 되어있는 경우
  // 회원가입 후

  const handleSignup = useCallback(
    (status, signupData) => {
      const { consentToUseMarketingYn, password, privacyConsentYn, userId } = signupData;
      console.log(signupData, 'signupdata');

      if (!toggleStatus) {
        const sendObject = {
          userId,
          password,
          userName: userId.split('@')[0],
          privacyConsentYn: 'Y',
          consentToUseMarketingYn: 'Y',
          emailTemplateName: INVITE_CONFIRM_EMAIL_TEMPLATE,
        };
        signupMutate(sendObject);
      }
    },
    [toggleStatus],
  );

  const handleLogin = useCallback(
    (status, loginData) => {
      const { password, userId } = loginData;
      if (toggleStatus) {
        const sendObject = {
          userId,
          password,
        };
        loginMutate(sendObject);
      }
    },
    [toggleStatus],
  );

  // 구글 로그인
  const loginWithGoogle = useCallback(() => {
    router.push(`https://stag-backend.diby.io/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google`);
  }, []);

  // 회원가입 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    dispatch(showToast({ message: '정보를 입력해주세요.', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  useEffect(() => {
    if (router.query) {
      setTeamSeq(router.query.teamseq);
    }
  }, [router.query]);

  console.log(router.query.teamSeq, ' TEAM');

  // useEffect(() => {
  //   if (loginData?.code === '200') {
  //     localStorage.setItem('accessToken', loginData.data.token);
  //     dispatch(setToken(loginData.data.token));
  //     dispatch(showToast({ message: '로그인에 성공하였습니다.', isShow: true, status: 'success', duration: 5000 }));
  //     dispatch(isShow({ isShow: false, type: '' }));
  //     sessionStorage.clear();
  //     router.push('/admin/team');
  //   }
  // }, [loginData]);

  const handleGoBackLogin = useCallback(() => {
    setToggleStatus(true);
  }, []);
  return (
    <FlexBox style={{ marginTop: '160px', height: '100%' }} justify={'flex-start'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={toggleStatus ? '로그인 ' : '회원가입'} titlePosition={'center'} closed={false} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'이메일'}
            register={register}
            label={'userId'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'이메일을 입력해주세요.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
              pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
            }}
          />
          <Input
            title={'비밀번호'}
            type={'password'}
            register={register}
            label={'password'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'비밀번호를 입력해주세요.'}
            registerOptions={{
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
            }}
          />

          {toggleStatus ? (
            <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
              <BasicButton type={'submit'} text={'로그인하기'} style={{ marginBottom: '34px' }} />
            </FlexBox>
          ) : (
            <>
              <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
                <BasicButton type={'submit'} text={'간편하게 시작하기'} style={{ marginBottom: '34px' }} />
                <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 시작하기'} textStyle={'custom'} />
              </FlexBox>

              <FlexBox style={{ marginTop: '48px' }}>
                <TextButton onClick={handleGoBackLogin} textStyle={body3_medium} text={'계정이 있어요!'} />
              </FlexBox>
            </>
          )}
          {/*<FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>*/}
          {/*  <BasicButton type={'submit'} text={'간편하게 시작하기'} style={{ marginBottom: '34px' }} />*/}
          {/*  <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 시작하기'} textStyle={'custom'} />*/}
          {/*</FlexBox>*/}
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default WelcomeComponent;
