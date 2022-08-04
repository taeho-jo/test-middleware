import React, { Fragment, useCallback, useState } from 'react';
import { StackedBarChart, TableBarChart, UsabilityTableChart } from '../../atoms/Chart';
import { css } from '@emotion/react';
import { caption2_bold, heading4_bold } from '../../../styles/FontStyles';
import FlexBox from '../../atoms/FlexBox';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import { colors } from '../../../styles/Common.styles';
import Icon from '../../atoms/Icon';
import { tableBarChartTestData } from '../../../assets/dummy/dummyData';

const MissionDetailTemplate = ({ dataList, modalControl, item }) => {
  const [stackbarIndex, setStackbarIndex] = useState<number | null>(null);
  const [usabilityIndex, setUsabilityIndex] = useState<number | null>(null);
  const copyList = [...dataList.detailList];
  const sortList = copyList.sort((a, b) => b.count - a.count);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClickUsabilityIndex = useCallback((e, index) => {
    e.stopPropagation();
    setUsabilityIndex(index);
  }, []);

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
    <div
      css={css`
        overflow-y: scroll;
        height: calc(100vh - 136px);
      `}
      className={'scrollType1'}
    >
      <FlexBox style={{ ...graphBosStyle, overflow: 'unset' }} justify={'center'} align={'flex-start'} overflow={'unset'}>
        <FlexBox style={{ ...graphAreaStyle, overflow: 'unset' }} direction={'column'}>
          <div id={dataList.name} css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>1. 불편 언급 비율과 치명도</div>
          </div>
          <FlexBox
            direction={'column'}
            justify={'space-between'}
            align={'flex-start'}
            overflow={'unset'}
            style={{ graphContainerStyle, padding: '32px 80px 80px' }}
          >
            <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
              <Icon name={'ALERT_NORMAL'} size={10} />
              <span onClick={() => modalControl(true, 'fatalityInfo')} css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}>
                치명도가 뭔가요
              </span>
            </FlexBox>
            <TableBarChart barColor={'#68A0f4'} dataList={tableBarChartTestData} dataValueList={item.missionFunctionFatality} name={dataList.name} />

            <AnnouncementBox style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }} color={colors.grey._3c} content={dataList.info} />
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'} overflow={'unset'}>
          <div id={item.name} css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>2. 상세 내용</div>
          </div>
          <FlexBox
            direction={'column'}
            justify={'space-between'}
            align={'flex-start'}
            overflow={'unset'}
            style={{ graphContainerStyle, padding: '32px 80px 80px' }}
          >
            <FlexBox style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 32px', marginBottom: '36px' }}>
              <AnnouncementBox icon={'NOTI'} content={'그래프를 클릭하면 주관식 응답도 함께 확인할 수 있어요.'} />
            </FlexBox>
            {sortList.map((detailItem, detailIndex) => {
              return (
                <Fragment key={`detail-${detailIndex}`}>
                  <StackedBarChart
                    setStackbarIndex={setStackbarIndex}
                    stackbarIndex={stackbarIndex}
                    detailIndex={detailIndex}
                    dataList={detailItem.stack}
                    name={detailItem.name}
                    count={detailItem.count}
                    label={[
                      <>
                        <strong>불편 대상 {detailIndex + 1}위 :</strong> {detailItem.name}
                      </>,
                    ]}
                    value={`${detailItem.count}개`}
                    valueStyle={{ color: colors.grey._3c, fontWeight: 500 }}
                    rate={`${detailItem.rate}%`}
                  />
                </Fragment>
              );
            })}
            {/*</div>*/}

            <AnnouncementBox
              style={{ width: '100%', marginTop: '32px', padding: '12px 16px' }}
              color={colors.grey._3c}
              content={dataList.detailInfo}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div id={item.name} css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>3. 사용성 요소별 점수</div>
          </div>
          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox justify={'space-between'}>
              <FlexBox justify={'flex-start'} style={{ marginBottom: '4px' }}>
                <Icon name={'ALERT_NORMAL'} size={10} />
                <span
                  onClick={() => modalControl(true, 'usabilityAssessmentInfo')}
                  css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}
                >
                  사용성 평가 요소가 뭔가요
                </span>
              </FlexBox>
              <FlexBox justify={'flex-end'} style={{ marginBottom: '4px' }}>
                <Icon name={'ALERT_NORMAL'} size={10} />
                <span onClick={() => modalControl(true, 'fatalityInfo')} css={[caption2_bold, { textDecoration: 'underline', cursor: 'pointer' }]}>
                  치명도가 뭔가요
                </span>
              </FlexBox>
            </FlexBox>

            <UsabilityTableChart
              onMouseOver={onMouseOver}
              onMouseLeave={onMouseLeave}
              handleClickUsabilityIndex={handleClickUsabilityIndex}
              usabilityIndex={usabilityIndex}
              setUsabilityIndex={setUsabilityIndex}
              dataList={dataList.usabilityList}
              negative={true}
              activeIndex={activeIndex}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </div>
  );
};

export default MissionDetailTemplate;
const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 500;
  overflow: unset;
`;
const graphBosStyle = css`
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
  overflow: unset;
`;
const sortationArea = css`
  width: 100%;
  height: 16px;
  background: #dcdcdc;
`;
