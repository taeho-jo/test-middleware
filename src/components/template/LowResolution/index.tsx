import React, { useCallback } from 'react';
import css from '@emotion/css';
import { colors } from '../../../styles/Common.styles';
import FlexBox from '../../atoms/FlexBox';
import LogoText from '/public/assets/png/diby_black.png';
import RowResolution from '/public/assets/png/rowResolution.png';
import BasicButton from '../../atoms/Button/BasicButton';
import ChannelService from '../../../common/util/channelTalk';
import { clearLocalStorage } from '../../../common/util/commonFunc';
import { userReset } from '../../../store/reducers/userReducer';
import { authReset } from '../../../store/reducers/authReducer';
import { teamReset } from '../../../store/reducers/teamReducer';
import { researchReset } from '../../../store/reducers/researchCreateReducer';
import { updateQueryStatus } from '../../../store/reducers/useQueryControlReducer';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const LowResolution = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const infoText = `아쉽게도 현재 Diby는 PC 환경에서\n모든 기능을 원활하게 이용하실 수 있습니다.\nPC의 웹 브라우저를 통해 접속하시면 모든 기능을 이용하실 수 있습니다.`;

  const handleLogout = useCallback(async () => {
    const channelTalk = new ChannelService();
    channelTalk.shutdown();

    clearLocalStorage();
    dispatch(userReset());
    dispatch(authReset());
    dispatch(teamReset());
    dispatch(researchReset());
    dispatch(updateQueryStatus({ name: 'userInfoQuery', status: false }));
    push('/');
  }, []);
  return (
    <div css={mainContainer}>
      <FlexBox style={headerBoxStyle} padding={'0 24px'} justify={'space-between'} align={'center'} height={'72px'} backgroundColor={colors.white}>
        <img src={LogoText.src} alt={'Logo'} css={logoStyle} />
      </FlexBox>
      <FlexBox direction={'column'} align={'center'}>
        <img src={RowResolution.src} alt="RowResolution" css={infoImgStyle} />
        <span css={infoTextStyle}>{infoText}</span>
        <BasicButton onClick={handleLogout} theme={'dark'} text={'홈으로 돌아가기'} style={{ maxWidth: '280px', marginTop: '32px' }} />
      </FlexBox>
    </div>
  );
};

export default LowResolution;

const mainContainer = css`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000000;
  display: none;
  @media (max-width: 1440px) {
    display: flex;
  }
`;
const headerBoxStyle = css`
  box-sizing: border-box;
  min-width: 500px;
  position: fixed;
  border-bottom: 1px solid #dcdcdc;
`;
const logoStyle = css`
  cursor: pointer;
  width: 49px;
  height: 32px;
`;
const infoImgStyle = css`
  width: 98px;
`;
const infoTextStyle = css`
  padding: 0 44px;
  margin-top: 24px;
  white-space: pre-wrap;
  word-break: keep-all;
  max-width: 570px;
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
