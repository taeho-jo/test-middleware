import React from 'react';
import { Solution2 } from '../../../../diby-client-landing/pages/Solution';
import withoutTokenAuth from '../../../hoc/withoutTokenAuth';
import withTokenAuth from '../../../hoc/withTokenAuth';

const Ux = () => {
  return <Solution2 />;
};

export default withTokenAuth(Ux, true);
