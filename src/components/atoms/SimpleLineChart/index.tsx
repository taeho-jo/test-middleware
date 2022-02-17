import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface DummyDataType {
  [key: string]: string | number;
}

interface PropsType {
  data: DummyDataType[];
  lineColor?: string[];
  cartesianGrid?: boolean;
  xAxis?: boolean;
  yAxis?: boolean;
  tooltip?: boolean;
  legend?: boolean;
}

const SimpleLineChart = ({
  cartesianGrid = true,
  xAxis = true,
  yAxis = true,
  tooltip = true,
  legend = true,
  lineColor = ['#067373', '#FEA443', '#812F33'],
  data,
}: PropsType) => {
  const lineLabelList: string[] = Object.keys(data[0]);

  return (
    <ResponsiveContainer width={'100%'} height={'100%'}>
      <LineChart data={data}>
        {cartesianGrid ? <CartesianGrid strokeDasharray="2 2" /> : null}
        {xAxis ? <XAxis dataKey={lineLabelList[0]} /> : null}
        {yAxis ? <YAxis /> : null}
        {tooltip ? <Tooltip /> : null}
        {legend ? <Legend /> : null}
        {lineLabelList?.map((el, index) => {
          if (index !== 0) {
            return (
              <Line
                key={index}
                type="monotone"
                dataKey={el}
                stroke={lineColor[index - 1]}
              />
            );
          }
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SimpleLineChart;
