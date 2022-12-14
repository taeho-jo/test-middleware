import React, { useCallback, useState } from 'react';
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
import { updateTeamInfo } from '../../../store/reducers/teamReducer';
import { fetchRefreshToken } from '../../../api/authApi';
import { useRouter } from 'next/router';
import { clearCookies } from '../../../common/util/commonFunc';
import { getRefreshToken } from '../../../store/reducers/authReducer';

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
  // useEffect(() => {
  //   if (teamListData) {
  //
  //   }
  // }, [teamListData]);

  const { mutate, data: createTeamData } = useMutation('fetchCreateTeam', fetchCreateTeamApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        dispatch(getRefreshToken());
        mutate(sendObject);
        queryClient.invalidateQueries(['fetchRefreshToken']);
      }
      if (errorData.code === 'E0007') {
        clearCookies();
        router.push('/');
      } else {
        dispatch(showToast({ message: '??? ????????? ?????????????????????.', isShow: true, status: 'warning', duration: 5000 }));
      }
    },
  });

  const {
    data: teamListData,
    isLoading,
    refetch,
  } = useQuery(['fetchTeamList'], fetchTeamListApi, {
    enabled: !!createTeamData,
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        dispatch(getRefreshToken());
        queryClient.invalidateQueries(['fetchTeamList']);
      }
      if (errorData.code === 'E0007') {
        clearCookies();
        router.push('/');
      }
    },
    onSuccess: data => {
      const list = data?.data?.list;
      dispatch(updateTeamInfo(list));
      dispatch(showToast({ message: '??? ????????? ?????????????????????.', isShow: true, status: '', duration: 5000 }));
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
    // dispatch(showToast({ message: '????????? ????????? ????????????. ?????? ??????????????????!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: first ? '264px' : '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'????????????!'} closed={!first} />
        <ModalSubTitle subTitle={[`${first ? userInfo?.userName : `?????? ????????? ${userInfo?.userName}`}?????? ??? ????????? ??????????????????.`]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'??? ??????'}
            register={register}
            label={'team'}
            errors={errors}
            errorMsg={'??? ????????? ??????????????????. '}
            placeholder={`${userInfo?.userName}??? ???`}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
            }}
          />

          {first ? (
            <AnnouncementBox
              style={{ padding: '12px 16px' }}
              content={`<div>
                  ????????? ??? ????????? ???????????? ?????? ??????, <br />
                  ???????????? ??????????????? ?????? ????????????.
                </div>`}
            />
          ) : null}

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'????????????'} />
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
            text={'????????? ?????????.'}
          />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamCreateModal;
