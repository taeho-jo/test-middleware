import React from 'react';
// Styles
import { css } from '@emotion/react';

// Types
interface PropsType {
  width?: string;
  children: React.ReactNode;
  onSubmit: () => void;
}

const Form = ({ width = '100%', children, onSubmit }: PropsType) => {
  return (
    <form css={formStyle(width)} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;

const formStyle = width => css`
  width: ${width};
`;
