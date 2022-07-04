import React, { useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import ConfirmPopupContents from '../../molecules/ConfirmPopupContents';
import ConfirmPopupNextStepBtn from '../../molecules/ConfirmPopupNextStepBtn';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const mail = 'jotang@gmail.com';

const PwInquiryConfirm = () => {
  const router = useRouter();

  const handleMovePage = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} direction={'column'}>
      <PopupBox padding={'56px 64px'} width={'424px'} height={'auto'}>
        <div css={iconBoxStyle}>
          <Icon name={'NAVIGATION_CLOSE_LG'} />
        </div>

        <ConfirmPopupContents
          title={'메일을 확인해주세요!'}
          contents={`${mail}로 
새 비밀번호를 설정할 수 있는 메일을 보냈어요. ㄱ
새로운 비밀번호를 설정해주세요.`}
        />
        <ConfirmPopupNextStepBtn
          onClick={handleMovePage}
          // pathname={'/'}
          title={'혹시 이메일을 받지 못했나요?'}
          btnText={'이메일을 다시 보내주세요.'}
        />
      </PopupBox>
    </FlexBox>
  );
};

export default PwInquiryConfirm;

const iconBoxStyle = css`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
