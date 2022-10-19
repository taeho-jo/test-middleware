import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import FlexBox from '../../atoms/FlexBox';
import ModalTitle from '../../molecules/ModalTitle';
import { heading4_bold, heading4_regular } from '../../../styles/FontStyles';
import BasicButton from '../../atoms/Button/BasicButton';
import Image from 'next/image';
import Customer from '/public/assets/png/customerFrame.png';
import { css } from '@emotion/react';

const ShortSurveyResearchModule = () => {
  return (
    <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
      <PopupBox width={'720px'} height={'auto'}>
        <ModalTitle title="" />
        <FlexBox height={'420px'}>
          <FlexBox style={{ paddingLeft: '52px', paddingRight: '40px' }} height={'100%'} direction={'column'} justify={'space-between'}>
            <FlexBox direction={'column'} align={'flex-start'}>
              <span css={titleStyle}>짧은 설문</span>

              <span css={[heading4_regular, marginStyle('24px')]}>디자인 시안, 광고 시안, UX writing 등의</span>
              <span css={heading4_regular}>선호도를 잠재고객을 대상으로 빠르게</span>
              <span css={heading4_regular}>확인 할 수 있습니다.</span>
              <br />
              <span css={heading4_regular}>A/B 안을 선택하게 하고,</span>
              <span css={heading4_regular}>그 이유를 주관식 응답으로 받아보세요.</span>

              <span css={[heading4_bold, marginStyle('24px')]}>#디자인의사결정</span>
              <span css={[heading4_bold, marginStyle('4px')]}>#브랜드 인식</span>
            </FlexBox>
            <FlexBox style={{ marginBottom: '52px', padding: '8px 0' }}>
              <BasicButton
                onClick={() => window.open('https://dbdlab.notion.site/0ddcc6cafa9a4213b47b20e348d153df')}
                theme={'dark'}
                text={'무료로 설계안 받기'}
              />
            </FlexBox>
          </FlexBox>
          <Image src={Customer} alt={'Customer frame'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ShortSurveyResearchModule;
const titleStyle = css`
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
`;
const marginStyle = margin => css`
  margin-top: ${margin};
`;
