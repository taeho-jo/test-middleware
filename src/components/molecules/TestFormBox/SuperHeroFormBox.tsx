import React from 'react';
import FormInputLabel from '../../atoms/HooksForm/FormInputLabel';
import FormInput from '../../atoms/HooksForm/FormInput';
import Button from '../../atoms/Button';
import Form from '../../atoms/Form';
import { useForm } from 'react-hook-form';

interface PropsType {
  insertSuperHero: (data) => void;
}

const SuperHeroFormBox = ({ insertSuperHero }: PropsType) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});
  return (
    <Form
      width={'600px'}
      onSubmit={handleSubmit(data => insertSuperHero(data))}
    >
      <FormInputLabel>SuperHero</FormInputLabel>
      <FormInput
        label={'superHero'}
        register={register}
        errors={errors}
        errorMsg={'슈퍼 히어로의 이름을 입력하세요.'}
      />
      <Button type={'submit'} />
    </Form>
  );
};
export default SuperHeroFormBox;
