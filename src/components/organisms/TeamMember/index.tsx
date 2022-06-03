import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import SearchInput from '../../atoms/SearchInput';
import IconTextButton from '../../atoms/Button/IconTextButton';
import MemberList from '../../template/MemberList';
import { css } from '@emotion/react';
import { useTeamMemberListApi } from '../../../api/teamApi';

interface IFormInput {
  iceCreamType: { label: string; value: string };
}
const DummyData = [
  {
    userId: '#taeho.jo@dbdlab.io',
    userName: '조태호',
    joinDate: '#2022.05.31',
    authority: '관리자',
  },
  {
    userId: '#jotang@gmail.com',
    userName: '누구?',
    joinDate: '#2022.12.31',
    authority: '멤버',
  },
  {
    userId: '#jotang3726@gmail.com',
    userName: 'Jotang',
    joinDate: '#2022.10.31',
    authority: '멤버',
  },
  {
    userId: '#dbdlab@dbdlab.io',
    userName: 'DBDLAB',
    joinDate: '#2022.07.31',
    authority: '멤버',
  },
  {
    userId: '#test00001@gmail.com',
    userName: 'tester',
    joinDate: '#2022.08.31',
    authority: '멤버',
  },
  {
    userId: '#taeho.jo@dbdlab.io',
    userName: '조태호',
    joinDate: '#2022.05.31',
    authority: '관리자',
  },
  {
    userId: '#jotang@gmail.com',
    userName: '누구?',
    joinDate: '#2022.12.31',
    authority: '멤버',
  },
  {
    userId: '#jotang3726@gmail.com',
    userName: 'Jotang',
    joinDate: '#2022.10.31',
    authority: '멤버',
  },
  {
    userId: '#dbdlab@dbdlab.io',
    userName: 'DBDLAB',
    joinDate: '#2022.07.31',
    authority: '멤버',
  },
  {
    userId: '#test00001@gmail.com',
    userName: 'tester',
    joinDate: '#2022.08.31',
    authority: '멤버',
  },
];

const TeamMember = () => {
  const {
    register,
    handleSubmit,
    // setFocus,
    control,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => submitData('success', data);
  const onError = errors => console.log('fail', errors);

  const { data, isLoading, error } = useTeamMemberListApi();
  console.log(data, 'adfads');

  const submitData = useCallback((status, data) => {
    console.log(data);
  }, []);

  return (
    <>
      <PageTitle title={'팀원'} />
      <FlexBox justify={'space-between'} style={{ maxWidth: '800px', padding: '32px 40px 16px' }}>
        <Form width={'240px'} onSubmit={handleSubmit(onSubmit, onError)}>
          <SearchInput style={'240px'} placeholder={'팀원을 검색해주세요.'} register={register} label={'search'} errors={errors} />
        </Form>
        <IconTextButton name={'ACTION_ADD_SMALL'} iconPosition={'left'} textStyle={'custom'} text={'팀원 초대하기'} />
      </FlexBox>

      <div>
        <MemberList isLoading={isLoading} listData={data?.data.list} />
      </div>
    </>
  );
};

export default TeamMember;
const titleStyle = css`
  margin-bottom: 24px;
  display: block;
`;
