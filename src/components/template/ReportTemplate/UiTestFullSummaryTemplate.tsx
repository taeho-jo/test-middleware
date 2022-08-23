import React, { Fragment, useCallback, useState } from 'react';
import FlexBox from '../../atoms/FlexBox';
import { chart_color, colors, hover_chart_color } from '../../../styles/Common.styles';
import { caption2_bold, heading4_bold, heading5_bold, heading5_medium } from '../../../styles/FontStyles';
import { RatePieChart, TableBarChart } from '../../atoms/Chart';
import Icon from '../../atoms/Icon';
import { tableBarChartTestData } from '../../../assets/dummy/dummyData';
import { css } from '@emotion/react';

const UiTestFullSummaryTemplate = ({ dataList, register, errors, checked, handleChangeCheckBox, modalControl, comment }) => {
  const [selectedLabelIndex, setSelectedLabelIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseUp = useCallback(
    (index, e) => {
      e.stopPropagation();
      if (selectedLabelIndex === index) {
        setSelectedLabelIndex(null);
      } else {
        setSelectedLabelIndex(index);
      }
    },
    [selectedLabelIndex],
  );

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
  return (
    <>
      <FlexBox css={graphBoxStyle} justify={'center'} align={'flex-start'} overflow={'unset'}>
        {/*<img css={fixImage} src={FixImage.src} alt="'FixImage" />*/}
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>미션별 성공률</div>
          </div>
          <FlexBox justify={'space-between'} align={'flex-start'} wrap={'wrap'} style={graphContainerStyle}>
            {dataList?.missionSuccess.map((el, index) => {
              return (
                <Fragment key={el.name}>
                  <FlexBox direction={'column'} style={{ width: '33%' }} overflow={'unset'}>
                    <span css={[heading5_medium, { textAlign: 'center', marginBottom: '4px' }]}>미션 {index + 1}</span>
                    <span css={[heading5_bold, { textAlign: 'center' }]}>{el.name}</span>
                    <RatePieChart
                      handleMouseUp={handleMouseUp}
                      onMouseOver={onMouseOver}
                      onMouseLeave={onMouseLeave}
                      index={index}
                      selectedLabelIndex={selectedLabelIndex}
                      setSelectedLabelIndex={setSelectedLabelIndex}
                      color={activeIndex === index ? hover_chart_color[index] : chart_color[index]}
                      dataList={el}
                      infoDataList={dataList.missionFatality[index]}
                    />
                  </FlexBox>
                </Fragment>
              );
            })}
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox css={graphBoxStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>미션별 불편 언급 비율과 치명도</div>
          </div>
          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
              <Icon name={'ALERT_NORMAL'} size={10} />
              <span onClick={() => modalControl(true, 'fatalityInfo')} css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}>
                치명도가 뭔가요
              </span>
            </FlexBox>
            <TableBarChart barColor={true} dataList={tableBarChartTestData} dataValueList={dataList?.missionFatality} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};
export default UiTestFullSummaryTemplate;

const graphBoxStyle = css`
  width: 100%;
  position: relative;
  overflow: unset;
`;

const graphAreaStyle = css`
  border-left: 1px solid #dcdcdc;
  border-right: 1px solid #dcdcdc;
  min-width: 900px;
  max-width: 900px;
  height: auto;
  padding-top: 40px;
`;
const graphContainerStyle = css`
  padding: 36px 80px 80px;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
`;
