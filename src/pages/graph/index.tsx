import React, { ReactElement } from 'react';
// Components
import TestGraphOrganisms from '../../components/organisms/testGraphOrganisms';
import Layout from '../../components/layouts/Layout';

const Graph = () => {
  return <TestGraphOrganisms />;
};

export default Graph;

Graph.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
