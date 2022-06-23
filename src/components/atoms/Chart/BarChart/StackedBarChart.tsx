import React, { useCallback, useEffect, useState } from 'react';
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import FlexBox from '../../FlexBox';
import { heading5_bold, heading5_regular } from '../../../../styles/FontStyles';
import ReportShortAnswerQuestionLayerPopup from '../../ReportShortAnswerQuestionLayerPopup';

interface PropsType {
  dataList: { [key: string]: any }[];
  name?: string;
  label?: any;
  rate?: string;
  value?: string;
  negative?: boolean;
  setIsShow?: any;
  handleShowAnswerBox?: (e) => void;
  stackbarIndex: number;
  setStackbarIndex: any;
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
  ...props
}: PropsType) => {
  const [renderDataList, setRenderDataList] = useState(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  const [layerData, setLayerData] = useState<object | null>(null);

  const onMouseUp = useCallback(
    (e, index, el, detailIndex) => {
      e.stopPropagation();
      console.log(index);
      console.log(detailIndex, 'detailIndex');

      if (index === activeIndex) {
        setActiveIndex(null);
      } else {
        setActiveIndex(index);
      }
      setStackbarIndex(detailIndex);

      setIsShow(true);
      setLayerData(el);
      // console.log(el);
    },

    [activeIndex],
  );

  useEffect(() => {
    if (dataList) {
      const newObject = {};
      dataList.forEach((el, index) => {
        newObject[`value${index}`] = el.value;
      });
      const newArr = [{ name: name, ...newObject }];
      setRenderDataList(newArr);
    }
  }, [dataList]);

  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <ReportShortAnswerQuestionLayerPopup data={layerData} display={stackbarIndex === props.detailIndex} setStackbarIndex={setStackbarIndex} />
      <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ width: '100%' }}>
        <FlexBox justify={'space-between'}>
          {label ? <span css={[heading5_regular, { paddingLeft: '5px' }]}>{label}</span> : ''}
          <div>
            {value ? <span css={[heading5_bold, { color: '#68a0f4', paddingRight: '10px', ...props.valueStyle }]}>{value}</span> : null}
            <span css={{ marginRight: '16px' }}>|</span>
            {rate ? <span css={[heading5_bold, { color: '#68a0f4', paddingRight: '10px' }]}>{rate}</span> : ''}
          </div>
          {/*{rate ? <span css={[heading5_bold, { color: '#68a0f4' }]}>{rate}</span> : ''}*/}
        </FlexBox>
        <ResponsiveContainer width={'100%'} height={50}>
          <BarChart data={renderDataList} layout="vertical" barCategoryGap={1} barSize={16}>
            <XAxis type="number" hide domain={[0, 100]} />
            <YAxis type="category" hide />
            {dataList?.map((el, index) => {
              if (index === 0) {
                return (
                  <Bar
                    key={`value${index}`}
                    dataKey={`value${index}`}
                    stackId="a"
                    fill={negative ? `rgba(232, 116, 144, 1)` : `rgba(104, 160, 244, 1)`}
                    background={{ fill: '#dcdcdc' }}
                  >
                    {/*{renderDataList?.map((entry, idx) => (*/}
                    <Cell
                      onClick={e => onMouseUp(e, index, el, props.detailIndex)}
                      cursor="pointer"
                      key={`cell-${index}`}
                      // fill={
                      //   index === activeIndex
                      //     ? // ? 'rgba(82, 146, 242)'
                      //       'green'
                      //     : negative
                      //     ? `rgba(232, 116, 144, 1)`
                      //     : `rgba(104, 160, 244, 1)`
                      // }
                    />
                    {/*))}*/}
                  </Bar>
                );
              } else {
                return (
                  <Bar
                    cursor={'pointer'}
                    key={`value1${index}`}
                    dataKey={`value${index}`}
                    stackId="a"
                    fill={negative ? `rgba(232, 116, 144, ${1 - 0.2 * (index - 1)})` : `rgba(104, 160, 244, ${1 - 0.2 * index})`}
                  >
                    {/*{renderDataList?.map((entry, idx) => (*/}
                    <Cell
                      onClick={e => onMouseUp(e, index, el, props.detailIndex)}
                      cursor="pointer"
                      key={`cell-${index}`}
                      // fill={
                      //   index === activeIndex
                      //     ? // ? 'rgba(82, 146, 242)'
                      //       'red'
                      //     : negative
                      //     ? `rgba(232, 116, 144, ${1 - 0.2 * (index - 1)})`
                      //     : `rgba(104, 160, 244, ${1 - 0.2 * index})`
                      // }
                    />
                    {/*))}*/}
                  </Bar>
                );
              }
            })}
          </BarChart>
        </ResponsiveContainer>
      </FlexBox>
    </div>
  );
};

export default StackedBarChart;
