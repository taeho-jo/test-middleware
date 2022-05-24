import React from 'react';
import ResetPwSuccess from '../../../components/organisms/ResetPwSuccess';
import changePasswordAuth from '../../../hoc/changePasswordAuth';

const ResetPasswordSuccess = () => {
  return <ResetPwSuccess />;
};

export default changePasswordAuth(ResetPasswordSuccess, false);
