import React, { useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { colors } from '../../../styles/Common.styles';
import InputFormBox from '../../molecules/InputFormBox';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import CheckBox from '../../atoms/CheckBox';
import Button from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { InputType } from '../AddInfoPopup';
import ModalTitle from '../../molecules/ModalTitle';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { isShow } from '../../../store/reducers/modalReducer';
import { body3_bold, body3_medium, body3_regular } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import TextButton from '../../atoms/Button/TextButton';
import { useRouter } from 'next/router';
import { showToast } from '../../../store/reducers/toastReducer';

const loginInputArr = [
  {
    label: 'email',
    placeholder: 'E-mail을 입력해주세요.',
    errorMsg: 'E-mail양식이 아닙니다.',
    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    type: 'text',
  },
  {
    label: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    errorMsg: '6자리 이상 입력해주세요.',
    pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
    type: 'password',
  },
];

const LoginModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleLogin('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const handleLogin = useCallback((status, data) => {
    console.log(status, data);
    const sendObject = {
      email: data.email,
      password: data.password,
    };
    console.log(sendObject, 'SEND OBJECT');
  }, []);

  // 로그인 실패 로직
  const handleProcessingError = useCallback((status, errors) => {
    console.log(status, errors);
    dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  // 비밀번호 찾기 클릭
  const handleFindPassword = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'resetPassword' }));
  }, []);

  // 회원가입 클릭
  const handleSignupMember = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'signup' }));
  }, []);

  // 구글 로그인
  const loginWithGoogle = useCallback(() => {
    router.push(`https://stag-backend.diby.io/oauth2/authorization/google?redirect_uri=http://localhost:3000/`);
  }, []);

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={'로그인'} titlePosition={'space-between'} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'이메일'}
            // pattern="[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}"
            register={register}
            label={'email'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'이메일을 입력해주세요.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
              pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
            }}
          />

          <Input
            title={'비밀번호'}
            type={'password'}
            // pattern="[A-Za-z0-9]{6,10}"
            // required
            register={register}
            label={'password'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'비밀번호를 입력해주세요.'}
            // disabled={true}
            registerOptions={{
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
            }}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton type={'submit'} text={'로그인하기'} style={{ marginBottom: '18px' }} />
            <IconTextButton onClick={loginWithGoogle} name={'GOOGLE'} iconPosition={'left'} text={'구글로 시작하기'} />
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
