import React, { Fragment, useCallback, useEffect, useState } from 'react';
import FlexBox from '../../../atoms/FlexBox';
import { body2_bold, caption2_bold, heading3_bold, heading4_bold, heading5_regular } from '../../../../styles/FontStyles';
import CheckBox from '../../../atoms/CheckBox';
import IconTextButton from '../../../atoms/Button/IconTextButton';
import { css } from '@emotion/react';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../../common/types/commonTypes';
import { colors } from '../../../../styles/Common.styles';
import AnnouncementBox from '../../AnnouncementBox';
import Icon from '../../../atoms/Icon';
import { BasicHorizontalBarChart } from '../../../atoms/Chart';
import { basicBarTestData3 } from '../../../../assets/dummy/dummyData';
import { reportHeader } from '../FeatureSpecificDetailTemplate';

const GeneralScaleTypeTemplate = ({ dataList, modalControl }) => {
  const [reMakeArr, setReMakeArr] = useState(null);
  const [totalAnswerCount, setTotalAnswerCount] = useState(0);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [rawData, setRawData] = useState<string[]>([]);

  const handleClickIndex = useCallback((e, index) => {
    e.stopPropagation();
    setSelectedIndex(index);
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

  useEffect(() => {
    if (dataList) {
      const reMakeArr = dataList?.detailScaleList
        ?.reduce(
          (acc, cur) =>
            acc.concat({
              count: cur.count,
              name: cur.name.split('.')[0],
              value: cur.value,
              multipleAnswerData: cur.multipleAnswerData,
            }),
          [],
        )
        .sort((a, b) => a.name - b.name)
        .filter(el => el.name !== 'null');

      const rawDataArr = reMakeArr.map(el => el.multipleAnswerData).flat();
      const total = reMakeArr?.reduce((acc, cur) => {
        return acc + cur.count;
      }, 0);
      setTotalAnswerCount(total);
      setReMakeArr(reMakeArr);
      setRawData(rawDataArr);
    }
  }, [dataList]);

  return (
    <>
      <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
        <FlexBox style={graphAreaStyle} direction={'column'}>
          <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
            <div css={[heading4_bold]}>{dataList.intent}</div>
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
            <FlexBox direction={'column'} style={{ border: '1px solid #dcdcdc', borderRadius: '8px', padding: '24px 32px', marginBottom: '36px' }}>
              <span
                css={[
                  heading5_regular,
                  {
                    color: colors.grey._99,
                    marginBottom: '12px',
                    height: 'auto',
                    wordBreak: 'keep-all',
                    textAlign: 'center',
                    whiteSpace: 'pre-wrap',
                  },
                ]}
              >
                Q. {dataList.name}
              </span>
              {rawData?.length > 0 && <AnnouncementBox icon={'NOTI'} content={'???????????? ???????????? ????????? ????????? ?????? ????????? ??? ?????????.'} />}
            </FlexBox>

            <FlexBox
              justify={'space-between'}
              align={'center'}
              style={{ padding: '22px 16px', borderTop: '1px solid #dcdcdc', borderBottom: '1px solid #dcdcdc' }}
            >
              <FlexBox justify={'flex-start'} align={'center'}>
                <Icon name={'NAVIGATION_ARROW_LEFT'} size={12} />
                <span css={caption2_bold}>?????? ???????????? ??????</span>
              </FlexBox>
              <FlexBox justify={'flex-end'} align={'center'}>
                <span css={caption2_bold}>?????? ?????????</span>
                <Icon name={'NAVIGATION_ARROW_RIGHT'} size={12} />
              </FlexBox>
            </FlexBox>

            <FlexBox justify={'space-around'} style={{ padding: '32px 45px', borderBottom: '1px solid #dcdcdc', position: 'relative' }}>
              {reMakeArr?.map((el, index) => {
                return (
                  <Fragment key={`scale-${index}`}>
                    <BasicHorizontalBarChart
                      selectedIndex={selectedIndex}
                      setSelectedIndex={setSelectedIndex}
                      barColor={activeIndex === index ? '#3375d6' : '#68A0F4'}
                      index={index}
                      dataList={el}
                      onMouseLeave={onMouseLeave}
                      onMouseOver={onMouseOver}
                      handleClickIndex={handleClickIndex}
                    />
                  </Fragment>
                );
              })}
            </FlexBox>
            <div css={[heading4_bold, { color: colors.grey._99, textAlign: 'center', width: '100%', marginTop: '40px' }]}>
              ??? ????????? ??? : {totalAnswerCount}???{' '}
            </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </>
  );
};

export default GeneralScaleTypeTemplate;

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
  //padding-top: 40px;
`;
const graphContainerStyle = css`
  padding: 36px 80px 80px;
  width: 100%;
  //border-bottom: 1px solid #dcdcdc;
`;
