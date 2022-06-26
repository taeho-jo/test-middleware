import React, { useCallback, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import TextArea from '../../atoms/TextArea';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import TextButton from '../../atoms/Button/TextButton';
import { body3_medium } from '../../../styles/FontStyles';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { emailRex } from '../../../common/regex';
import { INVITE_EMAIL_TEMPLATE } from '../../../common/util/commonVar';
import { showToast } from '../../../store/reducers/toastReducer';
import { useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReducerType } from '../../../store/reducers';
const CURRENT_DOMAIN = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : process.env.NEXT_PUBLIC_DOMAIN;
const ShareReportModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const selectTeamSeq = useSelector<ReducerType, number | null>(state => state.team.selectTeamSeq);
  const reportViewId = useSelector<ReducerType, string>(state => state.report.reportViewId);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  const [copyUrl, setCopyUrl] = useState<string | null>(`${CURRENT_DOMAIN}/admin/report/share/?teamSeq=${reportViewId}`);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleInvite('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const handleInvite = useCallback((status, data) => {
    const mailArr = data.email?.trim().split(/[, ]+/).join('\n').split('\n');
    const newMailArr = mailArr.filter(el => el.match(emailRex));

    const sendObject = {
      teamSeq: selectTeamSeq,
      inviteMembers: newMailArr,
      inviteUserName: userInfo?.userName,
      emailTemplateName: INVITE_EMAIL_TEMPLATE,
    };

    // if (newMailArr.length === 0) {
    //   dispatch(showToast({ message: '메일 주소 형식을 확인 바랍니다.', isShow: true, status: 'warning', duration: 5000 }));
    // } else {
    //   setSendObject(sendObject);
    //   mutate(sendObject);
    // }
  }, []);

  const handleProcessingError = useCallback((status, errors) => {
    // dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
  }, []);

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      dispatch(showToast({ message: '초대 링크 복사 완료', isShow: true, status: 'success', duration: 5000 }));
    } catch (error) {
      dispatch(showToast({ message: '초대 링크 복사 실패', isShow: true, status: 'warning', duration: 5000 }));
    }
  };

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'리포트 공유하기'} />
        <ModalSubTitle subTitle={['링크를 복사하여, 리포트를 공유하세요!']} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            onClick={() => handleCopyClipBoard(copyUrl)}
            title={'링크 복사'}
            register={register}
            label={'link'}
            defaultValue={copyUrl}
            errors={errors}
            readOnly={true}
            style={{ marginBottom: '16px' }}
          />
          <AnnouncementBox style={{ marginBottom: '16px' }} content={<div>링크를 클릭하면 복사가 돼요.</div>} />
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default ShareReportModal;
