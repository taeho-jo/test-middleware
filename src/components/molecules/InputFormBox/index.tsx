import React, { useCallback, useState } from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';
import Form from '../../atoms/Form';
import { useForm } from 'react-hook-form';

interface InputType {
  label: string;
  placeholder: string;
  type: string;
  pattern: RegExp;
  errorMsg: string;
}

interface PropsType {
  inputArr: InputType[];
  btnText: string;
  padding?: string;
  handleSignUp?: (data) => void;
}

const InputFormBox = ({ handleSignUp, inputArr, btnText, padding = '0' }: PropsType) => {
  const [inputFocus, setInputFocus] = useState(null);

  const {
    register,
    handleSubmit,
    // setFocus,
    formState: { errors },
  } = useForm({});
  const onSubmit = data => handleSignUp(data);
  const onError = errors => handleSignUp(errors);

  const handleChangeInputFocus = useCallback(
    (name, status) => {
      setInputFocus({
        [name]: status,
      });
    },
    [inputFocus],
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <div style={{ padding: padding }}>
        {inputArr.map((el, index) => {
          return (
            <Input
              type={el.type}
              onChangeStatus={handleChangeInputFocus}
              key={index}
              marginBottom={index === inputArr.length - 1 ? '32px' : '16px'}
              register={register}
              errors={errors}
              label={el.label}
              placeholder={el.placeholder}
              errorMsg={el.errorMsg}
              status={inputFocus?.[el.label]}
              registerOptions={{
                required: true,
                pattern: el.pattern,
                onBlur: () => setInputFocus(null),
              }}
            />
          );
        })}
        <Button full={true} btnText={btnText} type={'submit'} />
      </div>
    </Form>
  );
};

export default InputFormBox;
