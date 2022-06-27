import React, { useCallback } from 'react';
import ModalTitle from '../../molecules/ModalTitle';
import { body3_medium, heading4_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import Form from '../../atoms/Form';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Input from '../../atoms/Input';
import BasicButton from '../../atoms/Button/BasicButton';
import FlexBox from '../../atoms/FlexBox';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import { fetchChangePasswordApi } from '../../../api/authApi';
import { useRouter } from 'next/router';
import TextButton from '../../atoms/Button/TextButton';
import { useMutation } from 'react-query';

const pwInquiryInputArr = [
  {
    label: 'password1',
    placeholder: '비밀번호를 입력해주세요.',
    errorMsg: '6자리 이상 입력해주세요.',
    pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
    type: 'password',
  },
];

const ResetPw = () => {
  const email = sessionStorage.getItem('userId');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleResetPassword('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const { mutate, isLoading, data } = useMutation(['fetchChangePassword'], fetchChangePasswordApi);

  const handleResetPassword = useCallback((status, data) => {
    const sendObject = {
      password: data.password,
    };
    mutate(sendObject);
  }, []);
  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const removeSesstionStorage = useCallback(() => {
    sessionStorage.clear();
    router.replace('/');
  }, []);

  return (
    <div css={mainBox}>
      <div css={contentsBox}>
        <ModalTitle title={'새로운 비밀번호를 입력해주세요.'} closed={false} titlePosition={'center'} />

        <div css={subTitle}>
          <span css={[heading4_bold]}>{email}</span>
        </div>

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 0' }}>
          <div css={{ marginTop: '16px' }}>
            <Input
              title={'새 비밀번호'}
              register={register}
              label={'password'}
              type={'password'}
              errors={errors}
              errorMsg={'필수 항목입니다.'}
              placeholder={'새 비밀번호를 입력해주세요.'}
              style={{ marginBottom: '16px' }}
              registerOptions={{
                required: true,
                // onChange: e => updateLoginField('userId', e.target.value),
                pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
              }}
            />
          </div>

          <AnnouncementBox content={`<div>*비밀번호는 문자+숫자 6자 이상 조합해주세요.</div>`} />

          <FlexBox style={{ margin: '32px 0 40px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} isLoading={false} type={'submit'} text={'비밀번호 재설정하기'} />
          </FlexBox>

          <FlexBox justify={'center'} align={'center'}>
            <TextButton onClick={removeSesstionStorage} textStyle={body3_medium} text={'비밀번호가 기억났어요!'} />
          </FlexBox>
        </Form>
      </div>
    </div>
  );
};

export default ResetPw;

const mainBox = css`
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const contentsBox = css`
  width: 425px;
  //height: 408px;
  margin-top: 112px;
  //padding-bottom: 40px;
  background: white;
`;
const subTitle = css`
  padding: 32px 40px 16px;
  text-align: center;
`;
const paddingBox = css`
  padding: 0 96px;
`;
