import React from 'react';
import FeatureComponent from '../../../diby-client-landing/pages/Feature';
import withoutTokenAuth from '../../hoc/withoutTokenAuth';
import withTokenAuth from '../../hoc/withTokenAuth';
const Feature = () => {
  return <FeatureComponent />;
};

export default withTokenAuth(Feature, true);
