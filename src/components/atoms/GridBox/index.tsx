import React from 'react';
import { css } from '@emotion/react';

type ColumnsCountType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type gutterType = 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40;

interface PropsType {
  children: React.ReactNode;
  lg?: ColumnsCountType;
  md?: ColumnsCountType;
  sm?: ColumnsCountType;
  rows?: string;
  gutter?: gutterType;
  column?: string;
  gridType?: string;
  cardBoxSize?: number;
  [key: string]: any;
}

const GridBox = ({
  children,
  rows = '1fr',
  gutter = 4,
  lg = 1,
  md = 1,
  sm = 1,
  column,
  gridType = 'box',
  cardBoxSize,
  backgroundColor = '#fff',
  border = 'none',
  padding = '0',
  align,
  justify,
}: PropsType) => {
  return (
    <div css={gridBox(lg, md, sm, rows, gutter, column, gridType, cardBoxSize, backgroundColor, border, padding, align, justify)}>{children}</div>
  );
};

export default GridBox;

const gridBox = (lg, md, sm, rows, gutter, column, gridType, cardBoxSize, backgroundColor, border, padding, align, justify) => css`
  /*width: 100%;*/
  display: grid;
  padding: ${padding};
  background: ${backgroundColor};
  border: ${border};
  justify-items: ${justify};
  align-items: ${align};
  grid-column: ${column};
  grid-gap: ${gutter}px;
  //grid-template-rows: repeat(2, 1fr);
  ${gridType === 'list'
    ? `
    grid-template-columns: repeat(auto-fit,minmax(${cardBoxSize}px, 1fr));
  `
    : `
    grid-template-columns: repeat(${lg}, ${12 / lg}fr);
  @media only screen and (max-width: 1440px) {
    grid-template-columns: repeat(${md}, ${12 / md}fr);
  }
  @media only screen and (max-width: 1280px) {
    grid-template-columns: repeat(${sm}, ${12 / sm}fr);
  }
  `}
`;
