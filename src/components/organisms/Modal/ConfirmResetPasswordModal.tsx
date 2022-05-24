import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch } from 'react-redux';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import { showToast } from '../../../store/reducers/toastReducer';
import { useResendEmail } from '../../../api/authApi';

const ConfirmResetPasswordModal = () => {
  const dispatch = useDispatch();
  const userEmail = sessionStorage.getItem('userId');

  // const resendResponse = useResendEmail();

  const resetPasswordSubTitleArr = [`${userEmail} 로`, '새 비밀번호를 설정할 수 있는 메일을 보냈어요.', '새로운 비밀번호를 설정해주세요.'];

  const resendEmail = useCallback(() => {
    // const sendObject;
    // resendResponse.mutate(sendObject);
    dispatch(showToast({ message: '비밀번호 재설정 메일이 발송되었습니다.', isShow: true, status: '', duration: 5000 }));
  }, []);

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
