import React from 'react';
import Portal from '../../atoms/Portal';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { css } from '@emotion/react';
import AuthModal from '../AuthModal';
import ConfirmModal from '../ConfirmModal';

const CommonModal = () => {
  const show = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  return (
    <>
      {show ? (
        <Portal selector={'modal-root'}>
          <div css={backgroundStyle}>{modalType === 'confirmSignup' || modalType === 'confirmPassword' ? <ConfirmModal /> : <AuthModal />}</div>
        </Portal>
      ) : null}
    </>
  );
};

export default CommonModal;
const backgroundStyle = css`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;
