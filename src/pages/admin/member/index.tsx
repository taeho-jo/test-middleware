import React, { useCallback, useState } from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import SearchInput from '../../../components/atoms/SearchInput';
import { useForm } from 'react-hook-form';
import Form from '../../../components/atoms/Form';
import SelectBox from '../../../components/atoms/SelectBox';
import RedirectLoading from '../../../components/atoms/RedirectLoading';

interface IFormInput {
  iceCreamType: { label: string; value: string };
}

const Member = () => {
  const {
    register,
    handleSubmit,
    // setFocus,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => submitData('success', data);
  const onError = errors => console.log('fail', errors);

  const [selectedValue, setSelectedValue] = useState('');

  const onClickValue = useCallback(
    value => {
      setSelectedValue(value);
    },
    [selectedValue],
  );

  const submitData = useCallback(
    (status, data) => {
      const sendObject = {
        ...data,
        selectValue: selectedValue,
      };
      console.log(sendObject);
    },
    [selectedValue],
  );

  const selectBoxArr = [
    { value: '옵션 A', label: '옵션 A' },
    { value: '옵션 B', label: '옵션 B' },
    { value: '옵션 C', label: '옵션 C' },
    { value: '옵션 D', label: '옵션 D' },
    { value: '옵션 E', label: '옵션 E' },
  ];

  return (
    <>
      <div>가다나달마바사</div>

      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <SearchInput register={register} label={'search'} errors={errors} />
        <SelectBox arr={selectBoxArr} selectedValue={selectedValue} onClick={onClickValue} />
        <button type={'submit'}>xxx</button>
      </Form>
      {/*<RedirectLoading />*/}
    </>
  );
};

export default withTokenAuth(Member, false);
