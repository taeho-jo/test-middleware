import React, { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import SearchInput from '../../atoms/SearchInput';
import IconTextButton from '../../atoms/Button/IconTextButton';
import MemberList from '../../template/MemberList';
import { css } from '@emotion/react';
import { fetchMemberListApi } from '../../../api/teamApi';
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
import { ReducerType } from '../../../store/reducers';
import { useQuery, useQueryClient } from 'react-query';
import TableDropDown from '../../atoms/TableDropDown';
import { useRouter } from 'next/router';
import { fetchRefreshToken } from '../../../api/authApi';
import { clearLocalStorage } from '../../../common/util/commonFunc';

const TeamMember = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => submitData('success', data);
  const onError = errors => console.log('fail', errors);

  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const localSelectTeamSeq = localStorage.getItem('teamSeq');
  const teamSeq = selectTeamSeq ? selectTeamSeq : localSelectTeamSeq;

  const [searchText, setSearchText] = useState<string>('');
  const [positionValue, setPositionValue] = useState({
    x: 0,
    y: 0,
  });
  const [focus, setFocus] = useState<boolean>(false);
  const [teamRoleType, setTeamRoleType] = useState(null);
  const [dropDownList, setDropDownList] = useState({
    manager: [
      { text: '멤버로 변경하기', onClick: null },
      { text: '우리 팀에서 내보내기', onClick: null },
    ],
    member: [
      { text: '관리자로 변경하기', onClick: null },
      { text: '우리 팀에서 내보내기', onClick: null },
    ],
    invite: [
      { text: '우리 팀에서 내보내기', onClick: null },
      { text: '초대 메일 다시 보내기', onClick: null },
    ],
    myRole: [{ text: '팀에서 나가기', onClick: null }],
    myRoleManager: [
      { text: '멤버로 변경하기', onClick: null },
      { text: '팀에서 나가기', onClick: null },
    ],
  });

  // ============ React Query ============ //
  const { data, isLoading, refetch } = useQuery(['fetchMemberList', teamSeq], () => fetchMemberListApi(teamSeq), {
    enabled: !!teamSeq,
    onError: (e: any) => {
      const errorData = e?.response?.data;
      // if (errorData.code === 'E0008') {
      //   queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
      //   queryClient.invalidateQueries(['fetchMemberList', teamSeq]);
      // }
      if (errorData.code === 'E0007') {
        clearLocalStorage();
        router.push('/');
      }
    },
  });

  // ============ React Query ============ //

  const submitData = useCallback(
    (status, data) => {
      setSearchText(data.search);
    },
    [searchText],
  );

  const handleChangeMemberStatus = useCallback(name => {
    console.log(name);
    if (name === '관리자로 변경하기' || name === '멤버로 변경하기') {
      dispatch(isShow({ isShow: true, type: 'changeMemberAuth' }));
    }
    if (name === '우리 팀에서 내보내기' || name === '팀에서 나가기') {
      dispatch(isShow({ isShow: true, type: 'removeMember' }));
    }
    if (name === '초대 메일 다시 보내기') {
      dispatch(isShow({ isShow: true, type: 'inviteMember' }));
    }
    if (name === '팀에서 나가기') {
      dispatch(isShow({ isShow: true, type: 'withdrawalTeam' }));
    }
  }, []);

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

      <div>
        <TableDropDown
          handleChangeMemberStatus={handleChangeMemberStatus}
          display={focus}
          top={positionValue.y + 10}
          left={positionValue.x - 120}
          normalText={
            teamRoleType === '멤버'
              ? dropDownList?.member
              : teamRoleType === '관리자'
              ? dropDownList?.manager
              : teamRoleType === 'myRole'
              ? dropDownList.myRole
              : teamRoleType === 'myRoleManager'
              ? dropDownList.myRoleManager
              : dropDownList.invite
          }
        />
        <MemberList
          isLoading={isLoading}
          listData={data?.data?.list}
          searchText={searchText}
          setFocus={setFocus}
          focus={focus}
          setPositionValue={setPositionValue}
          setTeamRoleType={setTeamRoleType}
        />
      </div>
    </>
  );
};

export default TeamMember;
const titleStyle = css`
  margin-bottom: 24px;
  display: block;
`;
