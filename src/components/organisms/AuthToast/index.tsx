import React from 'react';
import Toast from '../../atoms/Toast';
import Portal from '../../atoms/Portal';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { css } from '@emotion/react';

interface PropsType {
  position: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

const AuthToast = ({ position }: PropsType) => {
  const arr = useSelector((state: ReducerType) => state.toast.toastArr);

  // console.log(arr, 'ARRRRRRR');

  const toastPosition = position => {
    let located;
    switch (position) {
      case 'top-left':
        located = {
          top: '24px',
          left: '50px',
        };
        break;
      case 'top-center':
        located = {
          top: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
        };
        break;
      case 'top-right':
        located = {
          top: '24px',
          right: '50px',
        };
        break;
      case 'bottom-left':
        located = {
          bottom: '24px',
          left: '50px',
        };
        break;
      case 'bottom-center':
        located = {
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
        };
        break;
      case 'bottom-right':
        located = {
          bottom: '24px',
          right: '50px',
        };
        break;
      default:
        located = {};
    }
    return located;
  };

  return (
    <Portal selector={'toast-root'}>
      <div css={[positionStyle, toastPosition(position)]}>
        {arr?.map((el, index) => {
          if (el.isShow) {
            return <Toast position={position} key={index} {...el} />;
          } else {
            return null;
          }
        })}
      </div>
    </Portal>
  );
};

export default AuthToast;

const positionStyle = css`
  position: fixed;
  z-index: 100;
`;
