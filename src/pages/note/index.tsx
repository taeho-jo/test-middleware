import React from 'react';
// Components
import TestNoteOrganisms from '../../components/organisms/testNoteOrganisms';
import withAuth from '../../hoc/withAuth';

const Note = () => {
  return <TestNoteOrganisms />;
};

export default withAuth(Note);
