import React, { useEffect, useRef } from 'react';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

// Types
interface PropsType {
  type?: string;
  label: string;
  placeholder: string;
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
  placeholder = 'placeholder',
  register,
  errors,
  registerOptions,
  ...props
}: PropsType) => {
  // const inputFocus = useRef(null);
  //
  // useEffect(() => {
  //   if (inputFocus) {
  //     inputFocus?.current.focus();
  //   }
  // }, [inputFocus]);

  return (
    <div css={fragmentStyle}>
      <input
        // ref={inputFocus}
        type={type}
        autoComplete={'off'}
        css={inputStyle}
        placeholder={placeholder}
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
  border-radius: 4px;
  border: 1px solid ${colors.grey._3c};
  padding: 10px 24px;
  outline: none;
`;

const errorStyle = css`
  padding: 8px 0 0 8px;
  color: #ef3b7d;
  font-size: 12px;
`;
