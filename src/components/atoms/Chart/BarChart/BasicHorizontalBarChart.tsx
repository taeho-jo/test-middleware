import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { basicBarTestData } from '../../../../assets/dummy/dummyData';

const BasicHorizontalBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={basicBarTestData}>
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BasicHorizontalBarChart;
