import React from 'react';
import Label from '../../atoms/Label';
import Input from '../../atoms/Input';

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
  // watch?: any;
  onChangeStatus?: (status) => void;
  status?: boolean;
  disabled?: boolean;
  defaultValue?: string;
  registerOptions?: {
    [key: string]: any;
  };
  [key: string]: any;
}

const LabelInput = ({
  line = false,
  validation = true,
  type = 'text',
  placeholder,
  width = '100%',
  label,
  register,
  errorMsg,
  errors,
  // watch,
  registerOptions,
  onChangeStatus,
  status,
  defaultValue = '',
  disabled = false,
  labelText,
  ...props
}) => {
  return (
    <>
      <Label>{labelText}</Label>
      <Input
        register={register}
        label={label}
        errors={errors}
        errorMsg={errorMsg}
        placeholder={placeholder}
        registerOptions={registerOptions}
        onChangeStatus={onChangeStatus}
        status={status}
        disabled={disabled}
        line={line}
      />
    </>
  );
};

export default LabelInput;
