import React, { useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { colors } from '../../../styles/Common.styles';
import InputFormBox from '../InputFormBox';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import CheckBox from '../../atoms/CheckBox';
import Button from '../../atoms/Button';
import { useForm } from 'react-hook-form';
import { InputType } from '../../organisms/AddInfoPopup';

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
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);

  const {
    register,
    handleSubmit,
    // setFocus,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);

  const handleLogin = useCallback(() => {
    console.log('Login');
  }, []);

  return (
    <FlexBox style={{ marginTop: modalShow ? '160px' : 0 }} justify={'center'} direction={'column'}>
      <PopupBox padding={'30px'} width={'400px'} height={'auto'}>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Input
            pattern="[A-Za-z0-9]{4,10}"
            // required
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            // disabled={true}
          />

          <Input
            pattern="[A-Za-z0-9]{4,10}"
            // required
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            // disabled={true}
          />

          <Input
            pattern="[A-Za-z0-9]{4,10}"
            // required
            register={register}
            label={'name2'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            // disabled={true}
          />
          <button>asdfasd</button>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default LoginModal;
