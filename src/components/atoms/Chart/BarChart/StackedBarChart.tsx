import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import ReportShortAnswerQuestionLayerPopup from '../../ReportShortAnswerQuestionLayerPopup';
import { chart_color, colors } from '../../../../styles/Common.styles';
import TutorialIndicator from '../../TutorialIndicator/TutorialIndicator';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../../store/reducers';
import { useRouter } from 'next/router';
import useOutsideClick from '../../../../hooks/useOutsideClick';
import { css } from '@emotion/react';

interface PropsType {
  dataList: any;
  name?: string;
  label?: any;
  rate?: string;
  value?: string;
  negative?: boolean;
  setIsShow?: any;
  handleShowAnswerBox?: (e) => void;
  stackbarIndex: number;
  setStackbarIndex: any;
  count: number;
  [key: string]: any;
}
const StackedBarChart = ({
  handleShowAnswerBox,
  dataList,
  name,
  label,
  rate,
  negative = false,
  value,
  setStackbarIndex,
  stackbarIndex,
  count,
  ...props
}: PropsType) => {
  const indicatorStatus = useSelector<ReducerType, any>(state => state.common.indicator);
  const router = useRouter();
  const { isShare } = router.query;
  const [renderDataList, setRenderDataList] = useState(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [sortData, setSortData] = useState([]);
  const [layerData, setLayerData] = useState<object | null>(null);

  const onMouseClick = useCallback(
    (e, index, el, detailIndex) => {
      e.stopPropagation();
      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
      setStackbarIndex(detailIndex);
      setIsShow(true);
      setLayerData(el);
    },
    [activeIndex],
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

  useEffect(() => {
    if (dataList) {
      const newObject = {};
      const sortArr = [...dataList];
      const sortArr2 = sortArr.sort((a, b) => b.value - a.value);

      setSortData(sortArr2);

      sortArr2.forEach((el, index) => {
        newObject[`value${index}`] = el.value;
      });

      const newArr = [{ name: name, ...newObject }];
      setRenderDataList(newArr);
    }
  }, [dataList]);

  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => {
    setStackbarIndex(null);
  });

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      {stackbarIndex === props.detailIndex && (
        <div ref={boxRef} css={popupContainer}>
          <ReportShortAnswerQuestionLayerPopup
            data={layerData}
            count={count}
            display={stackbarIndex === props.detailIndex}
            setStackbarIndex={setStackbarIndex}
          />
        </div>
      )}

      <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%' }}>
        <FlexBox justify={'space-between'}>
          {label ? <span css={[heading5_regular, { paddingLeft: '5px' }]}>{label}</span> : ''}
          <div>
            {value ? <span css={[heading5_bold, { color: '#68a0f4', paddingRight: '10px', ...props.valueStyle }]}>{value}</span> : null}
            <span css={{ marginRight: '16px' }}>|</span>
            {rate ? <span css={[heading5_bold, { color: '#68a0f4', paddingRight: '10px' }]}>{rate}</span> : ''}
          </div>
        </FlexBox>

        {!isShare && props.detailIndex === 0 && indicatorStatus.graph === 'N' && (
          <TutorialIndicator
            share={isShare}
            name={'graph'}
            left={'-17px'}
            top={'12px'}
            modalTitle={'주관식 응답'}
            modalSubTitle={`각 선택지별로 주관식 응답이 있는 경우,\n그래프를 클릭하여 주관식응답을 볼 수 있어요.`}
            modalTop={'60px'}
            modalLeft={'-10px'}
          />
        )}

        {isShare && props.detailIndex === 0 && indicatorStatus.graph === 'N' && (
          <TutorialIndicator
            share={isShare}
            name={'graph'}
            left={'-17px'}
            top={'12px'}
            modalTitle={'주관식 응답'}
            modalSubTitle={`각 선택지별로 주관식 응답이 있는 경우,\n그래프를 클릭하여 주관식응답을 볼 수 있어요.`}
            modalTop={'60px'}
            modalLeft={'-10px'}
          />
        )}

        <ResponsiveContainer width={'100%'} height={50}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <BarChart stroke={'#dcdcdc'} data={renderDataList} layout="vertical" barCategoryGap={1} barSize={16}>
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis type="category" hide />
            <Bar dataKey={'value'} stackId={'a'} background={{ fill: '#dcdcdc' }} />
            {sortData?.map((el, index) => {
              return (
                <Bar key={`stackedBar-${index}`} dataKey={`value${index}`} stackId={'a'}>
                  <Cell
                    stroke={'#dcdcdc'}
                    fill={
                      index === activeIndex
                        ? 'rgb(47, 113, 212)'
                        : negative
                        ? `rgba(232, 116, 144,${1 - 0.1 * index})`
                        : `rgba(104, 160, 244, ${1 - 0.09 * index})`
                    }
                    onMouseOut={e => onMouseLeave(e)}
                    onMouseOver={e => onMouseOver(e, index)}
                    onClick={e => onMouseClick(e, index, el, props.detailIndex)}
                    cursor="pointer"
                    key={`cell-${index}`}
                  />
                </Bar>
              );
            })}
          </BarChart>
        </ResponsiveContainer>
      </FlexBox>
    </div>
  );
};

export default StackedBarChart;

const popupContainer = css`
  width: 660px;
  border-radius: 8px;
  //padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 99;
  border: 1px solid #dcdcdc;
`;
