import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SimpleBarChart from '../../components/atoms/SimpleBarChart';
import FlexBox from '../../components/atoms/FlexBox';

export default {
  title: 'ATOMS/Graph',
  component: SimpleBarChart,
} as ComponentMeta<typeof SimpleBarChart>;

const Template: ComponentStory<typeof SimpleBarChart> = args => (
  <FlexBox height={'500px'} padding={'10px 30px'}>
    <SimpleBarChart {...args} />
  </FlexBox>
);

export const BarChart = Template.bind({});
BarChart.args = {
  cartesianGrid: true,
  xAxis: true,
  yAxis: true,
  tooltip: true,
  legend: true,
  barColor: ['#067373', '#FEA443', '#812F33'],
  data: [
    { test: 'test', a: 12313, b: 59373, c: 95234 },
    { test: 'test2', a: 54311, b: 12331, c: 45222 },
    { test: 'test3', a: 78434, b: 23452, c: 42344 },
    { test: 'test4', a: 34575, b: 45234, c: 77534 },
    { test: 'test5', a: 26547, b: 22345, c: 17643 },
  ],
};
