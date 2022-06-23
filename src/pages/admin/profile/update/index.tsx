import React from 'react';
import withTokenAuth from '../../../../hoc/withTokenAuth';
import ProfileUpdate from '../../../../components/organisms/ProfileUpdate';

const Update = () => {
  return <ProfileUpdate />;
};

export default withTokenAuth(Update, false);
