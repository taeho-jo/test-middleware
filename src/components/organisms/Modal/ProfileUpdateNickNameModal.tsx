import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { useMutation, useQueryClient } from 'react-query';
import { fetchUserInfoUpdateApi } from '../../../api/userApi';
import { setUserInfo } from '../../../store/reducers/userReducer';
import { useRouter } from 'next/router';
import { isShow } from '../../../store/reducers/modalReducer';
import { showToast } from '../../../store/reducers/toastReducer';

const ProfileUpdateNickNameModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleUpdate('success', data);
  const onError = errors => console.log('fail', errors);

  const { mutate } = useMutation('fetchUserInfoUpdate', fetchUserInfoUpdateApi, {
    onSuccess: data => {
      dispatch(setUserInfo(data.data));
      queryClient.invalidateQueries(['fetchUserInfo', 'layout']);
      dispatch(isShow({ isShow: false, type: '' }));
      dispatch(showToast({ message: '닉네임이 수정되었습니다.', isShow: true, status: 'success', duration: 5000 }));
    },
  });

  // userName : 사용자명
  // - funnelsCd : 유입경로
  // - cpPosition : 회사포지션
  // - cpSize : 회사규모
  // - firstTimeYn : 최초사용여부

  const handleUpdate = useCallback((status, data) => {
    const sendObject = {
      userName: data.nickname,
    };
    mutate(sendObject);
    // console.log(sendObject);
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'닉네임을 수정해요.'} />
        <ModalSubTitle subTitle={[`현재 닉네임 : ${userInfo ? userInfo.userName : ''} `]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'닉네임'}
            register={register}
            label={'nickname'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'새 닉네임을 입력해주세요.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
            }}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'닉네임 수정하기'} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default ProfileUpdateNickNameModal;
