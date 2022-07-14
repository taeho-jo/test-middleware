import React, { useCallback, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Select from '../../atoms/Select';
import { useMutation, useQueryClient } from 'react-query';
import { fetchUserInfoUpdateApi } from '../../../api/userApi';
import { setUserInfo } from '../../../store/reducers/userReducer';
import { isShow } from '../../../store/reducers/modalReducer';
import { showToast } from '../../../store/reducers/toastReducer';

const ProfileUpdateCpPositionModal = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);

  const { mutate } = useMutation('fetchUserInfoUpdate', fetchUserInfoUpdateApi, {
    onSuccess: data => {
      dispatch(setUserInfo(data.data));
      queryClient.invalidateQueries(['fetchUserInfo', 'layout']);
      dispatch(isShow({ isShow: false, type: '' }));
      dispatch(showToast({ message: '직무가 수정되었습니다.', isShow: true, status: 'success', duration: 5000 }));
    },
  });

  const cpPositionType = commonCode?.CpPositionType;
  const userCpPosition = userInfo.cpPositionType;
  const currentPosition = cpPositionType.filter(el => el.key === userCpPosition);
  console.log(userInfo);

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
      console.log(sendObject);
      mutate(sendObject);
    },
    [selected],
  );

  const onClickValue = useCallback(
    (value, label) => {
      console.log(value, label);
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
