import React from 'react';

// Styles
import { css } from '@emotion/react';
import { JustifyType } from '../../../common/types/commonTypes';

interface PropsType {
  children?: React.ReactNode;
  display?: 'block' | 'flex' | 'inline' | 'inline-block';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justify?: JustifyType;
  align?: string;
  direction?: 'row' | 'column';
  width?: string;
  height?: string;
  padding?: string;
  onClick?: (e?) => void;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  backgroundColor?: string;
  border?: string;
  radius?: string;
  shadow?: string;
  column?: string;
  row?: string;
  style?: any;
  // overflow?: any;
  [key: string]: any;
  // key?: string | number;
}

const calcWidthPercent = (span: any) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

const FlexBox = ({
  children,
  display = 'flex',
  justify = 'center',
  align = 'center',
  width = '100%',
  height = 'auto',
  padding = '0',
  direction = 'row',
  onClick,
  wrap = 'nowrap',
  border = 'none',
  xs,
  sm,
  md = 12,
  lg = 12,
  backgroundColor,
  radius,
  shadow,
  column,
  row,
  style,
  // overflow = 'auto',
  ...props
}: // key,
PropsType) => {
  return (
    <div
      // key={key}
      onClick={onClick}
      css={[
        flexBox(
          xs,
          sm,
          md,
          lg,
          backgroundColor,
          width,
          height,
          justify,
          align,
          padding,
          direction,
          display,
          border,
          wrap,
          radius,
          shadow,
          column,
          row,
          // overflow,
        ),
        style,
      ]}
      {...props}
    >
      {children}
    </div>
  );
};

export default FlexBox;

const flexBox = (
  xs,
  sm,
  md,
  lg,
  backgroundColor,
  width,
  height,
  justify,
  align,
  padding,
  direction,
  display,
  border,
  wrap,
  radius,
  shadow,
  column,
  row,
  // overflow,
) => css`
  box-sizing: border-box;
  height: ${height};
  justify-content: ${justify};
  align-items: ${align};
  padding: ${padding};
  flex-direction: ${direction};
  background: ${backgroundColor};
  display: ${display};
  border: ${border};
  flex-wrap: ${wrap};

  border-radius: ${radius};
  box-shadow: ${shadow};
  grid-column: ${column};
  grid-row: ${row};
  width: ${lg ? `${calcWidthPercent(lg)}%` : 'auto'};
  // @media only screen and (max-width: 1024px) {
  //   width: ${md ? `${calcWidthPercent(md)}%` : 'auto'};
  // }
`;
