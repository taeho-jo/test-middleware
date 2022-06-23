import React, { forwardRef, Fragment, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_regular, heading5_bold, heading5_medium, heading5_regular } from '../../../styles/FontStyles';
import useOutsideClick from '../../../hooks/useOutsideClick';
import FlexBox from '../FlexBox';

interface PropsType {
  display: boolean;
  data?: any;
  setIsShow: any;
  top?: number;
  left?: number;
  normalText?: {
    text: string;
    onClick: () => void;
  }[];
  [key: string]: any;
}
//
// answer: (4) ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4']
// reason: "가독성이 낮다."
// value: 60

const ReportShortAnswerQuestionLayerPopup = ({ display, data, setIsShow, topText, normalText, top = 16, left = 16, ...props }: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => {
    setIsShow(false);
  });

  return (
    <div ref={boxRef} css={popupContainer(display, top, left)}>
      <FlexBox justify={'space-between'} align={'center'} style={{ padding: '16px' }}>
        <span css={heading5_medium}>{data?.reason}</span>
        <div>
          <span css={[heading5_medium, { color: colors.grey._99 }]}>@56명</span>
          <span css={heading5_bold}>{data?.value}%</span>
        </div>
      </FlexBox>

      <ul css={{ background: colors.grey._fa, width: '100%', padding: '16px 24px' }}>
        {data?.answer.map((item, index) => {
          return (
            <li css={[heading5_regular, { listStyle: 'inside', marginBottom: index === data?.answer.length - 1 ? 0 : '16px' }]} key={`item-${index}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReportShortAnswerQuestionLayerPopup;

const popupContainer = (display, top, left) => css`
  opacity: ${display ? '100%' : 0};
  // display: ${display ? 'block' : 'none'};
  width: 660px;
  border-radius: 8px;
  //padding: 16px;
  background-color: ${colors.white};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.2s ease-in;
  display: ${display ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: ${display ? 1 : -1};
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
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //height: 48px;
  width: 100%;
  cursor: pointer;
  padding: 15px 32px;
  border-radius: 8px;
  :hover {
    background: ${colors.grey._ec};
  }
`;
