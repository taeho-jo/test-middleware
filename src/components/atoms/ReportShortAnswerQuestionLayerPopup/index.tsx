import React, { forwardRef, Fragment, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_regular, heading5_bold, heading5_medium, heading5_regular } from '../../../styles/FontStyles';
import useOutsideClick from '../../../hooks/useOutsideClick';
import FlexBox from '../FlexBox';
import { checkIsInteger } from '../../../common/util/commonFunc';

interface PropsType {
  display: boolean;
  data?: any;
  top?: number;
  left?: number;
  normalText?: {
    text: string;
    onClick: () => void;
  }[];
  setStackbarIndex?: any;
  count?: number;
  [key: string]: any;
}
//
// answer: (4) ['주관식 내용1', '주관식 내용2', '주관식 내용3', '주관식 내용4']
// reason: "가독성이 낮다."
// value: 60

const ReportShortAnswerQuestionLayerPopup = ({
  setStackbarIndex,
  display,
  data,
  topText,
  normalText,
  top = 16,
  left = 16,
  count,
  ...props
}: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const boxRef = useRef(null);

  useOutsideClick(boxRef, () => {
    setStackbarIndex(null);
  });

  return (
    <div ref={boxRef} css={popupContainer(display, top, left)}>
      <FlexBox justify={'space-between'} align={'center'} style={{ padding: '16px' }}>
        <span css={heading5_medium}>{data?.reason}</span>
        <div>
          <span css={[heading5_medium, { color: colors.grey._99 }]}>{count}개</span>&nbsp;
          <span css={heading5_bold}>{checkIsInteger(data?.value)}%</span>
        </div>
      </FlexBox>

      <ul css={{ background: colors.grey._fa, width: '100%', height: '274px', overflow: 'scroll', padding: '16px 24px' }}>
        {data?.answer.map((item, index) => {
          return (
            <li
              css={[
                heading5_regular,
                {
                  marginBottom: '16px',
                  height: 'auto',
                  listStyle: 'inside',
                  textIndent: '-20px',
                  paddingLeft: '20px',
                },
              ]}
              key={`item-${index}`}
            >
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
  z-index: ${display ? 99 : -1};
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
