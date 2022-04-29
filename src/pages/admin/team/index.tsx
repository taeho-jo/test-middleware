import React from 'react';

// import icon1 from '../../public/assets/images/icon_uitest1.png';
import withAuth from '../../../hoc/withAuth';
import TeamDashboard from '../../../components/organisms/TeamDashboard';

const Team = () => {
  return <TeamDashboard />;
};

export default withAuth(Team);
