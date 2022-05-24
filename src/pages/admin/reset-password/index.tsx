import React from 'react';
import ResetPw from '../../../components/organisms/ResetPw';
import withTokenAuth from '../../../hoc/withTokenAuth';

const ResetPassword = () => {
  return <ResetPw />;
};

export default withTokenAuth(ResetPassword, false);
