import React from 'react';
// Components
import TestGraphOrganisms from '../../components/organisms/testGraphOrganisms';
import withAuth from '../../hoc/withAuth';

const Graph = () => {
  return <TestGraphOrganisms />;
};

export default withAuth(Graph);
