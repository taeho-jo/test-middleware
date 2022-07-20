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
              <span css={titleStyle}>잠재 고객 조사</span>

              <span css={[heading4_regular, marginStyle('24px')]}>제품/서비스의 잠재 고객에 대한 조사로</span>
              <span css={heading4_regular}>고객에 대한 전반적인 이해를 돕고,</span>
              <span css={heading4_regular}>다양한 고객 집단 중</span>
              <span css={heading4_regular}>가장 첫 번째로 공략해야 할 집단을 파악합니다.</span>

              <span css={[heading4_bold, marginStyle('24px')]}>#타게팅 우선순위 파악</span>
              <span css={[heading4_bold, marginStyle('4px')]}>#대략적인 이해</span>
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
