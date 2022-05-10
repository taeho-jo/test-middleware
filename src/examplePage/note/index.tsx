import React from 'react';
// Components
import TestNoteOrganisms from '../../components/organisms/testNoteOrganisms';
import withTokenAuth from '../../hoc/withTokenAuth';

const Note = () => {
  return <TestNoteOrganisms />;
};

export default withTokenAuth(Note);
