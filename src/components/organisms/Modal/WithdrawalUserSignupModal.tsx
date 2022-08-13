import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import FlexBox from '../../atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';

const WithdrawalUserSignupModal = () => {
  const dispatch = useDispatch();
  const errorMsg = useSelector<ReducerType, string>(state => state.user.errorMessage);
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle title={'계정 삭제가 진행중인\n계정입니다.'} />

        <ModalSubTitle subTitle={[<>{errorMsg}</>]} />

        <ConfirmPopupNextStepBtn
          onClick={() => dispatch(isShow({ isShow: true, type: 'login' }))}
          title={''}
          btnText={'로그인 하기'}
          // style={{ padding: '0 40px 40px' }}
        />
      </PopupBox>
    </FlexBox>
  );
};

export default WithdrawalUserSignupModal;
