import React, { useCallback, useEffect } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { isShow } from '../../../store/reducers/modalReducer';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo, updateCancelWithdrawal, updateErrorMessage, updateWithdrawalUserInfo } from '../../../store/reducers/userReducer';
import { ReducerType } from '../../../store/reducers';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import { fetchLoginApi } from '../../../api/authApi';
import { showToast } from '../../../store/reducers/toastReducer';
import { fetchUserInfoApi } from '../../../api/userApi';
import { setToken } from '../../../store/reducers/authReducer';
const CURRENT_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN;
const CancelWithdrawalModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const loginType = useSelector<ReducerType, string>(state => state.auth.loginType);
  const withdrawalUserInfo = useSelector<ReducerType, any>(state => state.user.withdrawalUserInfo);

  const {
    mutate: loginMutate,
    isLoading,
    data: loginData,
  } = useMutation(['login'], fetchLoginApi, {
    onError: (e: any) => {
      const { data } = e.response;
      dispatch(showToast({ message: data.message, isShow: true, status: 'warning', duration: 5000 }));
      if (data.code === 'E0022') {
        dispatch(isShow({ isShow: true, type: 'cancelWithdrawalModal' }));
        dispatch(updateCancelWithdrawal(true));
      }
    },
  });

  const { data: usersInfo } = useQuery(['fetchUserInfo', `signup/${loginData?.code}`], () => fetchUserInfoApi(loginData?.data.token), {
    enabled: !!loginData?.code,
  });

  const closeModal = useCallback(() => {
    dispatch(updateCancelWithdrawal(false));
    dispatch(updateErrorMessage(''));
    dispatch(
      updateWithdrawalUserInfo({
        userId: '',
        password: '',
      }),
    );
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);
  const handleChange = () => {
    if (loginType === 'google') {
      router.push(
        `${process.env.NEXT_PUBLIC_GOOGLE}/oauth2/authorization/google?redirect_uri=${CURRENT_DOMAIN}?type=google&requestView=login&userDelWithdraw=Y`,
      );
    }
    if (loginType === 'email') {
      const sendObject = {
        userId: withdrawalUserInfo.userId,
        password: withdrawalUserInfo.password,
        userDelWithdraw: 'Y',
      };
      loginMutate(sendObject);
    }
    // dispatch(isShow({ isShow: true, type: 'login' }));
  };

  useEffect(() => {
    if (loginData?.code === '200') {
      localStorage.setItem('accessToken', loginData.data.token);
      dispatch(setToken(loginData.data.token));
      dispatch(showToast({ message: '로그인에 성공하였습니다.', isShow: true, status: 'success', duration: 5000 }));
      dispatch(isShow({ isShow: false, type: '' }));
      dispatch(
        updateWithdrawalUserInfo({
          userId: '',
          password: '',
        }),
      );
      sessionStorage.clear();
      dispatch(setUserInfo(loginData.data));
      if (loginData.data.emailVerifiedYn === 'N') {
        dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (loginData.data.emailVerifiedYn === 'Y') {
        router.push('/admin/team');
      }

      // router.push('/admin/team');
    }
  }, [loginData]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle closed={false} style={{ height: 'auto', padding: '24px 32px' }} title={<>계정 삭제를 철회하시겠어요?</>} />
        <ModalSubTitle subTitle={[<>계정 삭제가 진행중인 계정입니다.</>, <>계정 삭제 의사를 철회하시겠습니까?</>]} />

        <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
          <BasicButton onClick={closeModal} theme={'dark'} text={'취소'} style={{ width: '160px', padding: '16px 52px' }} />
          <BasicButton
            onClick={handleChange}
            designBgColor={colors.cyan._500}
            text={'삭제 철회하기'}
            style={{ width: '160px', padding: '16px 0', whiteSpace: 'nowrap' }}
          />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};
export default CancelWithdrawalModal;
