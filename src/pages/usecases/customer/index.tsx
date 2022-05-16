import React from 'react';
import { Solution4 } from '../../../../diby-client-landing/pages/Solution';
import withoutTokenAuth from '../../../hoc/withoutTokenAuth';
import withTokenAuth from '../../../hoc/withTokenAuth';

const Customer = () => {
  return <Solution4 />;
};

export default withTokenAuth(Customer, true);
