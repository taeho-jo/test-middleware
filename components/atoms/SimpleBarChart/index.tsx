import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

// Types
interface DummyDataType {
  [key: string]: string | number;
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

const SimpleBarChart = ({
  cartesianGrid = true,
  xAxis = true,
  yAxis = true,
  tooltip = true,
  legend = true,
  barColor = ['#067373', '#FEA443', '#812F33'],
  data,
}: PropsType) => {
  const barLabelList: string[] = Object.keys(data[0]);

  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {cartesianGrid ? <CartesianGrid strokeDasharray="2 2" /> : null}
        {xAxis ? <XAxis dataKey={barLabelList[0]} /> : null}
        {yAxis ? <YAxis /> : null}
        {tooltip ? <Tooltip /> : null}
        {legend ? <Legend /> : null}
        {barLabelList.map((el, index) => {
          if (index !== 0) {
            return <Bar key={index} dataKey={el} fill={barColor[index - 1]} />;
          }
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SimpleBarChart;
