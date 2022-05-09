import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch } from 'react-redux';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import { showToast } from '../../../store/reducers/toastReducer';
import { isShow } from '../../../store/reducers/modalReducer';

const ConfirmResetPasswordModal = () => {
  const dispatch = useDispatch();
  const userEmail = 'taeho.jo@dbdlab.io';

  const SubTitleArr = [`${userEmail} 로`, '인증 메일을 보내드렸습니다.', '메일을 확인하시고, 확인 버튼을 클릭해주세요.'];

  const resendEmail = useCallback(() => {
    dispatch(showToast({ message: '비밀번호 재설정 메일이 발송되었습니다.', isShow: true, status: '', duration: 5000 }));
  }, []);

  const reSignup = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'signup' }));
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'이메일을 인증해주세요!'} />

        <ModalSubTitle subTitle={SubTitleArr} />

        <ConfirmPopupNextStepBtn
          onClick={resendEmail}
          title={'혹시 이메일을 받지 못했나요?'}
          btnText={'이메일 재전송하기'}
          style={{ padding: '0 40px 16px' }}
        />

        <ConfirmPopupNextStepBtn
          onClick={reSignup}
          title={'이메일 주소를 잘못 입력하셨나요?'}
          btnText={'이메일 다시 입력하러가기'}
          style={{ padding: '0 40px 40px' }}
        />
      </PopupBox>
    </FlexBox>
  );
};

export default ConfirmResetPasswordModal;
