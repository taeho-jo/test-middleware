import React from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import { heading5_bold } from '../../../styles/FontStyles';
import { useRouter } from 'next/router';
import { fontWeight } from '@mui/system';
import { colors } from '../../../styles/Common.styles';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

const AdminHeader = () => {
  const router = useRouter();
  const teamList = useSelector<ReducerType, any>(state => state.team.teamList);
  const selectTeam = JSON.parse(localStorage.getItem('selectTeamList'));
  const selectTeamName = useSelector<ReducerType, any>(state => state.team.selectTeamList);

  return (
    <FlexBox style={headerStyle} justify={'flex-start'} align={'center'}>
      <span onClick={() => router.push('/admin/team')} css={[heading5_bold, itemsStyle, teamTextStyle(router.pathname)]}>
        {selectTeamName ? selectTeamName.teamNm : ''}
      </span>
      <span onClick={() => router.push('/admin/member')} css={[heading5_bold, itemsStyle, memberTextStyle(router.pathname)]}>
        팀원
      </span>
      <span onClick={() => router.push('/admin/setting')} css={[heading5_bold, itemsStyle, settingTextStyle(router.pathname)]}>
        설정
      </span>
    </FlexBox>
  );
};

export default AdminHeader;

const headerStyle = css`
  height: 47px;
  width: 100%;
  padding: 0 32px;
`;
const itemsStyle = css`
  height: auto;
  display: inline-block;
  margin-right: 40px;
  cursor: pointer;
  padding: 10px 12px;
  color: ${colors.grey._99};
  :hover {
    background: ${colors.grey._f7};
  }
`;
const teamTextStyle = pathname => css`
  ${pathname === '/admin/team' && `color: ${colors.grey._3c}`}
`;
const memberTextStyle = pathname => css`
  ${pathname === '/admin/member' && `color: ${colors.grey._3c}`}
`;
const settingTextStyle = pathname => css`
  ${pathname === '/admin/setting' && `color: ${colors.grey._3c}`}
`;
