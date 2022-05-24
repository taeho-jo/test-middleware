import React from 'react';
import ResetPw from '../../../components/organisms/ResetPw';
import changePasswordAuth from '../../../hoc/changePasswordAuth';

const ResetPassword = () => {
  return <ResetPw />;
};

export default changePasswordAuth(ResetPassword, false);
