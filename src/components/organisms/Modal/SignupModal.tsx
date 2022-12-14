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

  // ?????? ?????????
  const loginWithGoogle = useCallback(() => {
    router.push(`${process.env.NEXT_PUBLIC_GOOGLE}/api/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google&requestView=register`);
  }, []);

  // ???????????? ?????? ??????
  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '????????? ??????????????????.', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  // ????????? ????????????
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
        <ModalTitle title={'????????????'} titlePosition={'space-between'} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'?????????'}
            register={register}
            label={'userId'}
            errors={errors}
            errorMsg={'????????? ???????????? ??????????????????.'}
            placeholder={'???????????? ??????????????????.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
              pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            }}
          />
          <Input
            title={'????????????'}
            type={'password'}
            register={register}
            label={'password'}
            errors={errors}
            errorMsg={'??????????????? ??????+?????? 6??? ?????? ??????????????????.'}
            placeholder={'??????????????? ??????????????????.'}
            registerOptions={{
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,20}$/,
            }}
          />
          <AnnouncementBox style={{ marginTop: '12px' }} content={'*??????????????? ??????+?????? 6??? ?????? ??????????????????.'} />
          <div css={[caption1_regular, { marginTop: '32px' }]}>
            Diby??? ????????? ????????? ???,&nbsp;
            <TextButton onClick={() => showPolicyPage('/rules/service/20220705')} textStyle={caption1_regular} text={'????????????'} />
            ???&nbsp;
            <TextButton onClick={() => showPolicyPage('/policy/privacy/20220705')} textStyle={caption1_regular} text={'????????????????????????'} />
            ,&nbsp; ???????????????&nbsp; ????????????.
          </div>
          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton type={'submit'} text={'???????????? ????????????'} style={{ marginBottom: '18px' }} />
            <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'????????? ????????????'} />
          </FlexBox>
        </Form>

        <FlexBox
          style={{ padding: '16px 24px', background: `${colors.grey._f7}`, borderRadius: '0 0 16px 16px' }}
          justify={'center'}
          align={'center'}
        >
          <TextButton onClick={handleGoBackLogin} textStyle={body3_medium} text={'????????? ?????????!'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default SignupModal;
