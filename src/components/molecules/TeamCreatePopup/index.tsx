import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import ModalTitle from '../ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import { colors } from '../../../styles/Common.styles';
import { isShow } from '../../../store/reducers/modalReducer';
import { body3_bold, body3_regular } from '../../../styles/FontStyles';
import FlexBox from '../../atoms/FlexBox';

// const subTitle = []

const inputArr = [
  {
    label: 'teamName',
    placeholder: '팀 이름을 입력해주세요.',
    // errorMsg: '6자리 이상 입력해주세요.',
    // pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
    type: 'text',
  },
];

const TeamCreatePopup = () => {
  const dispatch = useDispatch();
  const handleCompleteCreate = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  return (
    <>
      <div css={firstTeamCreateBoxStyle} />
      <div css={modalBoxStyle}>
        {/*<ModalTitle modalType={'create-team'} />*/}
        <ModalSubTitle subTitle={[`DBDLAB님의 팀을 생성할게요.`]} />
        {/*<div css={paddingbox}>*/}
        {/*  <InputFormBox inputArr={inputArr} btnText={'완료했어요!'} btnTextColor={'white'} btnBackColor={colors.grey._3c} />*/}
        {/*</div>*/}

        <FlexBox
          padding={'19px 24px'}
          style={{
            boxSizing: 'border-box',
            background: `${colors.grey._f7}`,
            borderRadius: '0 0 16px 16px',
            marginTop: 0,
          }}
          justify={'center'}
          align={'center'}
        >
          <div css={bottomTextStyle}>
            <span onClick={handleCompleteCreate} css={[body3_regular]}>
              다음에 할게요
            </span>
          </div>
        </FlexBox>
      </div>
    </>
  );
};

export default TeamCreatePopup;
const firstTeamCreateBoxStyle = css`
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
`;

const modalBoxStyle = css`
  position: absolute;
  z-index: 101;
  width: 400px;
  background: white;
  top: 96px;
  left: 264px;
  border-radius: 16px;
  padding: 24px 0 0;
`;

const paddingbox = css`
  padding: 0 40px 24px;
`;

const bottomTextStyle = css`
  cursor: pointer;
`;
