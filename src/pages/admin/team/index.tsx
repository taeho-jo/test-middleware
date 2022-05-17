import React from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import TeamDashboard from '../../../components/organisms/TeamDashboard';

const Team = () => {
  return <TeamDashboard />;
};

export default withTokenAuth(Team, false);
