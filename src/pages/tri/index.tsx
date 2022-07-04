import React from 'react';
import TRIComponent from '../../../diby-client-landing/pages/TRI';
import withTokenAuth from '../../hoc/withTokenAuth';
const Tri = () => {
  return <TRIComponent />;
};

export default withTokenAuth(Tri, true);
