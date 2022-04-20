import React from 'react';
import Portal from '../../atoms/Portal';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { css } from '@emotion/react';
import AuthModal from '../AuthModal';
import SignupConfirm from '../../molecules/SignupConfirm';

const CommonModal = () => {
  const show = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  return (
    <>
      {show ? (
        <Portal selector={'modal-root'}>
          <div css={backgroundStyle}>
            {modalType === 'confirmSignup' ? <SignupConfirm /> : modalType === 'confirmPassword' ? <></> : <AuthModal />}
          </div>
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
  z-index: 1000;
`;
// const positionStyle = css`
//   position: fixed;
//   top: 20%;
//   left: 50%;
//   z-index: 99999;
//   background: #006666;
//   color: sandybrown;
// `;
