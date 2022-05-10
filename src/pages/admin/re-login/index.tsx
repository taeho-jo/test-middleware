import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import AuthModal from '../../../components/organisms/AuthModal';
import { isShow } from '../../../store/reducers/modalReducer';
import withTokenAuth from '../../../hoc/withTokenAuth';
// import withoutTokenAuth from '../../../hoc/withoutTokenAuth';
// import withTokenAuth from '../../../hoc/withTokenAuth';

const ReLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isShow({ isShow: false, type: 'login' }));
  }, []);

  return <div>Re-login</div>;
};

export default withTokenAuth(ReLogin);
