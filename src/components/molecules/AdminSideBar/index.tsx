import React, { useCallback, useState } from 'react';
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
import { TeamListType, updateSelectTeamList, updateTeamSeq } from '../../../store/reducers/teamReducer';
import MoreTeamInfoPopup from '../MoreTeamInfoPopup';
import { isShow } from '../../../store/reducers/modalReducer';
import { useQueryClient } from 'react-query';

// Dummy

const AdminSideBar = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const teamList = useSelector<ReducerType, TeamListType[]>(state => state.team.teamList);
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);

  const [infoBox, setInfoBox] = useState<boolean>(true);

  const handleSelectTeam = useCallback(
    item => {
      dispatch(updateSelectTeamList(item));
      dispatch(updateTeamSeq(item.teamSeq));

      queryClient.invalidateQueries(['fetchTeamReportList', item.teamSeq]);

      localStorage.setItem('selectTeamList', JSON.stringify(item));
      localStorage.setItem('teamSeq', item.teamSeq);
    },
    [teamList],
  );

  const handleOffInfoBox = useCallback(() => {
    setInfoBox(false);
  }, [infoBox]);

  const sideTeamList = useCallback(() => {
    if (teamList !== null) {
      return teamList?.map((item, index) => {
        return (
          <AdminSideTeamListItem
            onClick={handleSelectTeam}
            item={item}
            parentsIndex={item.teamSeq}
            key={index}
            teamName={item.teamNm}
            memberList={item.teamMember}
          />
        );
      });
    }
  }, [teamList]);

  return (
    <div css={adminSideBarStyle(modalType)}>
      <FlexBox style={teamCreateAreaStyle} justify={'space-between'} align={'center'}>
        <span css={heading5_bold}>팀</span>
        <Icon onClick={() => dispatch(isShow({ isShow: true, type: 'createTeam' }))} name={'ACTION_CREATE'} size={24} style={{ cursor: 'pointer' }} />
      </FlexBox>
      <div css={{ height: 'calc(100% - 95px)', overflow: 'scroll' }}>
        {sideTeamList()}
        {infoBox && (
          <FlexBox justify={'center'} style={{ marginTop: '24px' }}>
            <MoreTeamInfoPopup handleOffInfoBox={handleOffInfoBox} textArr={['리서치에 필요한 응답자를', '정확하고 빠르게 모집할 수 있어요!']} />
          </FlexBox>
        )}
      </div>

      {modalType === 'inviteTeamMember' && (
        <div css={{ width: '240px', height: '100%', background: 'rgba(0,0,0,0.4)', position: 'absolute', top: 0, left: 0 }}></div>
      )}
    </div>
  );
};

export default AdminSideBar;

const adminSideBarStyle = modalType => css`
  width: 240px;
  min-width: 240px;
  height: 100vh;
  border-right: 1px solid ${colors.grey._ec};
  //주석
  position: fixed;
  z-index: ${modalType === 'inviteTeamMember' ? 503 : 50};
  background: white;
  //margin-top: 48px;
`;

const teamCreateAreaStyle = css`
  width: 100%;
  height: 48px;
  padding: 15px 24px;
  border-bottom: 1px solid ${colors.grey._ec};
`;
