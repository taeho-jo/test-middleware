import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import FlexBox from '../../atoms/FlexBox';
import ModalTitle from '../../molecules/ModalTitle';

const CustomerResearchModuleModal = () => {
  return (
    <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0 25px 27px 64px'} width={'774px'} height={'auto'}>
        <ModalTitle title="" />
        잠재 고객 검증
      </PopupBox>
    </FlexBox>
  );
};

export default CustomerResearchModuleModal;
