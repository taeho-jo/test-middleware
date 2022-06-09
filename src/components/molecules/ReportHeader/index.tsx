import React from 'react';
import { css } from '@emotion/react';

const ReportHeader = () => {
  return <div css={headerStyle}>리포트 헤더</div>;
};

export default ReportHeader;

const headerStyle = css`
  height: 72px;
  width: calc(100vw - 296px);
  background: pink;
`;
