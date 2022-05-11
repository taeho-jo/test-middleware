import React from 'react';
import FeatureComponent from '../../../diby-client-landing/pages/Feature';
import withoutTokenAuth from '../../hoc/withoutTokenAuth';
const Feature = () => {
  return <FeatureComponent />;
};

export default withoutTokenAuth(Feature);
