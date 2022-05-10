import React from 'react';

// import icon1 from '../../public/assets/images/icon_uitest1.png';
import withTokenAuth from '../../../hoc/withTokenAuth';
import TeamDashboard from '../../../components/organisms/TeamDashboard';

const Team = () => {
  return <TeamDashboard />;
};

export default withTokenAuth(Team);
