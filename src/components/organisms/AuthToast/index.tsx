import React, { useEffect } from 'react';
import Toast from '../../atoms/Toast';
import Portal from '../../atoms/Portal';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { removeToast } from '../../../store/reducers/toastReducer';

const AuthToast = () => {
  const dispatch = useDispatch();
  const isShow = useSelector((state: ReducerType) => state.toast.isShow);
  const arr = useSelector((state: ReducerType) => state.toast.toastArr);

  useEffect(() => {
    let timer;
    if (arr.length) {
      timer = setInterval(() => {
        console.log('ㅅ실행 실행');
        dispatch(removeToast());
      }, 3000);
    } else {
      clearInterval(timer);
      console.log('정지!!!!!!!!!1');
    }
  }, []);

  return (
    <Portal selector={'toast-root'}>
      <>
        {arr?.map((el, index) => {
          if (el.isShow) {
            return <Toast key={index} num={index} text={el.message} />;
          } else {
            return null;
          }
        })}
      </>
    </Portal>
  );
};

export default AuthToast;
