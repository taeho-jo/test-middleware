import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { isShow } from '../../../store/reducers/modalReducer';
import { useDispatch } from 'react-redux';

const WithdrawalModal = () => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);
  const handleChange = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'withdrawalReasonModal' }));
  }, []);
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle
          closed={false}
          style={{ height: 'auto', padding: '24px 32px' }}
          title={
            <>
              {/*{teamMemberInfo?.userName}님을*/}
              계정 삭제를 하시겠어요?
            </>
          }
        />
        <ModalSubTitle
          subTitle={[
            <>삭제 이후 90일 이내, 동일 계정으로 로그인 시,</>,
            <> 계정 삭제 철회 요청이 가능합니다.</>,
            <></>,
            <>
              <strong>계정 삭제 90일 이후 계정과 관련된 모든 정보는</strong>
            </>,
            <>
              <strong>복구 불가능한 점 유의해주세요.</strong>
            </>,
          ]}
        />

        <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
          <BasicButton onClick={handleChange} theme={'dark'} text={'네'} style={{ width: '160px', padding: '16px 52px' }} />
          <BasicButton onClick={closeModal} designBgColor={colors.red} text={'아니오'} style={{ width: '160px', padding: '16px 52px' }} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default WithdrawalModal;
