import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthModal from '../../../components/organisms/AuthModal';
import { isShow } from '../../../store/reducers/modalReducer';
import withNoAuth from '../../../hoc/withNoAuth';
import withAuth from '../../../hoc/withAuth';

const ReLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isShow({ isShow: false, type: 'login' }));
  }, []);

  return <AuthModal />;
};

export default ReLogin;
