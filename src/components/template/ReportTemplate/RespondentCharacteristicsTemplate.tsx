import React from 'react';
import { css } from '@emotion/react';

const RespondentCharacteristicsTemplate = () => {
  return (
    <div css={testBox}>
      <div css={testTextBox}>그래프 영역</div>
    </div>
  );
};

export default RespondentCharacteristicsTemplate;

const testBox = css`
  //height: calc(100vh - 136px);
  height: calc(100vh - 72px);
`;
const testTextBox = css`
  display: block;
  border: 1px solid black;
  width: 200px;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* 라인수 */
  -webkit-box-orient: vertical;
  padding: 10px;
`;
