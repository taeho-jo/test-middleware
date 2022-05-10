import React from 'react';
import ResetPwSuccess from '../../../components/organisms/ResetPwSuccess';
import withTokenAuth from '../../../hoc/withTokenAuth';

const ResetPasswordSuccess = () => {
  return <ResetPwSuccess />;
};

export default withTokenAuth(ResetPasswordSuccess);
