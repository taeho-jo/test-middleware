import React, { useCallback, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import Form from '../../atoms/Form';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Select from '../../atoms/Select';
import { updateUserProfile } from '../../../store/reducers/userReducer';
import { useRouter } from 'next/router';

const ProfileUpdateCpSize = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);

  const cpSizeType = commonCode?.CpSizeType;
  const userCpSize = userInfo?.cpSizeType;
  const currentCpSize = cpSizeType.filter(el => el.key === userCpSize);

  // hook form
  const { handleSubmit } = useForm<InputType>({});

  const onSubmit = data => handleUpdate('success', data);
  const onError = errors => console.log('fail', errors);

  const [selected, setSelected] = useState({
    cpSize: '',
  });

  const handleUpdate = useCallback(
    (status, data) => {
      const sendObject = {
        cpSizeType: selected.cpSize,
      };
      dispatch(updateUserProfile({ sendObject, callback: router, type: 'modify' }));
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

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox style={{ position: 'absolute', top: '96px', left: '40%' }} padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'회사 규모를 수정해요.'} />
        <ModalSubTitle subTitle={[`현재 회사 규모 : ${currentCpSize.length !== 0 ? currentCpSize[0].displayName : '설정 안됨'} `]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Select
            title={'회사 규모'}
            placeholder={'회사 규모를 선택해주세요.'}
            options={cpSizeType}
            selected={selected}
            setSelected={setSelected}
            name="cpSize"
            onClick={onClickValue}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'회사규모 수정하기'} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default ProfileUpdateCpSize;
