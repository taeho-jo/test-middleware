import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import AuthModal from '../../../components/organisms/AuthModal';
import { isShow } from '../../../store/reducers/modalReducer';
import withTokenAuth from '../../../hoc/withTokenAuth';
import LoginModal from '../../../components/organisms/Modal/LoginModal';
import ReLoginComponent from '../../../components/organisms/ReLoginComponent';
// import withoutTokenAuth from '../../../hoc/withoutTokenAuth';
// import withTokenAuth from '../../../hoc/withTokenAuth';

const ReLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isShow({ isShow: false, type: 'login' }));
  }, []);

  return <ReLoginComponent />;
};

export default withTokenAuth(ReLogin, false);
