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
  direction?: 'row' | 'column';
  width?: string;
  height?: string;
  padding?: string;
  onClick?: () => void;
}

const FlexBox = ({
  children,
  justify = 'center',
  align = 'center',
  width = '100%',
  height = 'auto',
  padding = '10px 30px',
  direction = 'row',
  onClick,
}: PropsType) => {
  return (
    <div
      onClick={onClick}
      css={flexBox(width, height, justify, align, padding, direction)}
    >
      {children}
    </div>
  );
};

export default FlexBox;

const flexBox = (width, height, justify, align, padding, direction) => css`
  width: ${width};
  height: ${height};
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  padding: ${padding};
  flex-direction: ${direction};
`;
