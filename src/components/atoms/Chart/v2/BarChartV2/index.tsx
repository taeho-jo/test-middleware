import React from 'react';
import Grid from '../../../Grid';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Cell } from 'recharts';
import { css } from '@emotion/react';

const data = [
  {
    name: 'Page A',
    uv: 50,
    pv: 2400,
    amt: 2400,
  },
];

const BarChartV2 = () => {
  return (
    <Grid>
      <Grid justify={'space-between'} css={titleBoxStyle}>
        <span css={titleStyle}>
          {' '}
          연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연체한 적 있다 연 적
          있다 연체한 가나다라마바사아자차카타파하
        </span>
        <span css={subStyle}>100.0%(00)</span>
      </Grid>
      <ResponsiveContainer width="100%" height={50}>
        <BarChart layout="vertical" data={data} barSize={16}>
          <XAxis type="number" hide domain={[0, 100]} />
          <YAxis type="category" hide />
          <Bar dataKey="uv" background={{ fill: '#dcdcdc' }}>
            {data.map((entry, index) => (
              <Cell
                // onClick={e => handleClickIndex(e, detailIndex)}
                // onMouseOut={e => onMouseLeave(e)}
                // onMouseOver={e => onMouseOver(e, detailIndex)}
                cursor="pointer"
                fill={'#68A0F4'}
                radius={8}
                key={`cell-${index}-${entry.name}`}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default BarChartV2;

const titleBoxStyle = css`
  padding: 0 10px 4px 10px;
  align-items: center;
`;
const titleStyle = css`
  //margin-right: 16px;
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
