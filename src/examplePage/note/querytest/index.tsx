import React from 'react';
import TestReactQueryOrganisms from '../../../components/organisms/testReactQueryOrganisms';
import withTokenAuth from '../../../hoc/withTokenAuth';

const QueryTest = () => {
  return <TestReactQueryOrganisms />;
};

export default withTokenAuth(QueryTest);
