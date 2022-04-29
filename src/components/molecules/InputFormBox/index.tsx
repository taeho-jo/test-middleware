import React, { useCallback, useState } from 'react';
import Input from '../../atoms/Input';
import CheckBox from '../../atoms/CheckBox';
import Button from '../../atoms/Button';
import Form from '../../atoms/Form';
import { useForm } from 'react-hook-form';
import { InputType } from '../../organisms/AddInfoPopup';
import { ColorsType } from '../../../common/types/commonTypes';

interface PropsType {
  inputArr: InputType[];
  btnText: string;
  padding?: string;
  handleSignUp?: (status, data) => void;
  btnTextColor?: string;
  modalType?: string;
  btnBackColor?: ColorsType;
}

const InputFormBox = ({ handleSignUp, inputArr, btnText, padding = '0', btnTextColor, modalType = 'login', btnBackColor }: PropsType) => {
  const [inputFocus, setInputFocus] = useState(null);

  const {
    register,
    handleSubmit,
    // setFocus,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleSignUp('success', data);
  const onError = errors => handleSignUp('fail', errors);

  const handleChangeInputFocus = useCallback(
    (name, status) => {
      setInputFocus({
        [name]: status,
      });
    },
    [inputFocus],
  );

  const marginCalc = useCallback((modalType, label) => {
    if (label === 'password') {
      if (modalType === 'login') {
        return '32px';
      } else if (modalType === 'signup') {
        return 0;
      } else {
        return '16px';
      }
    } else if (label === 'password1') {
      return 0;
    } else {
      return '16px';
    }
  }, []);

  const firstCheckboxLabel = `Diby
  <a href='/feature' rel="noopener noreferrer" target="_blank" style="textDecoration:underline !important;cursor: pointer;color: ${
    errors['term'] ? '#fe4e56' : '#3c3c46'
  };">이용 약관</a>
  과
  <a href='/' rel="noopener noreferrer" target="_blank" style="textDecoration:underline !important;cursor: pointer;color: ${
    errors['term'] ? '#fe4e56' : '#3c3c46'
  };">개인 정보처리 방침</a>
  에 동의합니다.
  `;
  const secondsCheckboxLabel = 'Diby에서 발행하는 UX / CX 아티클과<br/>연구자료 받아볼게요.';
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <div style={{ padding: padding }}>
        {inputArr.map((el, index) => {
          return (
            <Input
              line={el.line ? el.line : false}
              type={el.type}
              onChangeStatus={handleChangeInputFocus}
              key={index}
              marginBottom={marginCalc(modalType, el.label)}
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
              data={'asdfasdfasdfasdfasdf'}
            />
          );
        })}

        {modalType === 'signup' && (
          <>
            <CheckBox register={register} inputName={'term'} label={firstCheckboxLabel} errors={errors} registerOptions={{ required: true }} />
            <CheckBox
              style={{ marginTop: '19px', marginBottom: '40px' }}
              register={register}
              inputName={'article'}
              label={secondsCheckboxLabel}
              errors={errors}
              registerOptions={{ required: true }}
            />
          </>
        )}

        <Button btnTextColor={btnTextColor} backgroundColor={btnBackColor} full={true} btnText={btnText} type={'submit'} />
      </div>
    </Form>
  );
};

export default InputFormBox;
