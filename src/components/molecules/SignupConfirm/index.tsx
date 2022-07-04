import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// Components
import PopupBox from '../../../components/atoms/PopupBox';
import Icon from '../../../components/atoms/Icon';
import ConfirmPopupContents from '../../../components/molecules/ConfirmPopupContents';
import ConfirmPopupNextStepBtn from '../../../components/molecules/ConfirmPopupNextStepBtn';
import FlexBox from '../../../components/atoms/FlexBox';
// style
import { css } from '@emotion/react';
import ModalTitle from '../ModalTitle';

const mail = 'jotang@gmail.com';

const SignupConfirm = () => {
  const router = useRouter();

  const handleMovePage = useCallback(() => {
    router.push('/');
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} direction={'column'}>
      <PopupBox padding={'56px 64px'} width={'424px'} height={'auto'}>
        <div css={iconBoxStyle}>
          <Icon name={'NAVIGATION_CLOSE_LG'} size={24} />
        </div>

        <ConfirmPopupContents
          title={'인증을 완료해주세요!'}
          contents={`가입하신 계정의 안전한 보안을 위해
          ${mail} 로
          보내드린 메일에서 인증 버튼을 눌러주세요.`}
        />
        <ConfirmPopupNextStepBtn
          onClick={handleMovePage}
          // pathname={'/'}
          title={'혹시 이메일을 받지 못했나요?'}
          btnText={'이메일을 다시 보내주세요.'}
        />
        <ConfirmPopupNextStepBtn
          onClick={handleMovePage}
          // pathname={'/signup'}
          title={'이메일 주소를 잘못 입력하셨나요?'}
          btnText={'회원가입을 다시 할게요.'}
          style={{ marginTop: '24px' }}
        />
      </PopupBox>
    </FlexBox>
  );
};

export default SignupConfirm;

const iconBoxStyle = css`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
