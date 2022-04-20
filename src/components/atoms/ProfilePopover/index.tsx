import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_regular } from '../../../styles/FontStyles';

const ProfilePopover = ({ display }) => {
  const router = useRouter();

  const handleLogout = useCallback(() => {
    window.localStorage.clear();
    router.push('/');
  }, []);

  return (
    <div css={popupContainer(display)}>
      <span css={[body3_regular, emailTextStyle]}>taeho.jo@dbdlab.io</span>
      <span css={[body3_regular, cursorBtnStyle]}>프로필 설정</span>
      <div css={borderStyle}></div>
      <span onClick={() => handleLogout()} css={[body3_regular, cursorBtnStyle]}>
        로그아웃
      </span>
    </div>
  );
};

export default ProfilePopover;

const popupContainer = display => css`
  opacity: ${display ? '100%' : 0};
  width: 220px;
  border-radius: 16px;
  padding: 23px 14px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 57px;
  right: 32px;
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  //z-index: 10000;
`;
const emailTextStyle = css`
  color: ${colors.grey._99};
  margin-bottom: 24px;
`;

const borderStyle = css`
  margin-top: 25px;
  margin-bottom: 18.5px;
  width: 100%;
  border-top: 1px solid ${colors.grey._ec};
`;

const cursorBtnStyle = css`
  cursor: pointer;
`;
