import React from 'react';
import { Solution1 } from '../../../../diby-client-landing/pages/Solution';
import withoutTokenAuth from '../../../hoc/withoutTokenAuth';
import withTokenAuth from '../../../hoc/withTokenAuth';
const Ui = () => {
  return <Solution1 />;
};

export default withTokenAuth(Ui, true);
