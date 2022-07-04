import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import fatalityImg from '/public/assets/png/fatality.png';
import { body2_regular, heading5_medium } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import { css } from '@emotion/react';

const UsabilityAssessmentInfo = () => {
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'410px'} height={'auto'}>
        <ModalTitle title={'사용성 평가 점수가 뭔가요?'} titlePosition={'space-between'} />
        <FlexBox justify={'flex-start'} align={'flex-start'} direction={'column'} style={{ padding: '16px 40px 56px 40px' }}>
          <span css={[body2_regular, { height: 'auto' }]}>제이콥닐슨의 휴리스틱 10 요소를</span>
          <span css={[body2_regular, { height: 'auto' }]}>어느 정도로 위배했는지 판단하여 평가한 점수입니다.</span>
          <span css={[body2_regular, { height: 'auto' }]}>휴리스틱 요소 위배 횟수가 높고,</span>
          <span css={[body2_regular, { height: 'auto' }]}>치명도가 높을수록 평가 점수가 낮아집니다.</span>
          <br />
          <span css={[body2_regular, textStyle, { height: 'auto' }]}>*제이콥닐슨의 휴리스틱 10 요소란?</span>
          <span css={[body2_regular, { height: 'auto' }]}>웹사이트/애플리케이션의 UI를 평가하는 기준입니다.</span>
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default UsabilityAssessmentInfo;

const textStyle = css`
  color: #e87490;
  font-weight: 600;
`;
