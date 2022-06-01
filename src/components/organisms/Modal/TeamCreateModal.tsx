import React, { useCallback } from 'react';
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
import { isShow } from '../../../store/reducers/modalReducer';
import { ReducerType } from '../../../store/reducers';
import { useCreateTeamApi } from '../../../api/teamApi';
const TeamCreateModal = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleCreateTeam('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const createTeamMutation = useCreateTeamApi();

  const handleCreateTeam = useCallback((status, data) => {
    const sendObject = {
      teamNm: data.team,
    };
    createTeamMutation.mutate(sendObject);
  }, []);

  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const handleClickSkip = useCallback(() => {
    const sendObject = {
      teamNm: userInfo.userName,
    };
    createTeamMutation.mutate(sendObject);
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: '264px' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'반가워요!'} closed={false} />
        <ModalSubTitle subTitle={[`${userInfo.userName} 님의 팀 이름을 입력해주세요`]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'팀 이름'}
            register={register}
            label={'team'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={`${userInfo.userName}의 팀`}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
            }}
          />

          <AnnouncementBox
            content={
              <div>
                별도로 팀 이름을 입력하지 않을 경우, <br />
                회원님의 닉네임으로 팀이 생성돼요.
              </div>
            }
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'적용하기'} />
          </FlexBox>
        </Form>

        <FlexBox
          style={{ padding: '16px 24px', background: `${colors.grey._f7}`, borderRadius: '0 0 16px 16px' }}
          justify={'center'}
          align={'center'}
        >
          <TextButton onClick={handleClickSkip} textStyle={body3_medium} text={'다음에 할게요.'} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default TeamCreateModal;
