import React from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import TeamMember from '../../../components/organisms/TeamMember';

const Member = () => {
  return <TeamMember />;
};

export default withTokenAuth(Member, false);
