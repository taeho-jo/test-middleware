import React, { useCallback, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { heading3_bold, heading4_bold } from '../../../../styles/FontStyles';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { colors } from '../../../../styles/Common.styles';
import { BasicBarChart } from '../../../atoms/Chart';
import { checkIsInteger } from '../../../../common/util/commonFunc';
import { reportHeader } from '../FeatureSpecificDetailTemplate';
import { GeneralScaleTypeTemplate } from '../index';

const MultipleQuestionTemplate = ({ dataList, modalControl }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
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

  const handleClickIndex = useCallback((e, index) => {
    e.stopPropagation();
    console.log(index);
    setSelectedIndex(index);
  }, []);

  return (
    <>
      <FlexBox style={headerBosStyle} justify={'space-between'}>
        <FlexBox style={reportHeader} justify={'flex-start'} align={'center'}>
          <span className={'title'} css={[heading3_bold, { marginRight: '32px', overflow: 'hidden' }]}>
            객관식 문항 - {dataList.intent}
          </span>
        </FlexBox>
        <FlexBox justify={'flex-end'} width={'30%'}>
          <IconTextButton
            onClick={() => modalControl(true, 'originDataModal', { title: `객관식 문항 - ${dataList.intent}`, data: dataList.rawData })}
            style={{ marginRight: '8px' }}
            textStyle={'custom'}
            name={'NAVIGATION_CHEVRON_RIGHT'}
            text={'원본 데이터 확인하기'}
          />
          <IconTextButton
            disabled={true}
            onClick={() => modalControl(true, 'commentDataModal', { title: 'commentModal', list: [] })}
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
