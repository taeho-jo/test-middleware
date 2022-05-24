import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import AuthModal from '../../../components/organisms/AuthModal';
import { isShow } from '../../../store/reducers/modalReducer';
import ReLoginComponent from '../../../components/organisms/ReLoginComponent';
import changePasswordAuth from '../../../hoc/changePasswordAuth';

const ReLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isShow({ isShow: false, type: 'login' }));
  }, []);

  return <ReLoginComponent />;
};

export default changePasswordAuth(ReLogin, false);
