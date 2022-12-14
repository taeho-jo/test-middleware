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
        // TODO: ?????? ????????? ?????? ???, ?????? ??????
        // phoneNumber: data.phoneNumber,
        funnelsType: selected.funnelsCd ? selected.funnelsCd : null,
        cpPositionType: selected.cpPosition ? selected.cpPosition : null,
        cpSizeType: selected.cpSize ? selected.cpSize : null,
        firstTimeYn: 'N',
        consentToUseMarketingYn: data.agree ? 'Y' : 'N',
      };
      console.log(sendObject);
      // TODO: ??? ????????? ?????? ??? ?????? ???????????????.
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
        <ModalTitle style={{ padding: '24px 32px 0' }} closed={false} title={`????????????. ${userInfo?.userName} ???!`} titlePosition={'center'} />
        <ModalTitle
          whiteSpace={'nowrap'}
          style={{ padding: '5px 32px 24px' }}
          closed={false}
          title={`????????? ???????????? ??? ?????? ??????????????????.`}
          titlePosition={'center'}
        />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'?????????'}
            register={register}
            label={'userName'}
            errors={errors}
            // errorMsg={'?????? ???????????????.'}
            defaultValue={userInfo?.userName}
            placeholder={userInfo?.userName}
            style={{ marginBottom: '16px' }}
          />

          <AnnouncementBox
            style={{ padding: '12px 16px', marginBottom: '16px' }}
            content={`<div>
                ???????????? ???????????? ?????? ??????,<br/>
                ???????????? ????????? ???????????? ???????????? ????????????.
              </div>`}
          />

          {/*TODO: ?????? ????????? ?????? ???, ?????? ??????*/}
          {/*<Input*/}
          {/*  title={'????????? ??????(??????)'}*/}
          {/*  register={register}*/}
          {/*  label={'phoneNumber'}*/}
          {/*  errors={errors}*/}
          {/*  defaultValue={userInfo?.phoneNumber}*/}
          {/*  value={phoneNum}*/}
          {/*  maxlength="13"*/}
          {/*  placeholder={'????????? ????????? ??????????????????.'}*/}
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
          {/*      ????????? ????????? '-'??? ????????? ????????? ??????????????????.*/}
          {/*    </div>`}*/}
          {/*/>*/}

          <Select
            title={'?????? ?????? ?????? (??????)'}
            options={commonCode?.CpPositionType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="cpPosition"
            onClick={onClickValue}
          />
          <Select
            title={'?????? ?????? (??????)'}
            options={commonCode?.CpSizeType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="cpSize"
            onClick={onClickValue}
          />
          <Select
            title={'?????? ?????? (??????)'}
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
            label={'???????????? ?????? ????????? ???????????????.(??????)'}
            register={register}
            errors={errors}
          />
          <AnnouncementBox
            style={{ padding: '12px 16px' }}
            content={`<div>
                Diby?????? ???????????? ?????? ????????? ?????? ???????????? ?????????<br/>
                ?????? ??? ????????? ????????? ???????????? ???????????? ??? ????????????.
              </div>`}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'????????????'} style={{ marginBottom: '18px' }} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

// export default withTokenAuth(ProfileSettingFirst, false);
export default ProfileSettingFirst;
