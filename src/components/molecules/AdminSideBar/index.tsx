import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import AdminSideTeamListItem from '../AdminSideTeamListItem';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { heading5_bold } from '../../../styles/FontStyles';

// Dummy
const teamList = [
  {
    teamName: 'DBDLAB의 팀',
    memberList: ['A', 'K', 'J'],
  },
  {
    teamName: '태호님의 팀',
    memberList: ['조', '최'],
  },
];

const AdminSideBar = () => {
  return (
    <div css={adminSideBarStyle}>
      <FlexBox style={teamCreateAreaStyle} justify={'space-between'} align={'center'}>
        <span css={heading5_bold}>Teams</span>
        <Icon name={'ACTION_CREATE'} size={24} />
      </FlexBox>
      {teamList.map((item, index) => {
        return <AdminSideTeamListItem key={index} teamName={item.teamName} memberList={item.memberList} />;
      })}
    </div>
  );
};

export default AdminSideBar;

const adminSideBarStyle = css`
  width: 240px;
  height: 100vh;
  border-right: 1px solid ${colors.grey._ec};
`;

const teamCreateAreaStyle = css`
  width: 100%;
  height: 48px;
  padding: 15px 24px;
  border-bottom: 1px solid ${colors.grey._ec};
`;
