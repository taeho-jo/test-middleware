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

const ProfileUpdateCpPositionModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);

  const cpPositionType = commonCode?.CpPositionType;
  const userCpPosition = userInfo.cpPositionType;
  const currentPosition = cpPositionType.filter(el => el.key === userCpPosition);

  const { handleSubmit } = useForm<InputType>({});
  const onSubmit = data => handleUpdate('success', data);
  const onError = errors => console.log('fail', errors);

  const [selected, setSelected] = useState({
    cpPosition: '',
  });
  const handleUpdate = useCallback(
    (status, data) => {
      const sendObject = {
        cpPositionType: selected.cpPosition,
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
        <ModalTitle title={'직무를 수정해요.'} />
        <ModalSubTitle subTitle={[`현재 직무 : ${currentPosition.length !== 0 ? currentPosition[0].displayName : '설정 안됨'} `]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Select
            title={'직무'}
            placeholder={'직무를 선택해주세요.'}
            options={cpPositionType}
            selected={selected}
            setSelected={setSelected}
            name="cpPosition"
            onClick={onClickValue}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'직무 수정하기'} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default ProfileUpdateCpPositionModal;
