import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import ModalTitle from '../../molecules/ModalTitle';
import { heading4_regular } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import Button from '../../atoms/Button';
import { colors } from '../../../styles/Common.styles';

const ResetPwSuccess = () => {
  const router = useRouter();
  const handleMoveLogin = useCallback(() => {
    router.push('/admin/re-login');
  }, []);

  return (
    <div css={mainBox}>
      <ModalTitle modalType={'reset-password-success'} modalShow={false} />
      <span css={[heading4_regular, { marginBottom: '34px' }]}>로그인을 원하시면 아래 버튼을 클릭해주세요.</span>
      <div css={paddingBox}>
        <Button onClick={handleMoveLogin} btnTextColor={'white'} buttonType={'basic'} backgroundColor={colors.grey._3c} btnText={'로그인하기'} />
      </div>
    </div>
  );
};

export default ResetPwSuccess;

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
