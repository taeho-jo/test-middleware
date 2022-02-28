import React from 'react';
import TestReactQueryOrganisms from '../../../components/organisms/testReactQueryOrganisms';
import withAuth from '../../../hoc/withAuth';

const QueryTest = () => {
  return <TestReactQueryOrganisms />;
};

export default withAuth(QueryTest);
