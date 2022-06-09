import React from 'react';
import { css } from '@emotion/react';

const ReportSideBar = () => {
  return (
    <div css={sidebarStyle}>
      <div css={logoBoxStyle}>로고</div>
      <div css={shareBoxStyle}>인원수 & 공유버튼</div>
    </div>
  );
};

export default ReportSideBar;

const sidebarStyle = css`
  width: 296px;
  height: 100vh;
  background: palegoldenrod;
`;

const logoBoxStyle = css`
  height: 72px;
  background: lightcoral;
`;
const shareBoxStyle = css`
  height: 64px;
  background: plum;
`;
