import React, { useEffect, useState } from 'react';
import Grid from '../../../Grid';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Cell } from 'recharts';
import { css } from '@emotion/react';

interface Props {
  data: any;
  barColor?: string;
}

const VerticalBarChartV2Cell = ({ data, barColor = '#68A0F4' }: Props) => {
  const [testState, setTestState] = useState(null);

  const handleClickBar = (e, entry, index) => {
    console.log(entry);
    console.log(entry.title);
    setTestState(entry.title);
  };

  useEffect(() => {
    console.log(testState, '!!');
  }, [testState]);

  return (
    <Grid css={containerStyle}>
      <Grid justify="space-between" css={titleBoxStyle}>
        <span css={titleStyle}>{data?.title}</span>
        <span css={subStyle}>
          {data?.responseRate}%({data?.responseCount})
        </span>
      </Grid>

      <ResponsiveContainer width="100%" height={50}>
        <BarChart className={'shadowChart'} layout="vertical" data={[data]} barSize={16}>
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis type="category" hide />
          <Bar dataKey="value" background={{ fill: '#dcdcdc' }}>
            {[data]?.map((entry, index) => (
              <Cell
                onClick={e => handleClickBar(e, entry, index)}
                // onMouseOut={e => onMouseLeave(e)}
                // onMouseOver={e => onMouseOver(e, detailIndex)}
                cursor="pointer"
                // fill={'#68A0F4'}
                // fill={barColor}
                fill={entry.title === testState ? barColor : 'red'}
                radius={8}
                key={`bar-${index}-${entry.id}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default VerticalBarChartV2Cell;
const containerStyle = css`
  padding: 0 24px;
  .shadowChart {
    transition: all 0.1s;
    &:hover {
      filter: drop-shadow(3px 2px 2px rgb(0 0 0 / 0.4));
    }
  }
`;
const titleBoxStyle = css`
  padding: 0 10px 4px 10px;
  align-items: center;
`;
const titleStyle = css`
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #3c3c46;
`;
const subStyle = css`
  width: 20%;
  text-align: right;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #3c3c46;
`;
