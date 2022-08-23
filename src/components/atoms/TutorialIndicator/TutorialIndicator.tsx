import React, { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import ModalTitle from '../../molecules/ModalTitle';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { resetIndicatorStatus, updateInitIndicator } from '../../../store/reducers/commonReducer';
import testImg from '/public/assets/gif/tutorial_final.gif';

interface PropsType {
  top?: string;
  left?: string;
  modalTitle: string;
  modalSubTitle: string;
  modalTop?: string;
  modalLeft?: string;
  name: string;
  share?: string | string[] | undefined;
}
const TutorialIndicator = ({ top = '0px', left = '0px', modalTitle, modalSubTitle, modalTop, modalLeft, name, share = undefined }: PropsType) => {
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);

  const indicatorStatus = useSelector<ReducerType, any>(state => state.common.indicator);
  const [showModal, setShowModal] = useState(false);

  const saveLocalStorage = key => {
    const userIndicator = localStorage.getItem(userInfo?.userId);
    if (!share) {
      const objName = userInfo?.userId === '' ? 'fakeUser' : userInfo?.userId;
      const indicator = JSON.parse(userIndicator);
      const updateObj = {
        ...indicator.indicator,
        [key]: 'Y',
      };
      dispatch(updateInitIndicator(updateObj));
      const saveObject = {
        indicator: updateObj,
      };
      const string = JSON.stringify(saveObject);
      localStorage.setItem(objName, string);
    } else {
      const updateObj = {
        ...indicatorStatus,
        [key]: 'Y',
      };
      dispatch(updateInitIndicator(updateObj));
    }
  };

  return (
    <>
      {/*<div css={circleBox(top, left)} onClick={() => setShowModal(true)} />*/}
      <img src={testImg.src} alt="indicator" css={circleBox2(top, left)} onClick={() => setShowModal(true)} />
      {showModal && (
        <div css={popupBoxStyle(modalTop, modalLeft)}>
          <span css={title}>{modalTitle}</span>
          <span css={subTitle}>{modalSubTitle}</span>
          <button css={buttonStyle} onClick={() => saveLocalStorage(name)}>
            확인
          </button>
        </div>
      )}
    </>
  );
};

export default TutorialIndicator;

const sizeUp = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;
const circleBox = (top, left) => css`
  height: 44px;
  width: 44px;
  position: absolute;
  left: ${left};
  top: ${top};
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    background: #68a0f4;
    border-radius: 50%;
    z-index: 1;
    opacity: 0.2;
    animation: ${sizeUp} 1.5s ease-out infinite;
  }
`;
const circleBox2 = (top, left) => css`
  height: 44px;
  width: 44px;
  position: absolute;
  left: ${left};
  top: ${top};
  //border-radius: 50%;
  z-index: 10;
  cursor: pointer;
`;
const popupBoxStyle = (modalTop, modalLeft) => css`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${colors.grey._3c};
  position: absolute;
  left: ${modalLeft};
  top: ${modalTop};
  color: white;
  padding: 24px 32px;
  border-radius: 16px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  z-index: 100;
`;

const title = css`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: white;
  margin-bottom: 23px;
`;
const subTitle = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: white;
  white-space: pre-line;
  margin: 20px 0;
`;
const buttonStyle = css`
  padding: 11px 25.5px;
  border: 1px solid #ffffff;
  border-radius: 36px;
  background: none;
  color: white;
  margin: 8px 0;
  cursor: pointer;
`;
