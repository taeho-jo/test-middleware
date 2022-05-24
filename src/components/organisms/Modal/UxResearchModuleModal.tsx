import React from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';

const UxResearchModuleModal = () => {
  return (
    <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0 25px 27px 64px'} width={'774px'} height={'auto'}>
        <ModalTitle title="" />
        UX 포지션 분석
      </PopupBox>
    </FlexBox>
  );
};

export default UxResearchModuleModal;
