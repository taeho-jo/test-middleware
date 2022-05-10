import React from 'react';
// Components
import TestGraphOrganisms from '../../components/organisms/testGraphOrganisms';
import withTokenAuth from '../../hoc/withTokenAuth';

const Graph = () => {
  return <TestGraphOrganisms />;
};

export default withTokenAuth(Graph);
