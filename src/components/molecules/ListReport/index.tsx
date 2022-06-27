import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { caption1_regular, heading5_bold } from '../../../styles/FontStyles';
import moment from 'moment';
import uiBackground from '/public/assets/png/image_thumbnail_uitest.png';
import customerBackground from '/public/assets/png/image_thumbnail_customer.png';
import scenarioBackground from '/public/assets/png/image_thumbnail_scenario.png';
import uxBackground from '/public/assets/png/image_thumbnail_uxposition.png';

interface PropsType {
  createDt: string;
  moduleType: string;
  projectNm: string;
  reportSeq: number;
  onClick?: (id, name) => void;
}

const ListReport = ({ createDt, moduleType, projectNm, reportSeq, onClick }: PropsType) => {
  const changeName = useCallback(name => {
    switch (name) {
      case 'UI_DIAGNOSIS':
        return 'UI 진단 테스트';
      case 'SCENARIO_VERIFICATION':
        return '시나리오 검증';
      case 'UX_POSITION_ANALYSIS':
        return 'UX 포지션 분석';
      case 'POTENTIAL_CUSTOMER_RESEARCH':
        return '잠재 고객 조사';
      default:
        return 'UI 진단 테스트';
    }
  }, []);

  const pickBackgroundImage = useCallback(name => {
    switch (name) {
      case 'UI_DIAGNOSIS':
        return uiBackground.src;
      case 'SCENARIO_VERIFICATION':
        return scenarioBackground.src;
      case 'UX_POSITION_ANALYSIS':
        return uxBackground.src;
      case 'POTENTIAL_CUSTOMER_RESEARCH':
        return customerBackground.src;
      default:
        return uiBackground.src;
    }
  }, []);

  return (
    <div css={mainContainer(pickBackgroundImage(moduleType))} onClick={() => onClick(reportSeq, projectNm)}>
      <span css={[caption1_regular, blockStyle]}>{changeName(moduleType)}</span>
      <span css={[heading5_bold, titleStyle]}>{projectNm}</span>
      <span css={[caption1_regular, dateStyle]}>{moment(createDt).format('YYYY. MM. DD')}</span>
    </div>
  );
};

export default ListReport;

const blockStyle = css`
  display: block;
  color: ${colors.grey._3c};
`;
const titleStyle = [
  blockStyle,
  css`
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
];
const dateStyle = [
  blockStyle,
  css`
    color: ${colors.grey._99};
    margin-top: 8px;
  `,
];

const mainContainer = img => css`
  width: 256px;
  height: 184px;
  border-radius: 8px;
  border: 1px solid ${colors.grey._ec};
  padding: 25px 20px 0 20px;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: contain;
  margin-bottom: 20px;
  margin-right: 16px;
  cursor: pointer;
`;
