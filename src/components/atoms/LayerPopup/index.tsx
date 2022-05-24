import React, { Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_regular } from '../../../styles/FontStyles';
import { setToken } from '../../../store/reducers/authReducer';
import { persistor } from '../../../pages/_app';

interface PropsType {
  display: boolean;
  topText?: string;
  normalText: {
    text: string;
    onClick: () => void;
  }[];
  [key: string]: any;
}

const LayerPopup = ({ display, topText, normalText, ...props }: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div css={popupContainer(display)}>
      {topText && <div css={[body3_regular, emailTextStyle]}>{topText}</div>}

      {normalText.map((el, index) => {
        return (
          <Fragment key={index}>
            <div onClick={el.onClick ? el.onClick : null} css={[body3_regular, cursorBtnStyle]}>
              {el.text}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default LayerPopup;

const popupContainer = display => css`
  opacity: ${display ? '100%' : 0};
  //width: 220px;
  border-radius: 16px;
  padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 16px;
  right: 16px;
  transition: all 0.2s ease-in;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: ${display ? 10000 : -1};
  border: 1px solid #dcdcdc;
`;
const emailTextStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.grey._99};
  width: 100%;
  padding: 15px 32px;
`;

const cursorBtnStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  cursor: pointer;
  padding: 15px 32px;
  border-radius: 8px;
  :hover {
    background: ${colors.grey._ec};
  }
`;
