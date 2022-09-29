import React, { Fragment, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_regular } from '../../../styles/FontStyles';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { ReducerType } from '../../../store/reducers';

interface PropsType {
  display: boolean;
  topText?: string;
  top?: number;
  right?: number;
  setFocusProfile: any;
  normalText: {
    text: string;
    onClick: () => void;
  }[];
  [key: string]: any;
}

const LayerPopup = ({ display, topText, normalText, top = 16, right = 16, setFocusProfile, ...props }: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const boxRef = useRef(null);

  const showToastStatus = useSelector<ReducerType, any>(state => state.modal.isShow);

  useOutsideClick(boxRef, () => {
    setFocusProfile(false);
  });

  const onClickLayer = callback => {
    callback();
    console.log('!');
    setFocusProfile(false);
  };

  useEffect(() => {
    // console.log(showToastStatus, '!!!!');
    // if (!showToastStatus) {
    setFocusProfile(false);
    // }
  }, [showToastStatus]);

  return (
    <div ref={boxRef} css={popupContainer(display, top, right)}>
      {topText && <div css={[body3_regular, emailTextStyle]}>{topText}</div>}

      {normalText.map((el, index) => {
        return (
          <Fragment key={index}>
            <div onClick={el.onClick} css={[body3_regular, cursorBtnStyle]}>
              {el.text}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default LayerPopup;

const popupContainer = (display, top, right) => css`
  opacity: ${display ? '100%' : 0};
  //width: 220px;
  border-radius: 16px;
  padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: ${top}px;
  right: ${right}px;
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
