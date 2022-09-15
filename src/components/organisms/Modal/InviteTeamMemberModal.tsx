import React, { useCallback, useEffect, useRef, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import TextButton from '../../atoms/Button/TextButton';
import { body3_medium } from '../../../styles/FontStyles';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { isShow } from '../../../store/reducers/modalReducer';
import { showToast } from '../../../store/reducers/toastReducer';
import TextArea from '../../atoms/TextArea';
import { emailRex } from '../../../common/regex';
import { fetchInviteMemberApi } from '../../../api/teamApi';
import { ReducerType } from '../../../store/reducers';
import { CURRENT_DOMAIN, INVITE_EMAIL_TEMPLATE } from '../../../common/util/commonVar';
import { useMutation, useQueryClient } from 'react-query';
import { fetchRefreshToken } from '../../../api/authApi';
import { useRouter } from 'next/router';
import { clearLocalStorage } from '../../../common/util/commonFunc';

interface PropsType {
  first?: boolean;
}
const InviteTeamMemberModal = ({ first = false }: PropsType) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const selectTeamSeq = useSelector<ReducerType, number | null>(state => state.team.selectTeamSeq);
  const localSelectTeamSeq = localStorage.getItem('teamSeq');
  const teamSeq = selectTeamSeq ? selectTeamSeq : localSelectTeamSeq;
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const [copyUrl, setCopyUrl] = useState<string | null>(`${CURRENT_DOMAIN}/admin/welcome?teamSeq=${teamSeq}`);

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
  } = useForm<InputType>({});

  const onSubmit = data => handleInvite('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const [sendObject, setSendObject] = useState(null);

  const { mutate } = useMutation(['fetchInviteMember'], fetchInviteMemberApi, {
    onError: (e: any) => {
      const errorData = e.response.data;
      // if (errorData.code === 'E0008') {
      //   queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
      //   mutate(sendObject);
      //   queryClient.invalidateQueries(['fetchInviteMember']);
      // } else
      if (errorData.code === 'E0007') {
        clearLocalStorage();
        router.push('/');
      } else {
        dispatch(showToast({ message: errorData.message, isShow: true, status: 'waring', duration: 5000 }));
      }
    },
    onSuccess: data => {
      dispatch(showToast({ message: '초대 메일을 발송하였습니다.', isShow: true, status: 'waring', duration: 5000 }));
      queryClient.invalidateQueries(['fetchMemberList', selectTeamSeq]);
      dispatch(isShow({ isShow: false, type: '' }));
    },
  });

  const handleInvite = useCallback(
    (status, data) => {
      const mailArr = data.email?.trim().split(/[, ]+/).join('\n').split('\n');
      const newMailArr = mailArr.filter(el => el.match(emailRex));

      const sendObject = {
        teamSeq: selectTeamSeq,
        inviteMembers: newMailArr,
        inviteUserName: userInfo?.userName,
        emailTemplateName: INVITE_EMAIL_TEMPLATE,
      };

      if (newMailArr.length === 0 || mailArr.length !== newMailArr.length) {
        dispatch(showToast({ message: '올바르지 않은 이메일 형식이 포함되어있습니다.', isShow: true, status: 'warning', duration: 5000 }));
      } else {
        setSendObject(sendObject);
        mutate(sendObject);
      }
    },
    [selectTeamSeq],
  );

  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const handleClickSkip = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      dispatch(showToast({ message: '초대 링크 복사 완료', isShow: true, status: 'success', duration: 5000 }));
    } catch (error) {
      dispatch(showToast({ message: '초대 링크 복사 실패', isShow: true, status: 'warning', duration: 5000 }));
    }
  };

  useEffect(() => {
    if (selectTeamSeq) {
      setValue('label', `${CURRENT_DOMAIN}/admin/welcome?teamSeq=${selectTeamSeq}`);
      setCopyUrl(`${CURRENT_DOMAIN}/admin/welcome?teamSeq=${selectTeamSeq}`);
    }
  }, [selectTeamSeq]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: first ? '264px' : '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'팀원 초대하기'} />
        <ModalSubTitle subTitle={['링크 또는 이메일로 팀원을 초대하세요!']} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            onClick={() => handleCopyClipBoard(copyUrl)}
            title={'링크 복사'}
            register={register}
            label={'label'}
            defaultValue={copyUrl}
            errors={errors}
            readOnly={true}
            style={{ marginBottom: '16px' }}
          />
          <AnnouncementBox style={{ marginBottom: '16px' }} content={`<div>링크를 클릭하면 복사가 돼요.</div>`} />
          <TextArea
            title={'이메일'}
            register={register}
            label={'email'}
            errors={errors}
            errorMsg={'이메일을 입력해주세요.'}
            placeholder={'이메일을 입력해주세요.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
            }}
          />

          <AnnouncementBox content={'연속 추가 시, 엔터키(줄바꿈)로 구분해요.'} />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton isLoading={false} theme={'dark'} type={'submit'} text={'초대하기'} />
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

export default InviteTeamMemberModal;
