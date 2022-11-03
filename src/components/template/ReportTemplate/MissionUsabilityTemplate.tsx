import React, { useCallback, useEffect, useRef, useState } from 'react';
import FlexBox from '../../atoms/FlexBox';
import { caption2_bold, heading4_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import { TableBarChart } from '../../atoms/Chart';
import { tableBarChartTestData } from '../../../assets/dummy/dummyData';
import { css } from '@emotion/react';
import Icon from '../../atoms/Icon';
import useOnMultipleScreen from '../../../hooks/useOnMultipleScreen';

const MissionUsabilityTemplate = ({ dataList, index, register, errors, checked, handleChangeCheckBox, modalControl }) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [graphHeight, setGraphHeight] = useState('center');
  const containerRef = useRef(null);
  const tableRef = useRef(null);

  useEffect(() => {
    if (tableRef && containerRef) {
      const graphHeight = tableRef?.current?.clientHeight;
      const containerHeight = containerRef?.current?.clientHeight;
      // setGraphHeight(tableRef?.current?.clientHeight);
      // setContainerHeight(tableRef?.current?.clientHeight);
      if (graphHeight > containerHeight) {
        setGraphHeight('flex-start');
      } else {
        setGraphHeight('center');
      }
    }
  }, [tableRef, containerRef]);

  return (
    <div
      css={css`
        height: calc(100vh - 136px);
        display: flex;
        flex-direction: column;
        justify-content: ${graphHeight};
      `}
      className={'scrollType1'}
      ref={containerRef}
    >
      <div id={dataList.name} css={{ position: 'relative' }}>
        <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
          <FlexBox style={graphAreaStyle(graphHeight)} direction={'column'}>
            <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
              <div css={[heading4_bold]}>
                [미션.{index + 1} {dataList.name}] 기능별 불편 언급 비율과 치명도
              </div>
            </div>
            <div ref={tableRef}>
              <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
                <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                  <Icon name={'ALERT_NORMAL'} size={10} />
                  <span onClick={() => modalControl(true, 'fatalityInfo')} css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}>
                    치명도가 뭔가요
                  </span>
                </FlexBox>

                <TableBarChart barColor={true} dataList={tableBarChartTestData} dataValueList={dataList.missionFunctionFatality} />

                {/*<TableBarChart barColor={true} dataList={tableBarChartTestData} dataValueList={[el]} />*/}
              </FlexBox>
            </div>
          </FlexBox>
        </FlexBox>
      </div>
    </div>
  );
};

export default MissionUsabilityTemplate;

const graphBosStyle = css`
  width: 100%;
  position: relative;
  overflow: unset;
`;
const graphAreaStyle = graphHeight => css`
  border-left: ${graphHeight === 'flex-start' ? '1px solid #dcdcdc' : 'none'};
  border-right: ${graphHeight === 'flex-start' ? '1px solid #dcdcdc' : 'none'};
  min-width: 900px;
  max-width: 900px;
  height: auto;
  padding-top: 40px;
`;
const graphContainerStyle = css`
  padding: 36px 80px 80px;
  width: 100%;
  //border-bottom: 1px solid #dcdcdc;
  overflow: unset;
`;
