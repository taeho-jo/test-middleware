import React from 'react';
// Styles
import { css } from '@emotion/react';

// Types
interface PropsType {
  width?: string;
  children: React.ReactNode;
  onSubmit: () => void;
  style?: any;
  [key: string]: any;
}

const Form = ({ width = '100%', children, onSubmit, style, ...props }: PropsType) => {
  return (
    <form css={[formStyle(width), { ...style }]} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;

const formStyle = width => css`
  width: ${width};
`;
