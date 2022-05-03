import React from 'react';
import { useRouter } from 'next/router';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// Components
import Modal from '../../atoms/Modal';
import LoginModal from '../../molecules/Modal/LoginModal';

const CommonModal = () => {
  const show = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const router = useRouter();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);

  return <>{show ? <Modal>{modalType === 'login' && <LoginModal />}</Modal> : null}</>;
};

export default CommonModal;
