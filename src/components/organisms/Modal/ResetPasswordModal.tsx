import React, { useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { colors } from '../../../styles/Common.styles';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import ModalTitle from '../../molecules/ModalTitle';
import BasicButton from '../../atoms/Button/BasicButton';
import { isShow } from '../../../store/reducers/modalReducer';
import { body3_medium } from '../../../styles/FontStyles';
import TextButton from '../../atoms/Button/TextButton';
import { useRouter } from 'next/router';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import { PASSWORD_RESET_TEMPLATE } from '../../../common/util/commonVar';
import { resetPassword } from '../../../store/reducers/userReducer';

const subTitleArr = ['비밀번호 재설정을 위해', 'Diby 에서 사용한 이메일을 입력해주세요.'];

const ResetPasswordModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleResetPassword('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const handleProcessingError = useCallback((status, errors) => {
    console.log(status, errors);
  }, []);

  const handleGoBackLogin = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'login' }));
  }, []);

  const handleResetPassword = useCallback((status, data) => {
    // console.log(data);
    const sendObject = {
      userId: data.email,
      emailTemplateName: PASSWORD_RESET_TEMPLATE,
    };
    sessionStorage.setItem('userId', data.email);
    dispatch(resetPassword({ sendObject }));
  }, []);

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={'비밀번호 재설정'} titlePosition={'flex-start'} />
        <ModalSubTitle subTitle={subTitleArr} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 26px', boxSizing: 'border-box' }}>
          <Input
            title={'이메일'}
            register={register}
            label={'email'}
            errors={errors}
            errorMsg={'이메일을 입력해주세요.'}
            placeholder={'이메일을 입력해주세요.'}
            registerOptions={{
              required: true,
              pattern: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            }}
          />
          <BasicButton type={'submit'} text={'비밀번호 재설정 메일 보내기'} style={{ marginTop: '32px' }} />
        </Form>

        <FlexBox
          style={{ padding: '16px 24px', background: `${colors.grey._f7}`, borderRadius: '0 0 16px 16px' }}
          justify={'center'}
          align={'center'}
        >
          <TextButton onClick={handleGoBackLogin} textStyle={body3_medium} text={'비밀번호가 생각났어요!'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ResetPasswordModal;
