import React from 'react';
import withTokenAuth from '../../../../hoc/withTokenAuth';
import { CreateResearchStepOne } from '../../../../components/template/Research';
import { css } from '@emotion/react';

const ResearchCreate = () => {
  return (
    <div css={mainContainer}>
      <CreateResearchStepOne />
    </div>
  );
};

export default withTokenAuth(ResearchCreate, false);

const mainContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 72px;
  height: calc(100vh - 72px);
  background: yellow;
  min-width: 1440px;
`;
