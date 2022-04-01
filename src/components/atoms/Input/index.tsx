import React from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  line?: boolean;
  validation?: boolean;
  type?: string;
  placeholder?: string;
  width?: string;
  label: string;
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  errorMsg?: string;
  errors?: object;
  watch?: any;
  onChangeStatus?: (name, status) => void;
  status?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  registerOptions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const Input = ({
  line = false,
  validation = true,
  type = 'text',
  placeholder,
  width = '100%',
  label,
  register,
  errorMsg,
  errors,
  watch,
  registerOptions,
  onChangeStatus,
  status,
  defaultValue = '',
  disabled = false,
  marginBottom,
  ...props
}: PropsType) => {
  console.log(errors[label], 'input component');
  return (
    <>
      <input
        css={inputStyle(line, errors[label] ? false : true, status, disabled, width, marginBottom)}
        onFocus={onChangeStatus ? () => onChangeStatus(label, true) : () => console.log('Input Focus', label)}
        type={type}
        autoComplete={'off'}
        placeholder={errors[label] ? errorMsg : placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        name={label}
        {...props}
        {...register(label, registerOptions)}
      />
      {/*{errors[label] && <p css={errorStyle}>{errorMsg}</p>}*/}
    </>
  );
};
export default Input;

const inputStyle = (line, validation, status, disabled, width, marginBottom) => css`
  width: ${width};
  margin-bottom: ${marginBottom};
  outline: none;
  ${line
    ? `border: none;
    border-radius: 0;
    padding: 10px;
    border-bottom: ${!validation ? `2px solid ${colors.red}` : status ? `2px solid ${colors.grey._3c}` : `1px solid ${colors.grey._3c}`};
    `
    : `
  border: ${!validation ? `2px solid ${colors.red}` : status ? `2px solid ${colors.grey._3c}` : `1px solid ${colors.grey._3c}`};
  padding: 10px 24px;
  border-radius: 4px;
  `}
  font-weight: 700;
  color: ${!validation ? colors.red : colors.grey._3c};
  ::placeholder {
    color: ${!validation ? colors.red : colors.grey._cc};
  }
  :disabled {
    color: ${colors.grey._99};
    ${line
      ? `
      border-bottom: 1px solid ${colors.grey._3c}; 
      background: ${colors.white};
    `
      : `
      border: 1px solid ${colors.grey._99};
      background: ${colors.grey._ec};
    `}
  }
`;
