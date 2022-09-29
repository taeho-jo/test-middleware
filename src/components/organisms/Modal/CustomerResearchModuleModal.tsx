import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import FlexBox from '../../atoms/FlexBox';
import ModalTitle from '../../molecules/ModalTitle';
import { heading4_bold, heading4_regular } from '../../../styles/FontStyles';
import BasicButton from '../../atoms/Button/BasicButton';
import Image from 'next/image';
import Customer from '/public/assets/png/customerFrame.png';
import { css } from '@emotion/react';

const CustomerResearchModuleModal = () => {
  return (
    <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
      <PopupBox width={'720px'} height={'auto'}>
        <ModalTitle title="" />
        <FlexBox height={'420px'}>
          <FlexBox style={{ paddingLeft: '52px', paddingRight: '40px' }} height={'100%'} direction={'column'} justify={'space-between'}>
            <FlexBox direction={'column'} align={'flex-start'}>
              <span css={titleStyle}>FGD</span>

              <span css={[heading4_regular, marginStyle('24px')]}>그룹채팅 방식으로 그룹인터뷰를 진행합니다.</span>
              <span css={heading4_regular}>챗봇이 모더레이터가 질문을 하고,</span>
              <span css={heading4_regular}>응답자별 참여도를 관리합니다.</span>

              <span css={[heading4_bold, marginStyle('24px')]}>#이탈, 동기부여 분석</span>
              <span css={[heading4_bold, marginStyle('4px')]}>#경쟁사 분석</span>
              <span css={[heading4_bold, marginStyle('4px')]}>#고객라이프스타일 파악</span>
              <span css={[heading4_bold, marginStyle('4px')]}>#그룹인터뷰</span>
            </FlexBox>
            <FlexBox style={{ marginBottom: '52px', padding: '8px 0' }}>
              <BasicButton
                onClick={() => window.open('https://dbdlab.notion.site/34d243dc532d462b84468a710a63c3e8')}
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

export default CustomerResearchModuleModal;
const titleStyle = css`
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
`;
const marginStyle = margin => css`
  margin-top: ${margin};
`;
