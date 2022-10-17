import React from 'react';
import { css } from '@emotion/react';
import Portal from '../Portal';

const Modal = ({ children }) => {
  return (
    <Portal selector={'modal-root'}>
      <div className={'scrollType1'} css={darkBackgroundStyle}>
        {children}
      </div>
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
  z-index: 502;
  background: rgba(0, 0, 0, 0.4);
`;
