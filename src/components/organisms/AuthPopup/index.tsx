import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// Components
import Button from '../../atoms/Button';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import PopupBox from '../../atoms/PopupBox';
import InputFormBox from '../../molecules/InputFormBox';
// Style
import { css } from '@emotion/react';
import { body3_bold, body3_regular, caption1_regular } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import { setToken } from '../../../store/reducers/authReducer';
import { useDispatch } from 'react-redux';
import { removeToast, showToast } from '../../../store/reducers/toastReducer';

const inputArr = [
  {
    label: 'email',
    placeholder: 'E-mail을 입력해주세요.',
    errorMsg: 'E-mail양식이 아닙니다.',
    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    type: 'text',
  },
  {
    label: 'password',
    placeholder: '비밀번호를 입력해주세요.',
    errorMsg: '6자리 이상 입력해주세요.',
    pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
    type: 'password',
  },
];

const LoginPopup = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleMovePage = useCallback(path => {
    router.push(path);
  }, []);

  const handleSignUp = useCallback(data => {
    alert(data);
    handleMovePage('/signup/certified');
  }, []);

  const onLoginSuccess = async (res: any) => {
    console.log(res.accessToken, 'RES RES RES');
    const accessToken = res.accessToken;
    if (res.accessToken) {
      dispatch(setToken(accessToken));
      await router.push('/');
    }
  };

  return (
    <FlexBox style={{ marginTop: '112px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <div css={iconBoxStyle}>
          <Icon name={'NAVIGATION_CLOSE_LG'} />
        </div>
        <InputFormBox
          handleSignUp={handleSignUp}
          inputArr={inputArr}
          btnText={router.pathname === '/login' ? '로그인' : '회원가입'}
          padding={'64px 48px 0 48px'}
        />
        <div css={textBox}>
          <span css={caption1_regular}>or 간편한 가입을 원하신다면?</span>
        </div>
        <FlexBox justify={'center'} padding={'0 0 24px 0'}>
          <Button btnText={'구글로 시작하기'} full={false} buttonType={'action'} start={'icon'} icon={'GOOGLE'} padding={'8px 18px'} />
        </FlexBox>

        <FlexBox style={{ borderTop: '1px solid grey' }} justify={router.pathname === '/login' ? 'space-between' : 'center'} align={'center'}>
          {router.pathname === '/login' ? (
            <>
              <div css={leftTextStyle} onClick={() => handleMovePage('/pwInquiry')}>
                <span css={[body3_bold]}>비밀번호</span>
                <span css={[body3_regular]}>를 잊어버리셨나요?</span>
              </div>

              <div css={rightTextStyle} onClick={() => handleMovePage('/signup')}>
                <span css={body3_bold}>계정</span>
                <span css={[body3_regular]}>이 없으신가요?</span>
              </div>
            </>
          ) : (
            <div css={centerTextStyle} onClick={() => handleMovePage('/login')}>
              <span css={body3_bold}>계정</span>
              <span css={[body3_regular]}>이 있어요!</span>
            </div>
          )}
        </FlexBox>
        <button onClick={() => dispatch(showToast({ isShow: true, message: '가입된 계정이 없습니다. 다시 확인해주세요!', duration: 3000 }))}>
          asdfasdf
        </button>
        {/*<button onClick={() => dispatch(removeToast({ isShow: false, message: '가입된 계정이 없습니다. 다시 확인해주세요!', duration: 3000 }))}>*/}
        {/*  123123123*/}
        {/*</button>*/}
      </PopupBox>
    </FlexBox>
  );
};

export default LoginPopup;

const iconBoxStyle = css`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const textBox = css`
  width: 100%;
  color: ${colors.grey._99};
  text-align: center;
  margin: 24px 0 8px 0;
`;

const leftTextStyle = css`
  cursor: pointer;
  padding: 16px 0 24px 24px;
`;
const rightTextStyle = css`
  cursor: pointer;
  padding: 16px 24px 24px 0;
`;
const centerTextStyle = css`
  cursor: pointer;
  padding: 16px 24px 24px 24px;
  text-align: center;
`;
