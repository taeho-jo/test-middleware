import React, { useCallback, useEffect, useState } from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { colors } from '../../../styles/Common.styles';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import { useForm } from 'react-hook-form';
import { InputType } from '../AddInfoPopup';
import ModalTitle from '../../molecules/ModalTitle';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { isShow } from '../../../store/reducers/modalReducer';
import { body3_medium } from '../../../styles/FontStyles';
import TextButton from '../../atoms/Button/TextButton';
import { useRouter } from 'next/router';
import { showToast } from '../../../store/reducers/toastReducer';
import CheckBox from '../../atoms/CheckBox';
import { useSignup } from '../../../api/authApi';
import { usePutUpdateProductApi } from '../../../api/productsApi';

const SignupModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);

  const {
    register,
    handleSubmit,
    watch,
    // setFocus,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleSignup('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [signupField, setSignupField] = useState({
    userId: '',
    password: '',
    userName: '',
    funnelsCd: '',
    cpPosition: '',
    cpSize: '',
    cxResearch: '',
    purposeOfUse: '',
    privacyConsentYn: '',
    consentToUseMarketingYn: 'N',
  });

  const handleGoBackLogin = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'login' }));
  }, []);

  const { mutate } = useSignup(signupField);

  const handleSignup = useCallback(
    (status, data) => {
      // console.log(data);
      console.log(signupField, 'SIGN UP FIELD');
      mutate();
      // dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
    },
    [signupField],
  );

  const handleProcessingError = useCallback((status, errors) => {
    console.log(status, errors);
    dispatch(showToast({ message: '정보를 입력해주세요.', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const loginWithGoogle = useCallback(() => {
    router.push(`https://stag-backend.diby.io/oauth2/authorization/google?redirect_uri=http://localhost:3000/`);
  }, []);

  const updateSignupField = useCallback(
    (label, value) => {
      console.log(value, 'VALUE');
      setSignupField({
        ...signupField,
        [label]: value,
      });
    },
    [signupField],
  );

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={'회원가입'} titlePosition={'space-between'} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            // watch={watch}
            title={'이메일'}
            register={register}
            label={'userId'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'이메일을 입력해주세요.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
              onChange: e => updateSignupField('userId', e.target.value),
              pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            }}
          />

          <Input
            // watch={watch}
            title={'비밀번호'}
            type={'password'}
            register={register}
            label={'password'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'비밀번호를 입력해주세요.'}
            registerOptions={{
              required: true,
              onChange: e => updateSignupField('password', e.target.value),
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
            }}
          />

          <CheckBox
            style={{ marginTop: '42px', marginBottom: '8px' }}
            inputName={'privacyConsentYn'}
            label={
              'Diby <a style="text-decoration: underline">이용약관</a>과 <a style="text-decoration: underline">개인 정보처리 방침</a>에 동의합니다. (필수)'
            }
            register={register}
            errors={errors}
            registerOptions={{
              onChange: e => updateSignupField('privacyConsentYn', e.target.checked ? 'Y' : 'N'),
              required: true,
            }}
          />
          <CheckBox
            style={{ marginBottom: '62px' }}
            inputName={'consentToUseMarketingYn'}
            label={'Diby에서 발행하는 UX / CX 아티클과 연구자료를<br> 받아볼게요. (선택)'}
            register={register}
            registerOptions={{
              onChange: e => updateSignupField('consentToUseMarketingYn', e.target.checked ? 'Y' : 'N'),
            }}
            errors={errors}
          />

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
