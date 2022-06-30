import React, { useCallback, useEffect, useState } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Components
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import Input from '../../atoms/Input';
import BasicButton from '../../atoms/Button/BasicButton';
import Form from '../../atoms/Form';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import TextButton from '../../atoms/Button/TextButton';
// libraries
import { useForm } from 'react-hook-form';
// Styles
import { colors } from '../../../styles/Common.styles';
import { body3_medium } from '../../../styles/FontStyles';
// Types
import { InputType } from '../../../common/types/commonTypes';
import { ReducerType } from '../../../store/reducers';
import { fetchCreateTeamApi, fetchTeamListApi } from '../../../api/teamApi';
import { isShow } from '../../../store/reducers/modalReducer';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { showToast } from '../../../store/reducers/toastReducer';
import { updateQueryStatus } from '../../../store/reducers/useQueryControlReducer';
import { updateTeamInfo } from '../../../store/reducers/teamReducer';
import { fetchRefreshToken } from '../../../api/authApi';
import { useRouter } from 'next/router';
interface PropsType {
  first?: boolean;
}
const TeamCreateModal = ({ first = false }: PropsType) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  // const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleCreateTeam('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [sendObject, setSendObject] = useState(null);

  // ============ React Query ============ //
  const {
    data: teamListData,
    isLoading,
    refetch,
  } = useQuery(['fetchTeamList'], fetchTeamListApi, {
    enabled: false,
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        queryClient.invalidateQueries(['fetchTeamList']);
      }
      if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      }
    },
    // onSuccess: data => {
    //   const list = data?.data?.list;
    //   dispatch(updateTeamInfo(list));
    // },
  });

  useEffect(() => {
    if (teamListData) {
      const list = teamListData?.data?.list;
      dispatch(updateTeamInfo(list));
    }
  }, [teamListData]);

  const { mutate, data: createTeamData } = useMutation('fetchCreateTeam', fetchCreateTeamApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        mutate(sendObject);
        queryClient.invalidateQueries(['fetchRefreshToken']);
      } else if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      } else {
        dispatch(showToast({ message: '팀 생성에 실패하였습니다.', isShow: true, status: 'warning', duration: 5000 }));
      }
    },
    onSuccess: data => {
      refetch();
      dispatch(showToast({ message: '팀 생성이 완료되었습니다.', isShow: true, status: '', duration: 5000 }));
      first ? dispatch(isShow({ isShow: true, type: 'inviteTeamMember' })) : dispatch(isShow({ isShow: false, type: '' }));
    },
  });
  // ============ React Query ============ //

  const handleCreateTeam = useCallback((status, data) => {
    const sendObject = {
      teamNm: data.team,
    };
    setSendObject(sendObject);
    mutate(sendObject);
  }, []);

  const handleClickSkip = useCallback(() => {
    const sendObject = {
      teamNm: userInfo?.userName,
    };
    mutate(sendObject);
  }, [userInfo]);

  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: first ? '264px' : '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'반가워요!'} closed={!first} />
        <ModalSubTitle subTitle={[`${first ? userInfo?.userName : '새로 만드실'} 님의 팀 이름을 입력해주세요`]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'팀 이름'}
            register={register}
            label={'team'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={`${userInfo?.userName}의 팀`}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
            }}
          />

          {first ? (
            <AnnouncementBox
              content={`<div>
                  별도로 팀 이름을 입력하지 않을 경우, <br />
                  회원님의 닉네임으로 팀이 생성돼요.
                </div>`}
            />
          ) : null}

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'적용하기'} />
          </FlexBox>
        </Form>

        <FlexBox
          style={{ padding: '16px 24px', background: `${colors.grey._f7}`, borderRadius: '0 0 16px 16px' }}
          justify={'center'}
          align={'center'}
        >
          <TextButton
            onClick={first ? handleClickSkip : () => dispatch(isShow({ isShow: false, type: '' }))}
            textStyle={body3_medium}
            text={'다음에 할게요.'}
          />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamCreateModal;
