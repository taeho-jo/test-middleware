import React, { useCallback, useEffect, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import { showToast } from '../../../store/reducers/toastReducer';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { CURRENT_DOMAIN, INVITE_CONFIRM_EMAIL_TEMPLATE } from '../../../common/util/commonVar';
import { loginAction, signupAction } from '../../../store/reducers/authReducer';
import { body3_medium } from '../../../styles/FontStyles';
import TextButton from '../../atoms/Button/TextButton';
import AnnouncementBox from '../../molecules/AnnouncementBox';

const WelcomeComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const localToken = localStorage.getItem('accessToken');

  const { teamSeq, type } = router.query;

  const [toggleStatus, setToggleStatus] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => (toggleStatus ? handleLogin('loginsuccess', data) : handleSignup('success', data));
  const onError = errors => handleProcessingError('fail', errors);

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
            emailTemplateName: INVITE_CONFIRM_EMAIL_TEMPLATE,
            teamSeq: teamSeq,
          };
        } else {
          sendObject = {
            userId,
            password,
            userName: userId.split('@')[0],
            privacyConsentYn: 'Y',
            emailTemplateName: INVITE_CONFIRM_EMAIL_TEMPLATE,
          };
        }

        dispatch(signupAction({ sendObject, callback: router }));
      }
    },
    [toggleStatus, teamSeq],
  );

  // 이메일 로그인
  const handleLogin = useCallback(
    (status, loginData) => {
      const { password, userId } = loginData;
      if (toggleStatus) {
        const sendObject = {
          userId,
          password,
        };
        dispatch(loginAction({ ...sendObject, callback: router, teamSeq: teamSeq }));
      }
    },
    [toggleStatus],
  );

  // 구글 로그인
  const loginWithGoogle = () => {
    router.push(`${process.env.NEXT_PUBLIC_GOOGLE}/api/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?teamSeq=${teamSeq}&type=google`);
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
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,20}$/,
            }}
          />
          {!toggleStatus && <AnnouncementBox style={{ marginTop: '12px' }} content={'*비밀번호는 문자+숫자 6자 이상 조합해주세요.'} />}

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
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default WelcomeComponent;
