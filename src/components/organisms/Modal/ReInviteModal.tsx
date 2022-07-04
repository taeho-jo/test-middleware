import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { fetchInviteMemberApi, fetchMemberRemoveApi } from '../../../api/teamApi';
import { showToast } from '../../../store/reducers/toastReducer';
import { isShow } from '../../../store/reducers/modalReducer';
import { INVITE_EMAIL_TEMPLATE } from '../../../common/util/commonVar';

const ReInviteModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const teamMemberInfo = useSelector<ReducerType, any>(state => state.user.teamMemberInfo);
  const selectTeam = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const teamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  // ============ React Query ============ //
  const { mutate: inviteMutate } = useMutation(['fetchInviteMember', teamSeq], fetchInviteMemberApi, {
    onSuccess: data => {
      queryClient.invalidateQueries(['fetchMemberList', teamSeq]);
      dispatch(
        showToast({ message: `${teamMemberInfo?.userName}님에게 초대 메일을 다시 전송하였습니다.`, isShow: true, status: 'success', duration: 5000 }),
      );
      dispatch(isShow({ isShow: false, type: '' }));
    },
  });
  // ============ React Query ============ //
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const handleChange = useCallback(() => {
    const sendObject = {
      teamSeq: teamSeq,
      inviteUserName: teamMemberInfo?.userName,
      emailTemplateName: INVITE_EMAIL_TEMPLATE,
      inviteMembers: [teamMemberInfo?.userId],
    };
    inviteMutate(sendObject);
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle
          style={{ height: 'auto', padding: '24px 32px' }}
          title={
            <>
              {teamMemberInfo?.userName}님께
              <br /> 초대 메일을 다시 보내시겠어요?
            </>
          }
        />
        <ModalSubTitle
          subTitle={[
            <>
              {teamMemberInfo?.userName}님이 가입하신 이메일로
              <br /> {selectTeam?.teamNm}팀의 초대 메일을 다시 전송합니다.
            </>,
          ]}
        />

        <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
          <BasicButton onClick={closeModal} theme={'dark'} text={'취소하기'} style={{ width: '160px', padding: '16px 52px' }} />
          <BasicButton onClick={handleChange} designBgColor={colors.red} text={'보내기'} style={{ width: '160px', padding: '16px 52px' }} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ReInviteModal;
