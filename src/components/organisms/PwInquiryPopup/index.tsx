import React, { useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import InputFormBox from '../../molecules/InputFormBox';
import { body3_bold, body3_regular } from '../../../styles/FontStyles';
import { useRouter } from 'next/router';

const inputArr = [
  {
    label: 'email',
    placeholder: 'E-mail을 입력해주세요.',
    errorMsg: 'E-mail양식이 아닙니다.',
    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    type: 'text',
  },
];

const PwInquiryPopup = () => {
  const router = useRouter();
  const handleMovePage = useCallback(path => {
    router.push(path);
  }, []);

  const handleSignUp = useCallback(data => {
    alert(data);
    handleMovePage('/pwInquiry/confirm');
  }, []);

  return (
    <FlexBox style={{ marginTop: '112px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'392px'} height={'auto'}>
        <div css={iconBoxStyle}>
          <Icon name={'NAVIGATION_CLOSE_LG'} />
        </div>

        <InputFormBox handleSignUp={handleSignUp} inputArr={inputArr} btnText={'확인'} padding={'64px 48px 32px 48px'} />

        <FlexBox style={{ borderTop: '1px solid grey' }} justify={'center'} align={'center'}>
          <div css={centerTextStyle} onClick={() => handleMovePage('/login')}>
            <span css={body3_bold}>계정</span>
            <span css={[body3_regular]}>이 있어요!</span>
          </div>
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default PwInquiryPopup;

const iconBoxStyle = css`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
const centerTextStyle = css`
  cursor: pointer;
  padding: 16px 24px 24px 24px;
  text-align: center;
`;
