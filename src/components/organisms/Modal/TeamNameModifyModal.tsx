import React, {useCallback, useState} from 'react';
// Redux
import {useDispatch, useSelector} from 'react-redux';
// Components
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import Input from '../../atoms/Input';
import BasicButton from '../../atoms/Button/BasicButton';
import Form from '../../atoms/Form';
// libraries
import {useForm} from 'react-hook-form';
// Styles
// Types
import {InputType} from '../../../common/types/commonTypes';
import {ReducerType} from '../../../store/reducers';
import {fetchTeamListApi, fetchUpdateTeamApi} from '../../../api/teamApi';
import {isShow} from '../../../store/reducers/modalReducer';
import {QueryCache, useMutation, useQuery, useQueryClient} from 'react-query';
import {updateSelectTeamList, updateTeamInfo, updateTeamSeq} from '../../../store/reducers/teamReducer';
import {showToast} from '../../../store/reducers/toastReducer';
import {useRouter} from 'next/router';
import {clearLocalStorage} from '../../../common/util/commonFunc';
import {getRefreshToken} from '../../../store/reducers/authReducer';

interface PropsType {
  first?: boolean;
}

const TeamNameModifyModal = ({ first = false }: PropsType) => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const queryCache = new QueryCache({
    onError: error => {
      console.log(error);
    },
    // onSuccess: data => {
    //   console.log(data);
    // },
  });
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleUpdateTeam('success', data);
  const onError = errors => handleProcessingError('fail', errors);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const selectTeamSeq = useSelector<ReducerType, any>(state => state.team.selectTeamSeq);
  const router = useRouter();

  const [sendObject, setSendObject] = useState(null);

  // ============ React Query ============ //
  const { mutate, data: updateData } = useMutation(['fetchUpdateTeam'], fetchUpdateTeamApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        dispatch(getRefreshToken());
        queryClient.invalidateQueries(['fetchUpdateTeam']);
        mutate([selectTeamSeq, sendObject]);
      }
      if (errorData.code === 'E0007') {
        clearLocalStorage();
        router.push('/');
      }
    },
  });

  const { data: teamListData, isLoading } = useQuery(['fetchTeamList', updateData?.code], fetchTeamListApi, {
    enabled: !!updateData?.code,
    onSuccess: data => {
      const list = data?.data?.list;
      const currentTeam = list.find(item => item.teamSeq === selectTeamSeq);

      dispatch(updateTeamInfo(list));
      dispatch(updateSelectTeamList(currentTeam));
      dispatch(updateTeamSeq(currentTeam?.teamSeq));
      dispatch(showToast({ message: '팀 명이 수정되었습니다.', isShow: true, status: 'success', duration: 5000 }));
      dispatch(isShow({ isShow: false, type: '' }));
    },
  });
  // ============ React Query ============ //

  const handleUpdateTeam = useCallback((status, data) => {
    const sendObject = {
      teamNm: data.team,
    };
    setSendObject(sendObject);
    const sendArr = [selectTeamSeq, sendObject];
    mutate(sendArr);
  }, []);

  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: first ? '264px' : '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'팀 이름을 수정해요.'} closed={!first} />
        <ModalSubTitle subTitle={[`현재 팀 이름 : ${selectTeamList ? selectTeamList.teamNm : ''} `]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'팀 이름'}
            register={register}
            label={'team'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'새로운 팀 이름을 입력해주세요.'}
            defaultValue={selectTeamList ? selectTeamList.teamNm : ''}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
            }}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'팀 이름 수정하기'} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamNameModifyModal;
