import React from 'react';
import PricingComponent from '../../../diby-client-landing/pages/Pricing';
import withoutTokenAuth from '../../hoc/withoutTokenAuth';
import withTokenAuth from '../../hoc/withTokenAuth';
const Pricing = () => {
  return <PricingComponent />;
};

export default withTokenAuth(Pricing, true);
