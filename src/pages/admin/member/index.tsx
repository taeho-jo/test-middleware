import React, { useCallback, useState } from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import SearchInput from '../../../components/atoms/SearchInput';
import { useForm } from 'react-hook-form';
import Form from '../../../components/atoms/Form';
import SelectBox from '../../../components/atoms/SelectBox';
import RedirectLoading from '../../../components/atoms/RedirectLoading';
import FlexBox from '../../../components/atoms/FlexBox';
import { body2_bold } from '../../../styles/FontStyles';
import ResearchList from '../../../components/organisms/ResearchList';
import { css } from '@emotion/react';
import IconTextButton from '../../../components/atoms/Button/IconTextButton';

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
      <FlexBox style={{ padding: '24px 32px 32px' }} direction={'column'} align={'flex-start'} justify={'flex-start'}>
        <span css={[body2_bold, titleStyle]}>팀원</span>
        {/*<ResearchList listData={DummyListData} />*/}
        <FlexBox justify={'space-between'} style={{ maxWidth: '800px' }}>
          <Form width={'240px'} onSubmit={handleSubmit(onSubmit, onError)}>
            <SearchInput style={'240px'} placeholder={'팀원을 검색해주세요.'} register={register} label={'search'} errors={errors} />
          </Form>
          <IconTextButton name={'ACTION_ADD_SMALL'} iconPosition={'left'} textStyle={'custom'} text={'팀원 초대하기'} />
        </FlexBox>

        <FlexBox justify={'flex-start'} style={{ maxWidth: '800px' }}>
          asdfasdfasdfasdf
        </FlexBox>
      </FlexBox>

      {/*<Form onSubmit={handleSubmit(onSubmit, onError)}>*/}
      {/*  <SearchInput register={register} label={'search'} errors={errors} />*/}
      {/*  <SelectBox arr={selectBoxArr} selectedValue={selectedValue} onClick={onClickValue} />*/}
      {/*  <button type={'submit'}>xxx</button>*/}
      {/*</Form>*/}
      {/*<RedirectLoading />*/}
    </>
  );
};

export default withTokenAuth(Member, false);
const titleStyle = css`
  margin-bottom: 24px;
  display: block;
`;
