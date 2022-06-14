import React from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import { heading4_bold, heading4_regular } from '../../../styles/FontStyles';
import BasicButton from '../../atoms/Button/BasicButton';
import Image from 'next/image';
import Senario from '/public/assets/png/senarioFrame.png';
import { css } from '@emotion/react';

const ScenarioResearchModuleModal = () => {
  return (
    <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
      <PopupBox width={'720px'} height={'auto'}>
        <ModalTitle title="" />
        <FlexBox>
          <FlexBox style={{ paddingLeft: '52px', paddingRight: '40px' }} direction={'column'} align={'flex-start'} justify={'flex-start'}>
            <span css={titleStyle}>시나리오 검증</span>

            <span css={[heading4_regular, marginStyle('24px')]}>상황 시나리오를 설정하고</span>
            <span css={heading4_regular}>고객의 인식, 의향, 선호도 등을 확인합니다.</span>
            <span css={heading4_regular}>고객에 대한 가설을 검증할 수 있습니다.</span>

            <span css={[heading4_bold, marginStyle('24px')]}>#고객 가설 검증</span>
            <span css={[heading4_bold, marginStyle('4px')]}>#사용자 인식 파악</span>
            <FlexBox style={{ marginTop: '108px', padding: '8px 0' }}>
              <BasicButton theme={'dark'} text={'설계안 작성하러 가기'} />
            </FlexBox>
          </FlexBox>
          <Image src={Senario} alt={'Senario frame'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ScenarioResearchModuleModal;
const titleStyle = css`
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
`;
const marginStyle = margin => css`
  margin-top: ${margin};
`;
