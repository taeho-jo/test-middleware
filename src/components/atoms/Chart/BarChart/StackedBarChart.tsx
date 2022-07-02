import React, { useCallback, useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import ReportShortAnswerQuestionLayerPopup from '../../ReportShortAnswerQuestionLayerPopup';
import { chart_color } from '../../../../styles/Common.styles';

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
  const [renderDataList, setRenderDataList] = useState(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isShow, setIsShow] = useState<boolean>(false);
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

      sortArr2.forEach((el, index) => {
        newObject[`value${index}`] = el.value;
      });

      const newArr = [{ name: name, ...newObject }];
      setRenderDataList(newArr);
    }
  }, [dataList]);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <ReportShortAnswerQuestionLayerPopup
        data={layerData}
        count={count}
        display={stackbarIndex === props.detailIndex}
        setStackbarIndex={setStackbarIndex}
      />
      <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%' }}>
        <FlexBox justify={'space-between'}>
          {label ? <span css={[heading5_regular, { paddingLeft: '5px' }]}>{label}</span> : ''}
          <div>
            {value ? <span css={[heading5_bold, { color: '#68a0f4', paddingRight: '10px', ...props.valueStyle }]}>{value}</span> : null}
            <span css={{ marginRight: '16px' }}>|</span>
            {rate ? <span css={[heading5_bold, { color: '#68a0f4', paddingRight: '10px' }]}>{rate}</span> : ''}
          </div>
        </FlexBox>
        <ResponsiveContainer width={'100%'} height={50}>
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <BarChart stroke={'#dcdcdc'} data={renderDataList} layout="vertical" barCategoryGap={1} barSize={16}>
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis type="category" hide />
            <Bar dataKey={'value'} stackId={'a'} background={{ fill: '#dcdcdc' }} />
            {dataList?.map((el, index) => {
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
