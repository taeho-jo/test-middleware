import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';
import { useMutation, useQueryClient } from 'react-query';
import { fetchMemberRemoveApi } from '../../../api/teamApi';
import { showToast } from '../../../store/reducers/toastReducer';
import { useRouter } from 'next/router';

const WithdrawalTeamModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const teamMemberInfo = useSelector<ReducerType, any>(state => state.user.teamMemberInfo);
  const selectTeam = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const teamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  // ============ React Query ============ //
  const { mutate: removeMutate } = useMutation(['fetchMemberRemove', teamSeq], () => fetchMemberRemoveApi(teamSeq, teamMemberInfo?.userId), {
    onSuccess: data => {
      // queryClient.invalidateQueries(['fetchMemberList', teamSeq]);
      router.push('/admin/team');
      dispatch(showToast({ message: '팀에서 나왔습니다.', isShow: true, status: 'success', duration: 5000 }));
      dispatch(isShow({ isShow: false, type: '' }));
    },
  });
  // ============ React Query ============ //
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const handleChange = useCallback(() => {
    removeMutate();
  }, []);
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle
          style={{ height: 'auto', padding: '24px 32px' }}
          title={
            <>
              {/*{teamMemberInfo?.userName}님을*/}
              팀에서 정말 나가시겠습니까?
            </>
          }
        />
        <ModalSubTitle
          subTitle={[
            <>
              <strong>{teamMemberInfo?.userName}</strong>님을
              <br /> {selectTeam?.teamNm}팀에서 삭제합니다.
            </>,
          ]}
        />

        <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
          <BasicButton onClick={closeModal} theme={'dark'} text={'취소하기'} style={{ width: '160px', padding: '16px 52px' }} />
          <BasicButton onClick={handleChange} designBgColor={colors.red} text={'나가기'} style={{ width: '160px', padding: '16px 52px' }} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default WithdrawalTeamModal;
