import React, { ReactElement } from 'react';
// Components
import TestCounterOrganisms from '../../../components/organisms/testCounterOrganisms';
import Layout from '../../../components/layouts/Layout';

const Counter = () => {
  return <TestCounterOrganisms />;
};

export default Counter;

Counter.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
