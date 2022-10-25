import React, { Fragment, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_regular } from '../../../styles/FontStyles';

interface PropsType {
  display: boolean;
  top?: number;
  left?: number;
  normalText: {
    text: string;
  }[];
  handleChangeMemberStatus: (name) => void;
  forwardref?: any;
  [key: string]: any;
}

const TableDropDown = ({ display, topText, normalText, top = 16, left = 16, handleChangeMemberStatus, forwardref, ...props }: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleChange = useCallback(
    name => {
      handleChangeMemberStatus(name);
    },
    [handleChangeMemberStatus],
  );

  return (
    <div css={popupContainer(display, top, left)} ref={forwardref}>
      {normalText.map((el, index) => {
        return (
          <Fragment key={index}>
            <div onClick={() => handleChange(el.text)} css={[body3_regular, cursorBtnStyle]}>
              {el.text}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default TableDropDown;

const popupContainer = (display, top, left) => css`
  opacity: ${display ? '100%' : 0};
  min-width: 214px;
  //width: 220px;
  border-radius: 16px;
  padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: ${top}px;
  left: ${left}px;
  transition: all 0.2s ease-in;
  display: ${display ? 'flex' : 'none'};
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
  white-space: nowrap;
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
