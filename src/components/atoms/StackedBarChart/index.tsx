import React, { Fragment, useCallback } from 'react';
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  LabelList,
  Legend,
} from 'recharts';

const data = [
  {
    value: 3,
    content: 'asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfa',
    value1: 10,
    content1: '1231231231231231231424523566745675634523',
  },
];

const length = [];
const contentsArr = [];
for (const i in data[0]) {
  if (i.includes('value')) {
    length.push(i);
  }
  if (i.includes('content')) {
    const obj = {
      id: i,
      content: data[0][i],
    };
    contentsArr.push(obj);
  }
}

const handleSelectBarChart = (index, state) => {
  console.log(index, state);
};

const StackedBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        {/*<CartesianGrid strokeDasharray="3 3" />*/}
        <XAxis dataKey="name" />
        <YAxis />
        {/*<Tooltip cursor={false} />*/}
        {/*<Legend />*/}

        {length.map((el, index) => {
          return (
            <Fragment key={index}>
              <Bar
                key={index}
                dataKey={el}
                stackId="a"
                fill={index === 0 ? '#8884d8' : 'red'}
                onClick={state => handleSelectBarChart(index, state)}
              />
            </Fragment>
          );
        })}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
