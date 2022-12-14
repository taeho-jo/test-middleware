import React, { useCallback, useEffect, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { colors } from '../../../styles/Common.styles';
import TextButton from '../../atoms/Button/TextButton';
import { body3_medium } from '../../../styles/FontStyles';
import { showToast } from '../../../store/reducers/toastReducer';
import { isShow } from '../../../store/reducers/modalReducer';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import SelectBox from '../../atoms/SelectBox';
import { fetchUserInfoUpdateApi } from '../../../api/userApi';
import withTokenAuth from '../../../hoc/withTokenAuth';
import { InputType } from '../../../common/types/commonTypes';
import Select from '../../atoms/Select';
import { useMutation } from 'react-query';
import { setUserInfo, updateUserProfile } from '../../../store/reducers/userReducer';
import CheckBox from '../../atoms/CheckBox';

const ProfileSettingFirst = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);

  // hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleUpdateUserInfo('success', data);
  const onError = errors => handleProcessingError('fail', errors);
  const [phoneNum, setPhoneNum] = useState('');
  const [selected, setSelected] = useState({
    funnelsCd: '',
    cpPosition: '',
    cpSize: '',
  });

  const changePhoneForm = value => {
    const phone = value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(\-{1,2})$/g, '');

    setPhoneNum(phone);
  };

  const handleUpdateUserInfo = useCallback(
    (status, data) => {
      const sendObject = {
        userName: data.userName ? data.userName : userInfo.userName,
        // TODO: 서버 운영에 배포 시, 함께 배포
        // phoneNumber: data.phoneNumber,
        funnelsType: selected.funnelsCd ? selected.funnelsCd : null,
        cpPositionType: selected.cpPosition ? selected.cpPosition : null,
        cpSizeType: selected.cpSize ? selected.cpSize : null,
        firstTimeYn: 'N',
        consentToUseMarketingYn: data.agree ? 'Y' : 'N',
      };
      console.log(sendObject);
      // TODO: 다 보내야 하는 지 체크 해보아야함.
      // for (const key in sendObject) {
      //   if (sendObject[key] === undefined || sendObject[key] === '' || sendObject[key] === null) {
      //     delete sendObject[key];
      //   }
      // }
      dispatch(updateUserProfile({ sendObject, callback: router }));
    },
    [selected],
  );
  const onClickValue = useCallback(
    (value, label) => {
      setSelected({
        ...selected,
        [label]: value,
      });
    },
    [selected],
  );

  const handleProcessingError = useCallback((status, errors) => {
    console.log(errors, 'ERRORS');
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px', height: '100%' }} justify={'flex-start'} direction={'column'}>
      <PopupBox padding={'0'} width={'434px'} height={'auto'}>
        <ModalTitle style={{ padding: '24px 32px 0' }} closed={false} title={`반가워요. ${userInfo?.userName} 님!`} titlePosition={'center'} />
        <ModalTitle
          whiteSpace={'nowrap'}
          style={{ padding: '5px 32px 24px' }}
          closed={false}
          title={`계정과 관련해서 몇 가지 질문드릴게요.`}
          titlePosition={'center'}
        />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'닉네임'}
            register={register}
            label={'userName'}
            errors={errors}
            // errorMsg={'필수 항목입니다.'}
            defaultValue={userInfo?.userName}
            placeholder={userInfo?.userName}
            style={{ marginBottom: '16px' }}
          />

          <AnnouncementBox
            style={{ padding: '12px 16px', marginBottom: '16px' }}
            content={`<div>
                닉네임을 입력하지 않을 경우,<br/>
                회원님의 이메일 계정으로 닉네임이 생성돼요.
              </div>`}
          />

          {/*TODO: 서버 운영에 배포 시, 함께 배포*/}
          {/*<Input*/}
          {/*  title={'휴대폰 번호(필수)'}*/}
          {/*  register={register}*/}
          {/*  label={'phoneNumber'}*/}
          {/*  errors={errors}*/}
          {/*  defaultValue={userInfo?.phoneNumber}*/}
          {/*  value={phoneNum}*/}
          {/*  maxlength="13"*/}
          {/*  placeholder={'휴대폰 번호를 입력해주세요.'}*/}
          {/*  style={{ marginBottom: '16px' }}*/}
          {/*  registerOptions={{*/}
          {/*    required: true,*/}
          {/*    onChange: e => changePhoneForm(e.target.value),*/}
          {/*    pattern: /^\d{3}-\d{3,4}-\d{4}$/,*/}
          {/*  }}*/}
          {/*/>*/}

          {/*<AnnouncementBox*/}
          {/*  style={{ padding: '12px 16px' }}*/}
          {/*  content={`<div>*/}
          {/*      휴대폰 번호는 '-'을 제외한 숫자만 입력해주세요.*/}
          {/*    </div>`}*/}
          {/*/>*/}

          <Select
            title={'맡고 계신 직무 (선택)'}
            options={commonCode?.CpPositionType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="cpPosition"
            onClick={onClickValue}
          />
          <Select
            title={'회사 규모 (선택)'}
            options={commonCode?.CpSizeType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="cpSize"
            onClick={onClickValue}
          />
          <Select
            title={'유입 경로 (선택)'}
            options={commonCode?.FunnelsType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="funnelsCd"
            onClick={onClickValue}
          />
          <CheckBox
            style={{ marginTop: '42px', marginBottom: '10px' }}
            inputName={'agree'}
            label={'프로모션 정보 수신에 동의합니다.(선택)'}
            register={register}
            errors={errors}
          />
          <AnnouncementBox
            style={{ padding: '12px 16px' }}
            content={`<div>
                Diby에서 제공하는 유저 리서치 관련 아티클을 포함한<br/>
                혜택 등 다양한 정보를 이메일로 받아보실 수 있습니다.
              </div>`}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'적용하기'} style={{ marginBottom: '18px' }} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

// export default withTokenAuth(ProfileSettingFirst, false);
export default ProfileSettingFirst;
