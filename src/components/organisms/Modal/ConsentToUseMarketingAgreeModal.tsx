import React, { useEffect } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import Form from '../../atoms/Form';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { useForm } from 'react-hook-form';
import { updateUserProfile } from '../../../store/reducers/userReducer';
import CheckBox from '../../atoms/CheckBox';
import { useRouter } from 'next/router';

const ConsentToUseMarketingAgreeModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({});
  const onSubmit = data => handleUpdate('success', data);
  const onError = errors => console.log('fail', errors);

  const handleUpdate = (status, data) => {
    const sendObject = {
      consentToUseMarketingYn: data.agree ? 'Y' : 'N',
    };
    dispatch(updateUserProfile({ sendObject, callback: router, type: 'modify' }));
  };

  useEffect(() => {
    if (userInfo?.consentToUseMarketingYn === 'Y') {
      setValue('agree', true);
    }
  }, [userInfo]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'마케팅 수신 동의'} />
        <ModalSubTitle subTitle={[<>Diby에서 제공하는 유저 리서치 관련 아티클을 포함한 혜택 등 다양한 정보를 이메일로 받아보실 수 있습니다.</>]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <FlexBox>
            <CheckBox
              style={{ marginBottom: '12px' }}
              inputName={'agree'}
              label={'프로모션 정보 수신에 동의합니다.(선택)'}
              register={register}
              errors={errors}
            />
          </FlexBox>

          <FlexBox style={{ marginTop: '18px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'수정하기'} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default ConsentToUseMarketingAgreeModal;
