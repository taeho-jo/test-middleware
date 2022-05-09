import React from 'react';
import { useRouter } from 'next/router';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// Components
import Modal from '../../atoms/Modal';
import LoginModal from '../Modal/LoginModal';
import SignupModal from '../Modal/SignupModal';
import ResetPasswordModal from '../Modal/ResetPasswordModal';
import ConfirmResetPasswordModal from '../Modal/ConfirmResetPasswordModal';
import ConfirmSignupModal from '../Modal/ConfirmSignupModal';

const CommonModal = () => {
  const show = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const router = useRouter();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);

  return (
    <>
      {show ? (
        <Modal>
          {modalType === 'login' && <LoginModal />}
          {modalType === 'signup' && <SignupModal />}
          {modalType === 'resetPassword' && <ResetPasswordModal />}
          {modalType === 'confirm-reset-password' && <ConfirmResetPasswordModal />}
          {modalType === 'confirmSignup' && <ConfirmSignupModal />}
        </Modal>
      ) : null}
    </>
  );
};

export default CommonModal;
