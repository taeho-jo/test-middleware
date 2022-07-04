import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../../store/reducers/toastReducer';
import { isShow } from '../../../store/reducers/modalReducer';
// API
import { fetchSignupApi } from '../../../api/authApi';
// Libraries
import { useForm } from 'react-hook-form';
// Components
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import TextButton from '../../atoms/Button/TextButton';
import CheckBox from '../../atoms/CheckBox';
import ModalTitle from '../../molecules/ModalTitle';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
// Styles
import { body3_medium, caption1_regular } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
// Typesz
// import { InputType } from '../AddInfoPopup';
import { InputType } from '../../../common/types/commonTypes';
import { ReducerType } from '../../../store/reducers';
import { fetchUserInfoApi } from '../../../api/userApi';
import { CURRENT_DOMAIN, EMAIL_CONFIRM_TEMPLATE } from '../../../common/util/commonVar';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { setToken } from '../../../store/reducers/authReducer';
import { setUserInfo } from '../../../store/reducers/userReducer';
import AnnouncementBox from '../../molecules/AnnouncementBox';

// const CURRENT_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN;

const SignupModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    // setFocus,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleSignup('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const {
    mutate: signupMutate,
    isLoading,
    data: signupData,
  } = useMutation(['signup'], fetchSignupApi, {
    onError: (e: any) => {
      const { data } = e.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
    },
  });

  const { data: usersInfo } = useQuery(['fetchUserInfo', `signup/${signupData?.code}`], () => fetchUserInfoApi(signupData?.data.token), {
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
  });

  const handleSignup = useCallback((status, signupData) => {
    const { consentToUseMarketingYn, password, privacyConsentYn, userId } = signupData;

    const sendObject = {
      userId,
      password,
      userName: userId.split('@')[0],
      privacyConsentYn: 'Y',
      consentToUseMarketingYn: 'Y',
      emailTemplateName: EMAIL_CONFIRM_TEMPLATE,
    };
    signupMutate(sendObject);
  }, []);

  // 구글 로그인
  const loginWithGoogle = useCallback(() => {
    router.push(`https://stag-backend.diby.io/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google`);
  }, []);

  // 회원가입 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    dispatch(showToast({ message: '정보를 입력해주세요.', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  // 로그인 돌아가기
  const handleGoBackLogin = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'login' }));
  }, []);

  useEffect(() => {
    if (signupData?.code === '201') {
      localStorage.setItem('accessToken', signupData.data.token);
      dispatch(setToken(signupData.data.token));
      dispatch(showToast({ message: signupData.message, isShow: true, status: 'success', duration: 5000 }));
    }
  }, [signupData]);

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={'회원가입'} titlePosition={'space-between'} />
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
              // pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
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
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,20}$/,
            }}
          />
          <AnnouncementBox style={{ marginTop: '12px' }} content={'*비밀번호는 문자+숫자 6자 이상 조합해주세요.'} />
          <div css={[caption1_regular, { marginTop: '32px' }]}>
            Diby의 계정을 생성할 때,&nbsp;
            <TextButton
              onClick={() =>
                dispatch(showToast({ message: '이용약관으로 이동 할겁니다. 링크주세욤', isShow: true, status: 'success', duration: 5000 }))
              }
              textStyle={caption1_regular}
              text={'이용약관'}
            />
            과&nbsp;
            <TextButton
              onClick={() =>
                dispatch(showToast({ message: '개인정보처리방침으로 이동 할겁니다. 링크주세욤', isShow: true, status: 'warning', duration: 5000 }))
              }
              textStyle={caption1_regular}
              text={'개인정보처리방침'}
            />
            ,&nbsp;
            <TextButton
              onClick={() => dispatch(showToast({ message: '정보수신으로 이동 할겁니다. 링크주세욤', isShow: true, status: '', duration: 5000 }))}
              textStyle={caption1_regular}
              text={'정보수신'}
            />
            에&nbsp; 동의해요.
          </div>

          {/* TODO: checkBox 혹시 모르니 우선 주석*/}
          {/*<CheckBox*/}
          {/*  style={{ marginTop: '42px', marginBottom: '8px' }}*/}
          {/*  inputName={'privacyConsentYn'}*/}
          {/*  label={*/}
          {/*    'Diby <a style="text-decoration: underline">이용약관</a>과 <a style="text-decoration: underline">개인 정보처리 방침</a>에 동의합니다. (필수)'*/}
          {/*  }*/}
          {/*  register={register}*/}
          {/*  errors={errors}*/}
          {/*  registerOptions={{*/}
          {/*    required: true,*/}
          {/*  }}*/}
          {/*/>*/}
          {/*<CheckBox*/}
          {/*  style={{ marginBottom: '62px' }}*/}
          {/*  inputName={'consentToUseMarketingYn'}*/}
          {/*  label={'Diby에서 발행하는 UX / CX 아티클과 연구자료를<br> 받아볼게요. (선택)'}*/}
          {/*  register={register}*/}
          {/*  errors={errors}*/}
          {/*/>*/}
          {/* TODO: checkBox 혹시 모르니 우선 주석*/}
          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton isLoading={isLoading} type={'submit'} text={'간편하게 시작하기'} style={{ marginBottom: '18px' }} />
            <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 시작하기'} />
          </FlexBox>
        </Form>

        <FlexBox
          style={{ padding: '16px 24px', background: `${colors.grey._f7}`, borderRadius: '0 0 16px 16px' }}
          justify={'center'}
          align={'center'}
        >
          <TextButton onClick={handleGoBackLogin} textStyle={body3_medium} text={'계정이 있어요!'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default SignupModal;
