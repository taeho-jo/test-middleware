import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import Portal from '../Portal';
import { isShow } from '../../../store/reducers/modalReducer2';

const Modal = ({ children }) => {
  const dispatch = useDispatch();
  const handleOffModal = useCallback(() => {
    dispatch(isShow({ isShow: false }));
  }, []);

  return (
    <Portal selector={'modal-root'}>
      <div onClick={handleOffModal} css={darkBackgroundStyle}>
        {children}
      </div>
      {/*<div css={backgroundStyle}>{modalType === 'confirmSignup' || modalType === 'confirmPassword' ? <ConfirmModal /> : <AuthModal />}</div>*/}
    </Portal>
  );
};

export default Modal;

const darkBackgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.4);
`;
