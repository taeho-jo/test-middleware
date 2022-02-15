import React from 'react';

// Styles
import { css } from '@emotion/react';

interface PropsType {
  children: React.ReactNode;
  justify?:
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-start'
    | 'flex-end';
  align?: string;
  width?: string;
  height?: string;
  padding?: string;
}

const FlexBox = ({
  children,
  justify = 'center',
  align = 'center',
  width = '100%',
  height = 'auto',
  padding = '10px 30px',
}: PropsType) => {
  return (
    <div css={flexBox(width, height, justify, align, padding)}>{children}</div>
  );
};

export default FlexBox;

const flexBox = (width, height, justify, align, padding) => css`
  width: ${width};
  height: ${height};
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  padding: ${padding};
`;
