import React, { useState } from 'react';
// Libraries
import { useForm, Controller } from 'react-hook-form';
// Components
import Form from '../../atoms/Form';
import FormInput from '../../atoms/HooksForm/FormInput';
import FormInputLabel from '../../atoms/HooksForm/FormInputLabel';
import FormSelectBox from '../../atoms/HooksForm/FormSelectBox';
import FormRadio from '../../atoms/HooksForm/FormRadio';
import FormCheckBox from '../../atoms/HooksForm/FormCheckBox';
import FormCustomSelectBox from '../../atoms/HooksForm/FormCustomSelectBox';
import Button from '../../atoms/Button2';

const TestFormBox = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});

  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleCheckList = (value: string): void => {
    console.log(value, '함수안');
    if (checkedList.length === 0) {
      setCheckedList([value]);
    } else if (checkedList.includes(value)) {
      const filterArr = checkedList.filter(el => el !== value);
      setCheckedList(filterArr);
    } else if (!checkedList.includes(value)) {
      setCheckedList(prev => [...prev, value]);
    }
  };

  console.log(checkedList, 'checkedList');
  const aaa = data => {
    console.log(data, 'DATA');
    // handleCheckList(data);
  };

  return (
    <Form width={'600px'} onSubmit={handleSubmit(data => aaa(data))}>
      <FormCustomSelectBox />

      <FormInputLabel>Email</FormInputLabel>
      {/*<FormInput*/}
      {/*  label={'Email'}*/}
      {/*  register={register}*/}
      {/*  errors={errors}*/}
      {/*  watch={watch}*/}
      {/*  errorMsg={'이메일을 입력하세요.'}*/}
      {/*  registerOptions={{*/}
      {/*    required: true,*/}
      {/*    pattern:*/}
      {/*      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,*/}
      {/*  }}*/}
      {/*/>*/}

      <FormInputLabel>Password</FormInputLabel>
      {/*<FormInput*/}
      {/*  label={'Password'}*/}
      {/*  type={'password'}*/}
      {/*  register={register}*/}
      {/*  errors={errors}*/}
      {/*  watch={watch}*/}
      {/*  errorMsg={'번호를 입력하세요.'}*/}
      {/*  registerOptions={{*/}
      {/*    required: true,*/}
      {/*  }}*/}
      {/*/>*/}

      <FormInputLabel>Select Box</FormInputLabel>
      <FormSelectBox
        label={'gender'}
        registerOptions={{ required: true }}
        register={register}
        errors={errors}
        selectList={['male1', 'female2', 'other3']}
      />

      <FormInputLabel>Radio Button</FormInputLabel>
      <FormRadio
        register={register}
        radioList={[
          { name: 'weather', value: 'rain' },
          { name: 'weather', value: 'wind' },
          { name: 'weather', value: 'sun' },
          { name: 'weather', value: 'cloud' },
        ]}
      />

      <FormCheckBox
        register={register}
        checkboxList={[
          { name: 'weather1', value: 'rain' },
          { name: 'weather2', value: 'wind' },
          { name: 'weather3', value: 'sun' },
          { name: 'weather4', value: 'cloud' },
        ]}
        handleCheckList={handleCheckList}
        checkedList={checkedList}
      />

      <Button type={'submit'} />
    </Form>
  );
};

export default TestFormBox;
