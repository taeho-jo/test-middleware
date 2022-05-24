import React from 'react';
import { Solution3 } from '../../../../diby-client-landing/pages/Solution';
import withTokenAuth from '../../../hoc/withTokenAuth';

const Scenario = () => {
  return <Solution3 />;
};

export default withTokenAuth(Scenario, true);
