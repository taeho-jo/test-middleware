import React from 'react';
import { css } from '@emotion/react';
import Image, { StaticImageData } from 'next/image';
import { body2_medium, heading2_bold } from '../../../styles/FontStyles';
import FlexBox from '../../atoms/FlexBox';
import defaultImage from '/public/assets/png/researchGuide/guide_research_inactive.png';

interface PropsType {
  width: number;
  contents: any;
  guideStatus: string;
}
const ResearchGuide = ({ width, contents, guideStatus }: PropsType) => {
  return (
    <FlexBox direction={'column'} width={'100%'} height={'500px'} style={selectContainer}>
      <div css={topContainer}>
        <Image width={width} src={contents?.[guideStatus]?.image} alt={'aa'} />
      </div>
      <div css={bottomContainer}>
        {contents?.[guideStatus]?.title && <span css={[heading2_bold, { marginBottom: '16px' }]}>{contents?.[guideStatus]?.title}</span>}
        <span css={[body2_medium, { whiteSpace: 'pre-line' }]}>{contents?.[guideStatus]?.guideContent}</span>
      </div>
    </FlexBox>
  );
};
export default ResearchGuide;

const topContainer = css`
  height: 250px;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  background: #68a0f4;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const bottomContainer = css`
  height: 250px;
  width: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const selectContainer = css`
  border: 1px solid #dcdcdc;
  border-radius: 16px;
  margin-top: 25px;
  //padding: 56px;
`;
