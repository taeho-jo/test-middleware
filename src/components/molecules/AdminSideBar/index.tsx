import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
// Components
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import AdminSideTeamListItem from '../AdminSideTeamListItem';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold } from '../../../styles/FontStyles';
// Types
import { ReducerType } from '../../../store/reducers';
import { TeamListType } from '../../../store/reducers/teamReducer';

// Dummy
const DummyTeamList = [
  {
    teamName: '아무개님의 팀',
    memberList: ['J'],
  },
];

const AdminSideBar = () => {
  const teamList = useSelector<ReducerType, TeamListType[]>(state => state.team.teamList);

  const sideTeamList = useCallback(() => {
    if (teamList !== null) {
      return teamList?.map((item, index) => {
        return <AdminSideTeamListItem parentsIndex={index} key={index} teamName={item.teamName} memberList={item.memberList} />;
      });
    } else {
      return DummyTeamList.map((item, index) => {
        return <AdminSideTeamListItem parentsIndex={index} key={index} teamName={item.teamName} memberList={item.memberList} />;
      });
    }
  }, [teamList, DummyTeamList]);

  return (
    <div css={adminSideBarStyle}>
      <FlexBox style={teamCreateAreaStyle} justify={'space-between'} align={'center'}>
        <span css={heading5_bold}>팀</span>
        <Icon name={'ACTION_CREATE'} size={24} />
      </FlexBox>
      {sideTeamList()}
    </div>
  );
};

export default AdminSideBar;

const adminSideBarStyle = css`
  width: 240px;
  min-width: 240px;
  height: 100vh;
  border-right: 1px solid ${colors.grey._ec};
`;

const teamCreateAreaStyle = css`
  width: 100%;
  height: 48px;
  padding: 15px 24px;
  border-bottom: 1px solid ${colors.grey._ec};
`;
