import React, { useCallback, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import { isShow } from '../../../store/reducers/modalReducer';
import { ReducerType } from '../../../store/reducers';
import { EMAIL_CONFIRM_TEMPLATE } from '../../../common/util/commonVar';
import { useRouter } from 'next/router';
import { clearCookies } from '../../../common/util/commonFunc';
import { resendConfirmEmail } from '../../../store/reducers/authReducer';

const ConfirmResetPasswordModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  // const userId = useSelector<ReducerType, string>(state => state?.email);
  const signupUserInfo = useSelector<ReducerType, { userName: string; userId: string }>(state => state.auth.signupUserInfo);

  const [sendObject, setSendObject] = useState(null);

  const SubTitleArr = [
    `${signupUserInfo?.userId !== '' ? signupUserInfo?.userId : userInfo?.userId} 로`,
    '인증 메일을 보내드렸습니다.',
    '메일을 확인하시고, 확인 버튼을 클릭해주세요.',
  ];

  const resendEmail = useCallback(() => {
    const sendObject = {
      emailTemplateName: EMAIL_CONFIRM_TEMPLATE,
    };
    setSendObject(sendObject);
    // mutate(sendObject);
    dispatch(resendConfirmEmail(sendObject));
  }, []);

  const reSignup = useCallback(() => {
    clearCookies();
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
