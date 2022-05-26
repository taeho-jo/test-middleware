import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// Redux
import { showToast } from '../../../store/reducers/toastReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// API
import { useLoginApi } from '../../../api/authApi';
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
// Styles
import { css } from '@emotion/react';
import { body3_medium } from '../../../styles/FontStyles';
// Types
import { InputType } from '../../../common/types/commonTypes';

const ReLoginComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleLogin('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const loginResponse = useLoginApi();

  // 이메일 로그인
  const handleLogin = useCallback((status, data) => {
    loginResponse.mutate(data);
  }, []);

  // 로그인 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle closed={false} title={'로그인'} titlePosition={'center'} />
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
              // onChange: e => updateLoginField('userId', e.target.value),
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
              // onChange: e => updateLoginField('password', e.target.value),
              pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
            }}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton isLoading={loginResponse.isLoading} type={'submit'} text={'로그인하기'} style={{ marginBottom: '18px' }} />
          </FlexBox>
        </Form>
        <FlexBox justify={'center'} align={'center'}>
          <TextButton textStyle={body3_medium} text={'비밀번호를 다시 설정하길 원하시나요?'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ReLoginComponent;

const bottomTextStyle = css`
  cursor: pointer;
`;
