import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { isShow } from '../../../store/reducers/modalReducer';
import { useMutation, useQueryClient } from 'react-query';
import { fetchMemberAuthChangeApi } from '../../../api/teamApi';
import { fetchRefreshToken } from '../../../api/authApi';
import { showToast } from '../../../store/reducers/toastReducer';
import { useRouter } from 'next/router';
import { clearLocalStorage } from '../../../common/util/commonFunc';

const ChangeAuthModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const teamMemberInfo = useSelector<ReducerType, any>(state => state.user.teamMemberInfo);
  const selectTeam = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const teamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);

  const { mutate } = useMutation(['fetchChangeMemberAuth', teamMemberInfo.userId], () => fetchMemberAuthChangeApi(teamSeq, teamMemberInfo.userId), {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        mutate();
        queryClient.invalidateQueries(['fetchMemberList', teamSeq]);
      } else if (errorData.code === 'E0007') {
        clearLocalStorage();
        router.push('/');
      } else {
        dispatch(showToast({ message: errorData.message, isShow: true, status: 'warning', duration: 5000 }));
        dispatch(isShow({ isShow: false, type: '' }));
      }
    },
    onSuccess: data => {
      queryClient.invalidateQueries(['fetchMemberList', teamSeq]);
      dispatch(showToast({ message: '팀원 권한이 변경되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      dispatch(isShow({ isShow: false, type: '' }));
    },
  });

  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const handleChange = useCallback(() => {
    mutate();
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle
          style={{ height: 'auto', padding: '24px 32px' }}
          title={
            <>
              {teamMemberInfo?.userName}님의
              <br /> 권한을 변경하시겠어요?
            </>
          }
        />
        <ModalSubTitle
          subTitle={[
            <>
              {teamMemberInfo?.userName}님을
              <br /> {selectTeam?.teamNm}팀의 관리자로 변경합니다.
            </>,
          ]}
        />

        <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
          <BasicButton onClick={closeModal} theme={'dark'} text={'취소하기'} style={{ width: '160px', padding: '16px 52px' }} />
          <BasicButton onClick={handleChange} designBgColor={colors.red} text={'변경하기'} style={{ width: '160px', padding: '16px 52px' }} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ChangeAuthModal;
