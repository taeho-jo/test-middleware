import React, { useCallback, useEffect, useState } from 'react';
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
import { getProductList, TeamListType, updateSelectTeamList, updateTeamSeq } from '../../../store/reducers/teamReducer';
import MoreTeamInfoPopup from '../MoreTeamInfoPopup';
import { isShow } from '../../../store/reducers/modalReducer';
import { useQueryClient } from 'react-query';
import { useRouter } from 'next/router';

// Dummy

const AdminSideBar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const dispatch = useDispatch();
  const teamList = useSelector<ReducerType, TeamListType[]>(state => state.team.teamList);
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const productList = useSelector<ReducerType, any>(state => state.team.teamProductList);

  const [myRole, setMyRole] = useState<string | null>(null);

  // 선택된 팀에 따른 프로덕트 정보 -> 프로덕트 정보 입력 팝업 노출 || 미노출
  useEffect(() => {
    if (selectTeamSeq) {
      dispatch(getProductList({ teamSeq: String(selectTeamSeq) }));
    }
  }, [selectTeamSeq]);

  useEffect(() => {
    if (userInfo && selectTeamList) {
      const memberArr = selectTeamList?.teamMember;
      const myRole = memberArr?.filter(el => el.userId === userInfo.userId)?.[0]?.teamRoleType;
      setMyRole(myRole);
    }
  }, [userInfo, selectTeamList]);

  const handleSelectTeam = useCallback(
    item => {
      router.push('/admin/team');
      dispatch(updateSelectTeamList(item));
      dispatch(updateTeamSeq(item.teamSeq));

      localStorage.setItem('selectTeamList', JSON.stringify(item));
      localStorage.setItem('teamSeq', item.teamSeq);
    },
    [teamList],
  );

  const sideTeamList = useCallback(() => {
    if (teamList !== null) {
      const arr = [...teamList];
      return arr
        ?.sort((a, b) => {
          return a.teamSeq - b.teamSeq;
        })
        ?.map((item, index) => {
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
    } else {
      return <div>팀 조회중..</div>;
    }
  }, [teamList]);

  return (
    <div css={adminSideBarStyle(modalType)}>
      <FlexBox style={teamCreateAreaStyle} justify={'space-between'} align={'center'}>
        <span css={heading5_bold}>팀</span>
        <Icon onClick={() => dispatch(isShow({ isShow: true, type: 'createTeam' }))} name={'ACTION_CREATE'} size={24} style={{ cursor: 'pointer' }} />
      </FlexBox>
      <div className={'scrollType1'} css={scrollContainerStyle}>
        {teamList && sideTeamList()}
        {myRole === '관리자' && productList?.list?.length === 0 && (
          <FlexBox justify={'center'} style={{ marginTop: '24px' }}>
            <MoreTeamInfoPopup textArr={['프로덕트에 최적화된', '응답자를 더 빠르고 정확하게', '모집할 수 있습니다.']} />
          </FlexBox>
        )}
      </div>

      {modalType === 'inviteTeamMember' && (
        <div css={{ width: '241px', height: '100%', background: 'rgba(0,0,0,0.4)', position: 'absolute', top: 0, left: 0 }}></div>
      )}
    </div>
  );
};

export default AdminSideBar;

const adminSideBarStyle = modalType => css`
  width: 241px;
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

const scrollContainerStyle = css`
  height: calc(100% - 95px);
  //overflow-y: overlay;
  //overflow-x: hidden;
  //&::-webkit-scrollbar {
  //  width: 6px;
  //}
  //&::-webkit-scrollbar-thumb {
  //  height: 17%;
  //  background-color: red;
  //  /* 스크롤바 둥글게 설정    */
  //  border-radius: 10px;
  //}
  //&::-webkit-scrollbar-track {
  //  background-color: rgba(0, 0, 0, 0);
  //}
`;
