import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import { PASSWORD_RESET_TEMPLATE } from '../../../common/util/commonVar';
import { useRouter } from 'next/router';
import { ReducerType } from '../../../store/reducers';
import { resetPassword } from '../../../store/reducers/userReducer';

const ConfirmResetPasswordModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userEmail = sessionStorage.getItem('userId');
  const signupUserInfo = useSelector<ReducerType, { userName: string; userId: string }>(state => state.auth.signupUserInfo);

  const resetPasswordSubTitleArr = [`${userEmail} 로`, '새 비밀번호를 설정할 수 있는 메일을 보냈어요.', '새로운 비밀번호를 설정해주세요.'];

  const resendEmail = useCallback(() => {
    const sendObject = {
      userId: sessionStorage.getItem('userId'),
      emailTemplateName: PASSWORD_RESET_TEMPLATE,
    };
    dispatch(resetPassword({ sendObject }));
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
