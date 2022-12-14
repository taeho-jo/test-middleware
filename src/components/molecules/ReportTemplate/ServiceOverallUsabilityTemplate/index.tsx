import React, { useCallback, useEffect, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption2_bold, heading3_bold, heading4_bold } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { colors } from '../../../../styles/Common.styles';
import Icon from '../../../atoms/Icon';
import { TableBarChart, UsabilityTableChart } from '../../../atoms/Chart';
import { featureSpecificDetailData, featureUseData, featureUseData2, tableBarChartTestData } from '../../../../assets/dummy/dummyData';
import AnnouncementBox from '../../AnnouncementBox';
import { reportHeader } from '../FeatureSpecificDetailTemplate';

const ServiceOverallUsabilityTemplate = ({ dataList, register, errors, checked, handleChangeCheckBox, modalControl }) => {
  const [sortDataList, setSortDataList] = useState([]);
  const [usabilityIndex, setUsabilityIndex] = useState<number | null>(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onMouseOver = useCallback(
    (e, index) => {
      e.stopPropagation();
      setActiveIndex(index);
    },
    [activeIndex],
  );

  const onMouseLeave = useCallback(
    e => {
      e.stopPropagation();
      setActiveIndex(null);
    },
    [activeIndex],
  );

  const handleClickUsabilityIndex = useCallback((e, index) => {
    e.stopPropagation();
    setUsabilityIndex(index);
  }, []);

  // useEffect(() => {
  //   if (dataList) {
  //     const copyList = [...dataList?.serviceTotalUsabilityInfo?.serviceTotalUsabilityList];
  //     const sortList = copyList.sort((a, b) => b.count - a.count);
  //   }
  // }, [dataList]);

  return (
    <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
      <FlexBox style={graphAreaStyle} direction={'column'}>
        <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
          <div css={[heading4_bold]}>?????? ????????? ????????? ??????</div>
        </div>
        <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
          <FlexBox justify={'space-between'}>
            <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>
              <Icon name={'ALERT_NORMAL'} size={10} />
              <span
                onClick={() => modalControl(true, 'usabilityAssessmentInfo')}
                css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}
              >
                ????????? ?????? ????????? ?????????
              </span>
            </FlexBox>
            <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
              <Icon name={'ALERT_NORMAL'} size={10} />
              <span css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]} onClick={() => modalControl(true, 'fatalityInfo')}>
                ???????????? ?????????
              </span>
            </FlexBox>
          </FlexBox>

          <UsabilityTableChart
            onMouseOver={onMouseOver}
            onMouseLeave={onMouseLeave}
            handleClickUsabilityIndex={handleClickUsabilityIndex}
            usabilityIndex={usabilityIndex}
            setUsabilityIndex={setUsabilityIndex}
            dataList={dataList?.serviceTotalUsabilityInfo?.serviceTotalUsabilityList}
            negative={true}
            activeIndex={activeIndex}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default ServiceOverallUsabilityTemplate;
const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 500;
  display: flex;
  justify-content: space-between;
`;
const graphBosStyle = css`
  width: 100%;
`;
const graphAreaStyle = css`
  //border-left: 1px solid #dcdcdc;
  //border-right: 1px solid #dcdcdc;
  min-width: 900px;
  max-width: 900px;
  height: auto;
  padding-top: 40px;
`;
const graphContainerStyle = css`
  padding: 36px 80px 80px;
  width: 100%;
  //border-bottom: 1px solid #dcdcdc;
`;
