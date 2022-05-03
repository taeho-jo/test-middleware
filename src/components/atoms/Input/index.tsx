import React, { InputHTMLAttributes, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { caption1_regular } from '../../../styles/FontStyles';
import { ReducerType } from '../../../store/reducers';

interface PropsType extends InputHTMLAttributes<HTMLInputElement> {
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  errorMsg?: string;
  errors?: object;
  watch?: any;
  validation?: boolean;
  type?: string;
  placeholder?: string;
  width?: string;
  label: string;
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
  type = 'text',
  placeholder,
  width = '100%',
  label,
  register,
  errorMsg,
  errors,
  watch,
  registerOptions,
  defaultValue = '',
  disabled = false,
  ...props
}: PropsType) => {
  // const modalType = useSelector<ReducerType, string>(state => state.modal.type);

  const [inputFocus, setInputFocus] = useState(false);

  const handleChangeFocusStatus = useCallback(
    status => {
      setInputFocus(status);
    },
    [inputFocus],
  );

  return (
    <>
      <input
        css={inputStyle(disabled, width)}
        type={type}
        autoComplete={'off'}
        placeholder={errors[label] ? errorMsg : placeholder}
        disabled={disabled}
        defaultValue={defaultValue}
        name={label}
        {...props}
        {...register(label, registerOptions)}
      />
    </>
  );
};
export default Input;

const inputStyle = (disabled, width) => css`
  box-sizing: border-box;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  color: ${colors.grey._3c};
  border-radius: 4px;
  border: 1px solid #3c3c46;
  padding: 10px 16px;
  width: ${width};
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: ${colors.grey._cc};
  }
  :focus {
    border: 2px solid #3c3c46;
    padding: 9px 16px;
  }
  :hover {
    border: 2px solid #24e1d5;
    padding: 9px 16px;
  }
  :invalid {
    border: 1px solid ${colors.red};
    color: ${colors.red};
    :hover {
      border: 1px solid ${colors.red};
      padding: 10px 16px;
    }
    ::placeholder {
      color: ${colors.red};
    }
  }
  :disabled {
    background: ${colors.grey._ec};
    cursor: not-allowed;
    :hover {
      border: 1px solid #3c3c46;
      padding: 10px 16px;
    }
  }
`;
