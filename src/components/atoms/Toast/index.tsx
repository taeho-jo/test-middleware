import React, { useEffect } from 'react';
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
  const dispatch = useDispatch();
  const arr = useSelector((state: ReducerType) => state.toast.toastArr);

  useEffect(() => {
    const timeout = setInterval(() => {
      dispatch(removeToast(arr[0].id));
    }, duration);
    return () => {
      clearInterval(timeout);
    };
  }, [id]);

  return (
    <div css={alertBox(position, status)} onClick={() => dispatch(removeToast(id))}>
      <span css={[body3_bold, alertTextStyle]}>{message}</span>
    </div>
  );
};

export default Toast;

const vertical = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
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

const alertBox = (position, status) => css`
  background-color: ${status === 'success' ? colors.blue._500 : status === 'warning' ? colors.red : colors.cyan._500};
  border-radius: 8px;
  padding: 15px;
  margin-top: 10px;
  display: flex;
  cursor: pointer;
  animation: ${position.includes('left') || position.includes('right') ? horizontal : vertical} 0.7s;
`;
const alertTextStyle = css`
  color: ${colors.white};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
