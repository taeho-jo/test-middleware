import React, { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_bold } from '../../../styles/FontStyles';
import Icon from '../Icon';
import { useDispatch, useSelector } from 'react-redux';
import { removeToast } from '../../../store/reducers/toastReducer';
import { ReducerType } from '../../../store/reducers';

interface PropsType {
  id: string;
  message: string;
  duration: number;
  status: string;
  position?: string;
}

const Toast = ({ position, id, message, duration, status }: PropsType) => {
  const [type, setType] = useState('fadeOut');
  const dispatch = useDispatch();
  const arr = useSelector((state: ReducerType) => state.toast.toastArr);

  useEffect(() => {
    const fadeOut = setInterval(() => {
      setType(null);
    }, 2000);

    const timeout = setInterval(() => {
      dispatch(removeToast(arr[0].id));
    }, 3000);

    return () => {
      clearInterval(timeout);
      clearInterval(fadeOut);
    };
  }, [id]);

  return (
    <div css={alertBox(position, status, type)} onClick={() => dispatch(removeToast(id))}>
      <span css={[body3_bold, alertTextStyle]}>{message}</span>
    </div>
  );
};

export default Toast;

const vertical = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const outVertical = keyframes`
  from {
    //transform: translateY(0%);
    opacity: 1;
  }
  to {
    //transform: translateY(100%);
    opacity: 0;
  }
`;
const horizontal = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const alertBox = (position, status, type) => css`
  box-sizing: border-box;
  background-color: ${status === 'success' ? colors.blue._500 : status === 'warning' ? colors.red : colors.cyan._500};
  border-radius: 8px;
  padding: 15px;
  margin-top: 10px;
  display: flex;
  animation: ${position.includes('left') || position.includes('right') ? horizontal : type === 'fadeOut' ? vertical : outVertical}
    ${type === 'fadeOut' ? '0.7s' : '1s'};
`;
const alertTextStyle = css`
  color: ${colors.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  word-break: break-word;
`;
