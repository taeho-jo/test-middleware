import React, { ReactElement } from 'react';
// Components
import TestFormOrganisms from '../../components/organisms/testFormOrganisms';
import Layout from '../../components/layouts/Layout';

const Form = () => {
  return <TestFormOrganisms />;
};

export default Form;

Form.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
