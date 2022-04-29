import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import { showToast } from '../../../store/reducers/toastReducer';
import { isShow } from '../../../store/reducers/modalReducer';

const ConfirmModal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const userEmail = 'taeho.jo@dbdlab.io';

  const resetPasswordSubTitleArr = [`${userEmail} 로`, '새 비밀번호를 설정할 수 있는 메일을 보냈어요.', '새로운 비밀번호를 설정해주세요.'];
  const confirmEmailSubTitleArr = [`${userEmail} 계정으로`, '인증 메일을 보내드렸습니다.', '메일을 확안하시고, 확인 버튼을 클릭해주세요.'];

  const resendEmail = useCallback(() => {
    dispatch(showToast({ message: '비밀번호 재설정 메일이 발송되었습니다.', isShow: true, status: '', duration: 5000 }));
  }, []);

  const reSignup = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'signup' }));
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle modalType={modalType} />

        <ModalSubTitle subTitle={modalType === 'confirmPassword' ? resetPasswordSubTitleArr : confirmEmailSubTitleArr} />

        <ConfirmPopupNextStepBtn
          modalType={modalType}
          onClick={resendEmail}
          pathname={'/'}
          title={'혹시 이메일을 받지 못했나요?'}
          btnText={'이메일을 다시 보내주세요.'}
          style={{ padding: modalType === 'confirmSignup' ? '0 40px' : '0 40px 40px' }}
        />
        {modalType === 'confirmSignup' ? (
          <ConfirmPopupNextStepBtn
            modalType={modalType}
            onClick={reSignup}
            pathname={'/'}
            title={'이메일을 인증해주세요!'}
            btnText={'회원가입을 다시 할게요.'}
          />
        ) : null}
      </PopupBox>
    </FlexBox>
  );
};

export default ConfirmModal;
