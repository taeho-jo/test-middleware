import React, { useCallback, useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from 'recharts';

// Types
interface DummyDataType {
  [key: string]: string | number | object;
}
interface PropsType {
  data: DummyDataType[];
  barColor?: string[];
  cartesianGrid?: boolean;
  xAxis?: boolean;
  yAxis?: boolean;
  tooltip?: boolean;
  legend?: boolean;
}

const VerticlBarGraph = ({
  cartesianGrid = true,
  xAxis = true,
  yAxis = true,
  tooltip = true,
  legend = true,
  barColor = ['#067373', '#FEA443', '#812F33'],
  data,
}: PropsType) => {
  const [focusBar, setFocusBar] = useState<number | null>(null);
  const [hoverBar, setHoverBar] = useState<number | null>(null);

  const renderCustomizedLabel = useCallback(props => {
    const { x, y, height, value } = props;
    return (
      <text
        fontSize={14}
        x={x + 20}
        y={y + height / 2 + 6}
        fill={'#0D0D0D'}
        fontWeight={'bold'}
        textAnchor="start"
      >
        {value}
      </text>
    );
  }, []);

  const handleSelectBarChart = useCallback(
    state => {
      console.log(state);
      if (state) {
        setFocusBar(state.activeTooltipIndex);
      } else {
        setFocusBar(null);
      }
    },
    [focusBar],
  );

  const handleHoverBarChart = useCallback(
    state => {
      if (state) {
        setHoverBar(state.activeTooltipIndex);
      } else {
        setHoverBar(null);
      }
    },
    [hoverBar],
  );

  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          // right: 30,
          // left: 20,
          bottom: 5,
        }}
        layout="vertical"
        onClick={state => handleSelectBarChart(state)}
        onMouseMove={state => handleHoverBarChart(state)}
      >
        {cartesianGrid ? <CartesianGrid strokeDasharray="2 2" /> : null}
        {xAxis ? <XAxis type={'number'} domain={[0, 100]} /> : null}
        {yAxis ? <YAxis type="category" hide /> : null}
        {tooltip ? <Tooltip cursor={false} /> : null}
        {legend ? <Legend /> : null}
        <Bar
          background={{ fill: '#F2F2F2' }}
          dataKey={'value'}
          fill={'#FEA443'}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={
                focusBar === index
                  ? '#C8D9C7'
                  : hoverBar === index
                  ? '#D9B95B'
                  : '#F2DB94'
              }
            />
          ))}
          <LabelList
            dataKey={'name'}
            position="insideLeft"
            style={{ fill: '#fff', fontWeight: 'bold' }}
            content={renderCustomizedLabel}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default VerticlBarGraph;
