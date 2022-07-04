import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import fatalityImg from '/public/assets/png/fatality.png';
import { heading5_medium } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';

const FatalityInfoModal = () => {
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'400px'} height={'auto'}>
        <ModalTitle title={'치명도가 뭔가요'} titlePosition={'space-between'} />
        <ModalSubTitle subTitle={['Diby 패널이 입력한 "불편사항"에 대해', '불편함의 정도를 패널 스스로 평가해요.']} />
        <div>
          <img src={fatalityImg.src} alt="fatalityImg" css={{ width: '100%' }} />
        </div>
        <FlexBox
          style={{ padding: '32px 90px 48px 90px', borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
          backgroundColor={colors.grey._f7}
        >
          <span css={[heading5_medium, { textAlign: 'center' }]}>
            평균 치명도가 <strong>4.5 이상</strong>일 경우
            <br /> 개선우선순위를 높이는 것이 적절합니다.
          </span>
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default FatalityInfoModal;
