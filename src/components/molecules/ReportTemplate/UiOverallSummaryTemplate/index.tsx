import React, { useCallback, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { caption2_bold, heading3_bold, heading4_bold, heading5_bold, heading5_medium } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { chart_color, colors, hover_chart_color } from '../../../../styles/Common.styles';
import { RatePieChart, TableBarChart } from '../../../atoms/Chart';
import { tableBarChartTestData, tableBarTestData } from '../../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import Icon from '../../../atoms/Icon';
import FixImage from '/public/assets/png/chartFixAlert.png';
import { reportHeader } from '../FeatureSpecificDetailTemplate';

interface PropsType {
  dataList: {
    missionSuccess: {
      index: string;
      name: string;
      missionSuccessRatioInfo: { name: string; value: number }[];
    }[];
    missionFatality: {
      index: string;
      name: string;
      value: number;
      fatality: string;
      missionFunctionFatality: {
        index: string;
        name: string;
        value: number;
        fatality: string;
        info: string;
        detailInfo: string;
        detailList: {
          name: string;
          stack: [
            {
              value: number;
              reason: string;
              answer: string[];
            },
          ];
          count: string;
          rate: string;
        }[];
        usabilityList: {
          name: string;
          value: number;
          fatality: string;
          mention: string;
        }[];
      }[];
    }[];
  };
}

const UiOverallSummaryTemplate = ({ dataList, register, errors, checked, handleChangeCheckBox, modalControl, comment }) => {
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
    <div id="????????? ????????? ?????? ??????">
      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        {/*<img css={fixImage} src={FixImage.src} alt="'FixImage" />*/}
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>????????? ?????????</div>
          </div>
          <FlexBox justify={'space-between'} align={'flex-start'} wrap={'wrap'} style={graphContainerStyle}>
            {dataList?.missionSuccess.map((el, index) => {
              return (
                <FlexBox key={el.name} direction={'column'} style={{ width: '33%' }} overflow={'unset'}>
                  <span css={[heading5_medium, { textAlign: 'center', marginBottom: '4px' }]}>?????? {index + 1}</span>
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
              );
            })}
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>????????? ?????? ?????? ????????? ?????????</div>
          </div>
          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
              <Icon name={'ALERT_NORMAL'} size={10} />
              <span onClick={() => modalControl(true, 'fatalityInfo')} css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}>
                ???????????? ?????????
              </span>
            </FlexBox>
            <TableBarChart barColor={true} dataList={tableBarChartTestData} dataValueList={dataList?.missionFatality} />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default UiOverallSummaryTemplate;

const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 500;
`;
const graphBosStyle = css`
  width: 100%;
  position: relative;
`;
const fixImage = css`
  width: 278px;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
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
