import React, { useCallback } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_bold, caption1_bold, caption1_regular, caption2_bold, heading5_bold } from '../../../styles/FontStyles';
import moment from 'moment';
import uiBackground from '/public/assets/png/image_thumbnail_uitest.png';
import customerBackground from '/public/assets/png/image_thumbnail_customer.png';
import scenarioBackground from '/public/assets/png/image_thumbnail_scenario.png';
import uxBackground from '/public/assets/png/image_thumbnail_uxposition.png';
import Icon from '../../atoms/Icon';
import FlexBox from '../../atoms/FlexBox';
import ProfileIcon from '../../atoms/ProfileIcon';
import Button from '../../atoms/Button';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

interface PropsType {
  createDt: string;
  moduleType: string;
  projectNm: string;
  reportSeq: number;
  reportViewId: string;
  statusType: string;
  onClick?: (id, name) => void;
}

const ListReport = ({ createDt, moduleType, projectNm, reportSeq, reportViewId, statusType, onClick }: PropsType) => {
  const STATUS_CODE = useSelector<ReducerType, { key: string; value: string; displayName: string }[]>(
    state => state.common.commonCode.ResearchStatusType,
  );

  const changeName = useCallback(name => {
    switch (name) {
      case 'UI_DIAGNOSIS':
        return 'UI 진단';
      case 'SCENARIO_VERIFICATION':
        return '시나리오 검증';
      case 'UX_POSITION_ANALYSIS':
        return 'UX 포지션 분석';
      case 'POTENTIAL_CUSTOMER_RESEARCH':
        return '잠재 고객 조사';
      default:
        return 'UI 진단';
    }
  }, []);

  const getResearchStatus = useCallback(() => {
    const equalStatus = STATUS_CODE.filter(el => el.value === statusType);
    return equalStatus[0].displayName;
  }, [STATUS_CODE, statusType]);

  const getResearchStatusIcon = useCallback(() => {
    switch (statusType) {
      case 'RESEARCH_COMPLETED':
        return 'STATUS_COMPLETE';
      case 'RESEARCH_INFO_ENTERING':
      case 'RESEARCH_REQUEST_DESIGN':
      case 'RESEARCH_DESIGN':
      case 'RESEARCH_DESIGN_COMPLETE':
      case 'RESEARCH_START_REQUEST':
        return 'STATUS_BEFORE';
      case 'RESPONSE_RECRUITING':
      case 'RESEARCH_ANALYZING':
        return 'STATUS_ING';
      default:
        return 'STATUS_BEFORE';
    }
  }, [statusType]);

  return (
    <div
      css={mainContainer}
      onClick={
        statusType !== 'RESEARCH_COMPLETED'
          ? () => console.log('asdf')
          : () => {
              return;
            }
      }
    >
      <FlexBox direction={'row'} justify={'space-between'} align={'center'}>
        <span css={[caption1_bold, blockStyle]}>
          ({reportSeq}) {changeName(moduleType)}
        </span>
        <Icon name={'ACTION_MORE'} />
      </FlexBox>

      <span css={[heading5_bold, titleStyle]}>{projectNm}</span>

      <FlexBox style={dateBox} direction={'row'} justify={'flex-start'} align={'center'}>
        <ProfileIcon size={'20px'} margin={'0 8px 0 0'} fontStyle={caption2_bold} />
        <span css={[caption1_regular, dateStyle]}>{moment(createDt).format('YYYY. MM. DD')}</span>
      </FlexBox>

      <FlexBox style={statusBox} direction={'row'} justify={'flex-start'} align={'center'}>
        {/*TODO: STATUS에 따른 상태 변경*/}
        <Icon name={getResearchStatusIcon()} size={24} />
        <span css={[body3_bold, { marginLeft: '8px' }]}>{getResearchStatus()}</span>
      </FlexBox>

      {statusType === 'RESEARCH_COMPLETED' && (
        <FlexBox>
          <Button
            onClick={() => onClick(reportViewId, projectNm)}
            backgroundColor={colors.grey._3c}
            btnText={'리포트 확인하기'}
            btnTextColor={'white'}
          />
        </FlexBox>
      )}
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
  `,
];

const mainContainer = css`
  width: 256px;
  height: 236px;
  border-radius: 8px;
  border: 1px solid ${colors.grey._ec};
  padding: 25px 20px 0 20px;
  margin-bottom: 20px;
  margin-right: 16px;
  cursor: pointer;
`;
const dateBox = css`
  margin-top: 8px;
  margin-left: 3px;
`;
const statusBox = css`
  padding: 20px 0;
`;
