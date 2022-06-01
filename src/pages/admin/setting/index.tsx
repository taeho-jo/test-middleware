import React from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import FlexBox from '../../../components/atoms/FlexBox';
import PageTitle from '../../../components/atoms/PageTitle';
import { heading3_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import SettingCard from '../../../components/atoms/SettingCard';

const Setting = () => {
  return (
    <>
      <PageTitle title={'설정'} />
      <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0 40px 20px 40px' }}>
        <div css={teamNameBoxStyle}>
          <span css={heading3_bold}>@TEAM NAME@</span>
        </div>
        <SettingCard title={'팀 이름'} content={'@TEAM NAME@'} btnText={'팀 명 수정하기'} showBtn={true} />
        <SettingCard title={'프로덕트'} content={'우쥬테스트'} btnText={'프로턱트 관리하기'} showBtn={true} style={{ marginTop: '100px' }} />
        <SettingCard title={'팀 생성일'} content={'2022.05.30'} />
      </FlexBox>
    </>
  );
};

export default withTokenAuth(Setting, false);

const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;
