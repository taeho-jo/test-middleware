import React, { useCallback, useRef } from 'react';
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
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import { isShow } from '../../../store/reducers/modalReducer';
import { showToast } from '../../../store/reducers/toastReducer';
import TextArea from '../../atoms/TextArea';

const InviteTeamMemberModal = () => {
  const dispatch = useDispatch();
  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});

  const onSubmit = data => handleInvite('success', data);
  const onError = errors => handleProcessingError('fail', errors);

  const handleInvite = useCallback((status, data) => {
    const mailArr = data.email?.trim().split(/[, ]+/).join('\n').split('\n');
    const sendObject = {
      email: mailArr,
    };
  }, []);

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

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: '264px' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'팀원 초대하기'} />
        <ModalSubTitle subTitle={['링크 또는 이메일로 팀원을 초대하세요!']} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            onClick={() => handleCopyClipBoard('가나다라')}
            title={'링크 복사'}
            register={register}
            label={'link'}
            defaultValue={'https://www.diby.io/team/ganada...'}
            errors={errors}
            readOnly={true}
            style={{ marginBottom: '16px' }}
          />
          <AnnouncementBox style={{ marginBottom: '16px' }} content={<div>링크를 클릭하면 복사가 돼요.</div>} />
          {/*<Input*/}
          {/*  title={'이메일'}*/}
          {/*  register={register}*/}
          {/*  label={'email'}*/}
          {/*  errors={errors}*/}
          {/*  errorMsg={'필수 항목입니다.'}*/}
          {/*  placeholder={'이메일을 입력해주세요.'}*/}
          {/*  style={{ marginBottom: '16px' }}*/}
          {/*  registerOptions={{*/}
          {/*    required: true,*/}
          {/*    // onChange: e => updateLoginField('userId', e.target.value),*/}
          {/*    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,*/}
          {/*  }}*/}
          {/*/>*/}

          <TextArea
            title={'이메일'}
            register={register}
            label={'email'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'이메일을 입력해주세요.'}
            style={{ marginBottom: '16px' }}
            registerOptions={{
              required: true,
              // onChange: e => updateLoginField('userId', e.target.value),
              // pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
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
