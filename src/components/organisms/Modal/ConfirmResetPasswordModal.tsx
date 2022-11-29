import React, { useCallback, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import { showToast } from '../../../store/reducers/toastReducer';
import { useMutation, useQueryClient } from 'react-query';
import { fetchResetPasswordEmailApi } from '../../../api/authApi';
import { isShow } from '../../../store/reducers/modalReducer';
import { PASSWORD_RESET_TEMPLATE } from '../../../common/util/commonVar';
import { useRouter } from 'next/router';
import { clearCookies } from '../../../common/util/commonFunc';
import { getRefreshToken } from '../../../store/reducers/authReducer';
import { ReducerType } from '../../../store/reducers';

const ConfirmResetPasswordModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const userEmail = sessionStorage.getItem('userId');
  const signupUserInfo = useSelector<ReducerType, { userName: string; userId: string }>(state => state.auth.signupUserInfo);

  const resetPasswordSubTitleArr = [`${userEmail} 로`, '새 비밀번호를 설정할 수 있는 메일을 보냈어요.', '새로운 비밀번호를 설정해주세요.'];

  const [sendObject, setSendObject] = useState(null);

  // ============ React Query ============ //
  const { mutate, data, isLoading } = useMutation(['fetchResetPassword'], fetchResetPasswordEmailApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        dispatch(getRefreshToken());
        mutate(sendObject);
        queryClient.invalidateQueries();
      }
      if (errorData.code === 'E0007') {
        clearCookies();
        router.push('/');
      } else {
        dispatch(showToast({ message: '비밀번호 재설정 메일 재발송에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
      }
    },
    onSuccess: data => {
      dispatch(showToast({ message: '비밀번호 재설정 메일이 재발송되었습니다.', isShow: true, status: '', duration: 5000 }));
      dispatch(isShow({ isShow: true, type: 'confirmResetPassword' }));
    },
  });
  // ============ React Query ============ //

  const resendEmail = useCallback(() => {
    const sendObject = {
      userId: signupUserInfo?.userId,
      emailTemplateName: PASSWORD_RESET_TEMPLATE,
    };
    setSendObject(sendObject);
    mutate(sendObject);
    dispatch(showToast({ message: '비밀번호 재설정 메일이 발송되었습니다.', isShow: true, status: '', duration: 5000 }));
  }, [sessionStorage, signupUserInfo]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'메일을 확인해주세요!'} />

        <ModalSubTitle subTitle={resetPasswordSubTitleArr} />

        <ConfirmPopupNextStepBtn
          onClick={resendEmail}
          title={'혹시 이메일을 받지 못했나요?'}
          btnText={'이메일 재전송하기'}
          style={{ padding: '0 40px 40px' }}
        />
      </PopupBox>
    </FlexBox>
  );
};

export default ConfirmResetPasswordModal;
