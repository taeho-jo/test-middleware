import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import SearchInput from '../../atoms/SearchInput';
import IconTextButton from '../../atoms/Button/IconTextButton';
import MemberList from '../../template/MemberList';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
import { ReducerType } from '../../../store/reducers';
import TableDropDown from '../../atoms/TableDropDown';
import { useRouter } from 'next/router';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { showDialog } from '../../../store/reducers/commonReducer';
import { colors } from '../../../styles/Common.styles';
import {
  changeMemberPowerAction,
  getTeamMemberListAction,
  inviteTeamMemberEmailAction,
  removeTeamMemberAction,
  TeamMemberListType,
} from '../../../store/reducers/teamReducer';
import { INVITE_EMAIL_TEMPLATE } from '../../../common/util/commonVar';

const TeamMember = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = data => submitData('success', data);
  const onError = errors => console.log('fail', errors);

  const dispatch = useDispatch();
  const router = useRouter();
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const selectTeam = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const localSelectTeamSeq = localStorage.getItem('teamSeq');

  // const teamMemberList
  const teamMemberList = useSelector<ReducerType, TeamMemberListType>(state => state.team.teamMemberList);
  const teamMemberInfo = useSelector<ReducerType, any>(state => state.user.teamMemberInfo);

  const [searchText, setSearchText] = useState<string>('');
  const [positionValue, setPositionValue] = useState({
    x: 0,
    y: 0,
  });
  const [focus, setFocus] = useState<boolean>(false);
  const [teamRoleType, setTeamRoleType] = useState(null);
  const [dropDownList, setDropDownList] = useState({
    manager: [{ text: '멤버로 변경하기' }, { text: '우리 팀에서 내보내기' }],
    member: [{ text: '관리자로 변경하기' }, { text: '우리 팀에서 내보내기' }],
    invite: [{ text: '우리 팀에서 내보내기' }, { text: '초대 메일 다시 보내기' }],
    myRole: [{ text: '팀에서 나가기' }],
    myRoleManager: [{ text: '멤버로 변경하기' }, { text: '팀에서 나가기' }],
  });

  const submitData = useCallback(
    (status, data) => {
      setSearchText(data.search);
    },
    [searchText],
  );

  const handleChangeMemberStatus = useCallback(
    name => {
      if (name === '관리자로 변경하기' || name === '멤버로 변경하기') {
        // dispatch(isShow({ isShow: true, type: 'changeMemberAuth' }));
        const role = name === '관리자로 변경하기' ? '관리자' : '멤버';
        dispatch(
          showDialog({
            show: true,
            title: `${teamMemberInfo?.userName}님의\n권한을 변경하시겠어요?`,
            content: `${teamMemberInfo?.userName}님을\n${selectTeam?.teamNm}팀의 ${role}로 변경합니다.`,
            okButton: '변경하기',
            cancelButton: '취소하기',
            okButtonColor: colors.cyan._500,
            okFunction: () => dispatch(changeMemberPowerAction({ teamSeq: teamMemberInfo?.teamSeq, userId: teamMemberInfo?.userId })),
          }),
        );
      }
      if (name === '우리 팀에서 내보내기' || name === '팀에서 나가기') {
        dispatch(
          showDialog({
            show: true,
            title: `${teamMemberInfo?.userName}님의\n팀 목록에서 내보내시겠어요?`,
            content: `${teamMemberInfo?.userName}님을\n${selectTeam?.teamNm}팀에서 삭제합니다.`,
            okButton: '삭제하기',
            cancelButton: '취소하기',
            okButtonColor: colors.red,
            okFunction: () => dispatch(removeTeamMemberAction({ teamSeq: teamMemberInfo?.teamSeq, userId: teamMemberInfo?.userId })),
          }),
        );
      }
      if (name === '초대 메일 다시 보내기') {
        const sendObject = {
          teamSeq: teamMemberInfo?.teamSeq,
          inviteUserName: teamMemberInfo?.userName,
          emailTemplateName: INVITE_EMAIL_TEMPLATE,
          inviteMembers: [teamMemberInfo?.userId],
        };
        dispatch(
          showDialog({
            show: true,
            title: `${teamMemberInfo?.userName}님께\n초대 메일을 다시 보내시겠어요?`,
            content: `${teamMemberInfo?.userName}님이 가입하신 이메일로\n${selectTeam?.teamNm}팀의 초대 메일을 다시 전송합니다.`,
            okButton: '보내기',
            cancelButton: '취소하기',
            okButtonColor: colors.cyan._500,
            okFunction: () => dispatch(inviteTeamMemberEmailAction(sendObject)),
          }),
        );
      }
      if (name === '팀에서 나가기') {
        // dispatch(isShow({ isShow: true, type: 'withdrawalTeam' }));
        dispatch(
          showDialog({
            show: true,
            title: `팀에서 정말 나가시겠습니까?`,
            content: `${teamMemberInfo?.userName}님을\n${selectTeam?.teamNm}팀에서 삭제합니다.`,
            okButton: '나가기',
            cancelButton: '취소하기',
            okButtonColor: colors.red,
            okFunction: () => dispatch(removeTeamMemberAction({ teamSeq: teamMemberInfo?.teamSeq, userId: teamMemberInfo?.userId, callback:() => router.push('/') })),
          }),
        );
      }
      setFocus(false);
    },
    [teamMemberInfo, selectTeam],
  );

  const dropDownRef = useRef(null);

  useOutsideClick(dropDownRef, () => {
    setFocus(false);
  });

  // 팀 멤버 리스트 호출
  useEffect(() => {
    if (selectTeamSeq) {
      dispatch(getTeamMemberListAction(selectTeamSeq));
    }
  }, [selectTeamSeq]);

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
          forwardref={dropDownRef}
          handleChangeMemberStatus={handleChangeMemberStatus}
          display={focus}
          top={positionValue.y - 100}
          left={positionValue.x - 200}
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
          listData={teamMemberList?.list}
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
