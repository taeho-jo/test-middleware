import React from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { caption1_regular } from '../../../styles/FontStyles';
import { ReducerType } from '../../../store/reducers';

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
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
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
      {modalType === 'signup' && label === 'password1' ? (
        <span css={[caption1_regular, { color: colors.grey._99, margin: '9px 0 50px 0', display: 'inline-block' }]}>
          * 비밀번호는 문자+숫자 6자 이상 조합해주세요.
        </span>
      ) : null}

      {/*{errors[label] && <p css={errorStyle}>{errorMsg}</p>}*/}
    </>
  );
};
export default Input;

const inputStyle = (line, validation, status, disabled, width, marginBottom) => css`
  box-sizing: border-box;
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
  padding: 11px 16px;
  border-radius: 4px;
  `}
  font-weight: 700;
  font-size: 18px;
  color: ${!validation ? colors.red : colors.grey._3c};
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
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
