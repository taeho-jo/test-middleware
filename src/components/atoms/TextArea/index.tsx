import React, { InputHTMLAttributes } from 'react';
import { caption1_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType extends InputHTMLAttributes<HTMLTextAreaElement> {
  register?: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  errorMsg?: string;
  errors?: object;
  // watch?: any;
  validation?: boolean;
  type?: string;
  placeholder?: string;
  width?: string;
  label: string;
  disabled?: boolean;
  style?: any;
  title?: string;
  onClick?: () => void;
  // defaultValue?: string;
  registerOptions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const TextArea = ({
  type = 'text',
  placeholder,
  width = '100%',
  label,
  register,
  errorMsg,
  errors,
  // watch,
  registerOptions,
  disabled = false,
  style,
  title,
  // defaultValue,
  ...props
}: PropsType) => {
  return (
    <>
      {title ? <label css={[caption1_bold, labelTextStyle(errors[label]), { ...props.titleStyle }]}>{title}</label> : null}

      <textarea
        css={[inputStyle(disabled, width, errors[label]), { ...style }]}
        autoComplete={'off'}
        placeholder={errors[label] ? errorMsg : placeholder}
        disabled={disabled}
        id={label}
        name={label}
        {...props}
        {...register(label, registerOptions)}
      />
    </>
  );
};

export default TextArea;

const inputStyle = (disabled, width, error) => css`
  box-sizing: border-box;
  outline: none;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  padding: 10px 16px;
  resize: none;
  color: ${colors.grey._3c};
  width: ${width};
  height: 88px;
  ::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }
  :focus {
    font-weight: 700;
    border: 2px solid ${colors.grey._3c};
    padding: 9px 14px;
  }
  :hover {
    border: 2px solid ${colors.cyan._500};
    padding: 9px 16px;
  }
  :invalid {
    border: 1px solid ${colors.red};
    color: ${colors.red};
    :hover {
      border: 1px solid ${colors.red};
      padding: 10px 16px;
    }
    :focus {
      padding: 10px 16px;
    }
    ::placeholder {
      color: ${colors.red};
    }
  }
  :disabled {
    background: ${colors.grey._ec};
    cursor: not-allowed;
    color: ${colors.grey._99};
    :hover {
      border: 1px solid #3c3c46;
      padding: 10px 16px;
    }
  }
  ${!error &&
  css`
    border: 1px solid #3c3c46;
    ::placeholder {
      color: ${colors.grey._cc};
    }
  `}
  ${error &&
  css`
    border: 1px solid ${colors.red};
    color: red;
    :focus {
      border: 2px solid ${colors.red};
    }
    ::placeholder {
      color: ${colors.red};
    }
  `}
`;

const labelTextStyle = error => css`
  margin-bottom: 8px;
  display: inline-block;
  ${!error &&
  css`
    color: ${colors.grey._99};
  `}
  ${error &&
  css`
    color: ${colors.red};
  `}
`;
