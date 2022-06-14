import React from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import SettingCard from '../../atoms/SettingCard';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

const TeamSetting = () => {
  const teamList = useSelector<ReducerType, any>(state => state.team.teamList);
  const teamObj = teamList ? teamList[0] : {};

  return (
    <>
      <PageTitle title={'설정'} />
      <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0 40px 20px 40px' }}>
        <div css={teamNameBoxStyle}>
          <span css={heading3_bold}>{teamObj?.teamName}</span>
        </div>
        <SettingCard title={'팀 이름'} content={teamObj?.teamName} btnText={'팀 명 수정하기'} showBtn={true} />
        <SettingCard title={'프로덕트'} content={'@우쥬테스트'} btnText={'프로턱트 관리하기'} showBtn={true} style={{ marginTop: '100px' }} />
        <SettingCard title={'팀 생성일'} content={'@2022.05.30'} />
      </FlexBox>
    </>
  );
};

export default TeamSetting;

const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;
