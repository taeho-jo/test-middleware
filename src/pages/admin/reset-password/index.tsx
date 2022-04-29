import React from 'react';
import ResetPw from '../../../components/organisms/ResetPw';
import withNoAuth from '../../../hoc/withNoAuth';
import withAuth from '../../../hoc/withAuth';

const ResetPassword = () => {
  return <ResetPw />;
};

export default withAuth(ResetPassword);
