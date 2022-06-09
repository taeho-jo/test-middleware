import React, { useCallback, useEffect, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import { body3_medium, caption1_regular } from '../../../styles/FontStyles';
import TextButton from '../../atoms/Button/TextButton';
import { showToast } from '../../../store/reducers/toastReducer';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { colors } from '../../../styles/Common.styles';
import { useGetInviteTeamUserInfo, useGetUserInfo } from '../../../api/userApi';
import { useSignupApi } from '../../../api/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReducerType } from '../../../store/reducers';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { CURRENT_DOMAIN, EMAIL_CONFIRM_TEMPLATE } from '../../../common/util/commonVar';
import { isShow } from '../../../store/reducers/modalReducer';

const WelcomeComponent = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = localStorage.getItem('accessToken');
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);

  const [teamSeq, setTeamSeq] = useState(null);

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

  const { refetch } = useGetInviteTeamUserInfo(teamSeq, false);

  const { data, isLoading, mutate } = useSignupApi(refetch);

  const handleSignup = useCallback((status, signupData) => {
    const { consentToUseMarketingYn, password, privacyConsentYn, userId } = signupData;
    console.log(signupData, 'signupdata');

    const sendObject = {
      userId,
      password,
      userName: userId.split('@')[0],
      privacyConsentYn: 'Y',
      consentToUseMarketingYn: 'Y',
      emailTemplateName: EMAIL_CONFIRM_TEMPLATE,
    };
    mutate(sendObject);
  }, []);

  // 구글 로그인
  const loginWithGoogle = useCallback(() => {
    router.push(`https://stag-backend.diby.io/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google`);
  }, []);

  // 회원가입 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    dispatch(showToast({ message: '정보를 입력해주세요.', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  useEffect(() => {
    if (token && teamSeq) {
      refetch();
    } else {
      return;
    }
  }, [teamSeq]);

  useEffect(() => {
    if (router.query) {
      setTeamSeq(router.query.teamseq);
    }
  }, [router.query]);

  return (
    <FlexBox style={{ marginTop: '160px', height: '100%' }} justify={'flex-start'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={'회원가입'} titlePosition={'center'} closed={false} />
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

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton isLoading={isLoading} type={'submit'} text={'간편하게 시작하기'} style={{ marginBottom: '34px' }} />
            <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 시작하기'} textStyle={'custom'} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default WelcomeComponent;
