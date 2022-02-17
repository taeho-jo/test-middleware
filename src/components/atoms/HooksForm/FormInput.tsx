import React from 'react';
// Styles
import { css } from '@emotion/react';
import { commonStyles } from '../../../styles/Common.styles';
// Types
interface PropsType {
  type?: string;
  label: string;
  errorMsg: string;
  register: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  watch?: any;
  errors: object;
  registerOptions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const FormInput = ({
  type = 'text',
  label,
  errorMsg,
  register,
  errors,
  registerOptions,
  ...props
}: PropsType) => {
  return (
    <div css={fragmentStyle}>
      <input
        type={type}
        autoComplete={'off'}
        css={inputStyle}
        {...props}
        {...register(label, registerOptions)}
      />

      {errors[label] && <p css={errorStyle}>{errorMsg}</p>}
    </div>
  );
};

export default FormInput;

const fragmentStyle = css`
  margin-bottom: 10px;
`;
const inputStyle = css`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${commonStyles.colors.b_1};
  padding: 10px 12px;
  outline: none;
`;

const errorStyle = css`
  padding: 8px 0 0 8px;
  color: #ef3b7d;
  font-size: ${commonStyles.font.fs12};
`;
