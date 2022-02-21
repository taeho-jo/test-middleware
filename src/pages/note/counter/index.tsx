import React from 'react';
// Components
import TestCounterOrganisms from '../../../components/organisms/testCounterOrganisms';
import withAuth from '../../../hoc/withAuth';

const Counter = () => {
  return <TestCounterOrganisms />;
};

export default withAuth(Counter);
