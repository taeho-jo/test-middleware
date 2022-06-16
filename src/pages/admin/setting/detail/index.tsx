import React from 'react';
import TeamSettingDetail from '../../../../components/organisms/TeamSettingDetail';
import withTokenAuth from '../../../../hoc/withTokenAuth';

const Detail = () => {
  return <TeamSettingDetail />;
};

export default withTokenAuth(Detail, false);
