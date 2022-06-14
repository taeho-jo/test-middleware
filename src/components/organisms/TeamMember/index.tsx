import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import SearchInput from '../../atoms/SearchInput';
import IconTextButton from '../../atoms/Button/IconTextButton';
import MemberList from '../../template/MemberList';
import { css } from '@emotion/react';
import { useTeamMemberListApi } from '../../../api/teamApi';
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
import { ReducerType } from '../../../store/reducers';
import LayerPopup from '../../atoms/LayerPopup';

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

  const [searchText, setSearchText] = useState<string>('');

  const dispatch = useDispatch();

  const { data, isLoading, error } = useTeamMemberListApi();

  const submitData = useCallback(
    (status, data) => {
      console.log(data);
      setSearchText(data.search);
    },
    [searchText],
  );

  return (
    <>
      <PageTitle title={'팀원'} />
      <FlexBox justify={'space-between'} style={{ maxWidth: '800px', padding: '32px 40px 16px' }}>
        <Form width={'240px'} onSubmit={handleSubmit(onSubmit, onError)}>
          <SearchInput style={'240px'} placeholder={'팀원을 검색해주세요.'} register={register} label={'search'} errors={errors} />
        </Form>
        <IconTextButton
          onClick={() => dispatch(isShow({ isShow: true, type: 'teamMember' }))}
          name={'ACTION_ADD_SMALL'}
          iconPosition={'left'}
          textStyle={'custom'}
          text={'팀원 초대하기'}
        />
      </FlexBox>

      <div css={{ position: 'relative' }}>
        <MemberList isLoading={isLoading} listData={data?.data?.list} searchText={searchText} />
      </div>
    </>
  );
};

export default TeamMember;
const titleStyle = css`
  margin-bottom: 24px;
  display: block;
`;
