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
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { setToken } from '../../../store/reducers/authReducer';
import { body3_medium } from '../../../styles/FontStyles';
import TextButton from '../../atoms/Button/TextButton';
import { isShow } from '../../../store/reducers/modalReducer';
import { fetchInviteUserInfoApi, fetchUserInfoApi } from '../../../api/userApi';
import { setUserInfo } from '../../../store/reducers/userReducer';

const WelcomeComponent = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const localToken = localStorage.getItem('accessToken');

  const { teamSeq, type } = router.query;

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

  // ============ React Query ============ //
  // 로그인
  const { mutate: loginMutate, data: loginData } = useMutation(['login'], fetchLoginApi, {
    onError: (e: any) => {
      const { data } = e.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
    },
    onSuccess: data => {
      // localStorage.setItem('accessToken', data?.data?.token);
      router.push(`/?teamSeq=${teamSeq}&token=${data?.data?.token}`);
    },
  });

  const { mutate: signupMutate, data: signupData } = useMutation(['signup', 'invite', teamSeq], fetchSignupApi, {
    onError: (e: any) => {
      const { data } = e.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
    },
  });

  useEffect(() => {
    if (signupData) {
      localStorage.setItem('accessToken', signupData.data.token);
      dispatch(setToken(signupData.data.token));
      dispatch(showToast({ message: '회원가입에 성공하셨습니다.', isShow: true, status: 'success', duration: 5000 }));
      queryClient.invalidateQueries(['fetchInviteUserInfo']);
    }
  }, [signupData]);
  const { data: signUpUsersInfo, refetch: inviteInfoRefetch } = useQuery(
    ['fetchInviteUserInfo'],
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
  // ============ React Query ============ //

  // token이 있는 경우 --> 로그인이 되어있는 경우
  // 회원가입 후
  const handleSignup = useCallback(
    (status, signupData) => {
      const { consentToUseMarketingYn, password, privacyConsentYn, userId } = signupData;
      let sendObject;
      if (!toggleStatus) {
        if (teamSeq) {
          sendObject = {
            userId,
            password,
            userName: userId.split('@')[0],
            privacyConsentYn: 'Y',
            consentToUseMarketingYn: 'Y',
            emailTemplateName: INVITE_CONFIRM_EMAIL_TEMPLATE,
            teamSeq: teamSeq,
          };
        } else {
          sendObject = {
            userId,
            password,
            userName: userId.split('@')[0],
            privacyConsentYn: 'Y',
            consentToUseMarketingYn: 'Y',
            emailTemplateName: INVITE_CONFIRM_EMAIL_TEMPLATE,
          };
        }

        signupMutate(sendObject);
      }
    },
    [toggleStatus, teamSeq],
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
  const loginWithGoogle = () => {
    router.push(`https://stag-backend.diby.io/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=${teamSeq}`);
  };

  // 회원가입 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    dispatch(showToast({ message: '정보를 입력해주세요.', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const handleGoBackLogin = useCallback(status => {
    setToggleStatus(status);
  }, []);

  useEffect(() => {
    if (teamSeq && localToken) {
      router.push(`/?teamSeq=${teamSeq}&token=${localToken}`);
    }
  }, [teamSeq, localToken]);

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
              pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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
            <>
              <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
                <BasicButton type={'submit'} text={'로그인하기'} style={{ marginBottom: '34px' }} />
                <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 로그인'} textStyle={'custom'} />
              </FlexBox>
              <FlexBox style={{ marginTop: '48px' }}>
                <TextButton onClick={() => handleGoBackLogin(false)} textStyle={body3_medium} text={'계정 만들러가기!'} />
              </FlexBox>
            </>
          ) : (
            <>
              <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
                <BasicButton type={'submit'} text={'간편하게 시작하기'} style={{ marginBottom: '34px' }} />
                <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 시작하기'} textStyle={'custom'} />
              </FlexBox>

              <FlexBox style={{ marginTop: '48px' }}>
                <TextButton onClick={() => handleGoBackLogin(true)} textStyle={body3_medium} text={'계정이 있어요!'} />
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
