import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { isShow, updateReturnPage } from '../../../store/reducers/modalReducer';
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
import { body3_medium, caption1_regular } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
// Typesz
// import { InputType } from '../AddInfoPopup';
import { InputType } from '../../../common/types/commonTypes';
import { ReducerType } from '../../../store/reducers';
import { CURRENT_DOMAIN, EMAIL_CONFIRM_TEMPLATE } from '../../../common/util/commonVar';
import { useQueryClient } from 'react-query';
import { signupAction } from '../../../store/reducers/authReducer';
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

  const handleSignup = (status, signupData) => {
    const { consentToUseMarketingYn, password, privacyConsentYn, userId } = signupData;

    const sendObject = {
      userId,
      password,
      userName: userId.split('@')[0],
      privacyConsentYn: 'Y',
      emailTemplateName: EMAIL_CONFIRM_TEMPLATE,
    };

    dispatch(signupAction({ sendObject, callback: router }));
    // signupMutate(sendObject);
  };

  // 구글 로그인
  const loginWithGoogle = useCallback(() => {
    router.push(`${process.env.NEXT_PUBLIC_GOOGLE}/api/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google&requestView=register`);
  }, []);

  // 회원가입 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '정보를 입력해주세요.', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  // 로그인 돌아가기
  const handleGoBackLogin = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'login' }));
  }, []);

  const showPolicyPage = useCallback(page => {
    dispatch(updateReturnPage(true));
    router.push(page);
  }, []);

  // useEffect(() => {
  //   if (signupData?.code === '201') {
  //     localStorage.setItem('accessToken', signupData.data.token);
  //     dispatch(setToken(signupData.data.token));
  //     dispatch(showToast({ message: signupData.message, isShow: true, status: 'success', duration: 5000 }));
  //   }
  // }, [signupData]);

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
            errorMsg={'올바른 이메일을 입력해주세요.'}
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
            errorMsg={'비밀번호는 문자+숫자 6자 이상 조합해주세요.'}
            placeholder={'비밀번호를 입력해주세요.'}
            registerOptions={{
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,20}$/,
            }}
          />
          <AnnouncementBox style={{ marginTop: '12px' }} content={'*비밀번호는 문자+숫자 6자 이상 조합해주세요.'} />
          <div css={[caption1_regular, { marginTop: '32px' }]}>
            Diby의 계정을 생성할 때,&nbsp;
            <TextButton onClick={() => showPolicyPage('/rules/service/20220705')} textStyle={caption1_regular} text={'이용약관'} />
            과&nbsp;
            <TextButton onClick={() => showPolicyPage('/policy/privacy/20220705')} textStyle={caption1_regular} text={'개인정보처리방침'} />
            ,&nbsp; 정보수신에&nbsp; 동의해요.
          </div>
          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton type={'submit'} text={'간편하게 시작하기'} style={{ marginBottom: '18px' }} />
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
