import React, { useCallback } from 'react';
import ModalTitle from '../../molecules/ModalTitle';
import { heading5_bold, heading4_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import InputFormBox from '../../molecules/InputFormBox';
import { colors } from '../../../styles/Common.styles';

const pwInquiryInputArr = [
  {
    label: 'password1',
    placeholder: '비밀번호를 입력해주세요.',
    errorMsg: '6자리 이상 입력해주세요.',
    pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
    type: 'password',
  },
];

const ResetPw = () => {
  const email = 'taeho.jo@gmail.com';

  const handleResetPassword = useCallback((status, data) => {
    if (status === 'fail') {
      console.log('실패');
      console.log(data);
    } else {
      console.log('성공');
      console.log(data);
    }
  }, []);

  return (
    <div css={mainBox}>
      {/*<ModalTitle modalType={'reset-password'} modalShow={false} />*/}
      <span css={[heading4_bold, { marginBottom: '34px' }]}>{email}</span>
      <div css={paddingBox}>
        <InputFormBox
          handleSignUp={handleResetPassword}
          btnTextColor={'white'}
          inputArr={pwInquiryInputArr}
          // modalType={'reset-password'}
          btnText={'비밀번호 재설정하기'}
          btnBackColor={colors.grey._3c}
        />
      </div>
    </div>
  );
};

export default ResetPw;

const mainBox = css`
  width: 512px;
  height: 474px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //padding: 0 96px;
`;
const paddingBox = css`
  padding: 0 96px;
`;
