import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import MoreTeamInfoPopup from '../MoreTeamInfoPopup';
import { UserType } from '../../../store/reducers/userReducer';
import { isShow } from '../../../store/reducers/modalReducer';

// Dummy

const AdminSideBar = () => {
  const dispatch = useDispatch();
  const teamList = useSelector<ReducerType, TeamListType[]>(state => state.team.teamList);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  const sideTeamList = useCallback(() => {
    if (teamList !== null) {
      return teamList?.map((item, index) => {
        return <AdminSideTeamListItem parentsIndex={item.teamSeq} key={index} teamName={item.teamName} memberList={item.memberList} />;
      });
    }
  }, [teamList]);

  const handleCreateTeam = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));
  }, []);

  return (
    <div css={adminSideBarStyle}>
      <FlexBox style={teamCreateAreaStyle} justify={'space-between'} align={'center'}>
        <span css={heading5_bold}>팀</span>
        <Icon onClick={() => dispatch(isShow({ isShow: true, type: 'createTeam' }))} name={'ACTION_CREATE'} size={24} style={{ cursor: 'pointer' }} />
      </FlexBox>
      {sideTeamList()}
      <FlexBox justify={'center'} style={{ marginTop: '24px' }}>
        <MoreTeamInfoPopup textArr={['리서치에 필요한 응답자를', '정확하고 빠르게 모집할 수 있어요!']} />
      </FlexBox>
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
