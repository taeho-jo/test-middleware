import React, { useCallback, useEffect, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { colors } from '../../../../styles/Common.styles';
import { BasicBarChart } from '../../../atoms/Chart';
import { checkIsInteger } from '../../../../common/util/commonFunc';
import { reportHeader } from '../FeatureSpecificDetailTemplate';
import { GeneralScaleTypeTemplate } from '../index';
import AnnouncementBox from '../../AnnouncementBox';

const MultipleQuestionTemplate = ({ dataList, modalControl, parentIndex }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [isAnswerData, setIsAnswerData] = useState(false);

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

  const handleClickIndex = useCallback((e, index) => {
    e.stopPropagation();
    setSelectedIndex(index);
  }, []);

  const bool = dataList?.detailMultipleList
    ?.map(el => el.multipleAnswerData)
    .filter(Boolean)
    .flat();
  const rawData = dataList?.detailMultipleList?.map(el => el.multipleAnswerData).filter(Boolean);

  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
          <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
            {dataList.intent}
          </span>
        </FlexBox>
        <FlexBox justify={'flex-end'} width={'30%'}>
          <IconTextButton
            onClick={() =>
              modalControl(true, 'originDataModal', {
                title: `${dataList.intent}`,
                data: rawData.flat(),
              })
            }
            disabled={bool?.length === 0 ? true : false}
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            name={'NAVIGATION_CHEVRON_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
          <IconTextButton
            onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [dataList?.comment] })}
            textStyle={'custom'}
            name={'NAVIGATION_CHEVRON_RIGHT'}
            text={'리서치 코멘트 확인하기'}
          />
        </FlexBox>
      </FlexBox>
      <div>
        <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
          <FlexBox style={graphAreaStyle} direction={'column'}>
            <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
              <div css={[heading4_bold]}>{dataList.intent}</div>
            </div>

            <FlexBox direction={'column'} justify={'center'} align={'flex-start'} style={graphContainerStyle}>
              {dataList?.name && (
                <FlexBox
                  direction={'column'}
                  style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 32px', marginBottom: '36px' }}
                >
                  <span
                    css={[
                      heading5_regular,
                      {
                        color: colors.grey._99,
                        marginBottom: bool?.length !== 0 ? '12px' : '0px',
                        height: 'auto',
                        wordBreak: 'keep-all',
                        textAlign: 'center',
                        whiteSpace: 'pre-wrap',
                      },
                    ]}
                  >
                    Q. {dataList.name}
                  </span>
                  {bool?.length !== 0 && <AnnouncementBox icon={'NOTI'} content={'그래프를 클릭하면 주관식 응답도 함께 확인할 수 있어요.'} />}
                </FlexBox>
              )}

              {dataList?.detailMultipleList?.length !== 0
                ? dataList.detailMultipleList?.map((detail, detailIndex) => {
                    return (
                      <BasicBarChart
                        onMouseOver={onMouseOver}
                        onMouseLeave={onMouseLeave}
                        infoBox={true}
                        detailIndex={detailIndex}
                        handleClickIndex={handleClickIndex}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        key={`detailMultiple-${detail.name}-${detailIndex}`}
                        dataList={[detail]}
                        value={`${detail.count}명`}
                        valueStyle={{ color: colors.grey._99, fontWeight: 500 }}
                        label={[<>{detail.name}</>]}
                        rate={`${checkIsInteger(detail.value)}%`}
                        activeIndex={activeIndex}
                      />
                    );
                  })
                : null}
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </div>
    </>
  );
};

export default MultipleQuestionTemplate;
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
