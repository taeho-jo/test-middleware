import React, { ReactElement } from 'react';
// Components
import TestNoteOrganisms from '../../components/organisms/testNoteOrganisms';
import Layout from '../../components/layouts/Layout';

const Note = () => {
  return <TestNoteOrganisms />;
};

export default Note;

Note.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
