import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import fatalityImg from '/public/assets/png/fatality.png';
import { body2_regular, heading5_medium } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import { css } from '@emotion/react';

const RecommendedCustomerIndexModal = () => {
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'410px'} height={'auto'}>
        <ModalTitle title={'사용성 평가 점수가 뭔가요?'} titlePosition={'space-between'} />
        <FlexBox justify={'flex-start'} align={'flex-start'} direction={'column'} style={{ padding: '16px 40px 56px 40px' }}>
          <span css={[body2_regular, { height: 'auto' }]}>순 추천 고객 지수 (Net Promote Score)는</span>
          <span css={[body2_regular, { height: 'auto' }]}>브랜드에 대한 고객 충성도를 알 수 있는 지표입니다.</span>
          <br />
          <span css={[body2_regular, { height: 'auto' }]}>*좋은 점수의 기준은 산업 분야마다 상이합니다.</span>
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default RecommendedCustomerIndexModal;

const textStyle = css`
  color: #e87490;
  font-weight: 600;
`;
