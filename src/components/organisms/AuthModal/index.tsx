import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
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
import { ReducerType } from '../../../store/reducers';

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
const inputArr2 = [
  {
    label: 'email',
    placeholder: 'E-mail을 입력해주세요.',
    errorMsg: 'E-mail양식이 아닙니다.',
    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    type: 'text',
  },
];

const AuthModal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const router = useRouter();

  const handleMovePage = useCallback(path => {
    router.push(path);
  }, []);

  const handleSignUp = useCallback(
    data => {
      alert(modalType);
      if (modalType === 'signup') {
        dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
      }
      if (modalType === 'pwInquiry') {
        dispatch(isShow({ isShow: true, type: 'confirmPassword' }));
      }
      if (modalType === 'login') {
        console.log('!!!');
        dispatch(setToken('123123123123123123123123123123123'));
        dispatch(isShow({ isShow: false, type: '' }));
        router.push('/admin/main');
      }
      // alert(data);
      // handleMovePage('/signup/confirm');
    },
    [modalType],
  );

  const onLoginSuccess = async (res: any) => {
    console.log(res.accessToken, 'RES RES RES');
    const accessToken = res.accessToken;
    if (res.accessToken) {
      dispatch(setToken(accessToken));
      await router.push('/');
    }
  };

  const loginWithGoogle = useCallback(() => {
    router.push(`http://local-backend.diby.io:8010/oauth2/authorization/google?redirect_uri=http://localhost:3000/${router.pathname}`);

    dispatch(setToken('1231231231231231'));
  }, [router.pathname]);

  return (
    <FlexBox style={{ marginTop: '112px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <div css={iconBoxStyle} onClick={() => dispatch(isShow({ isShow: false, type: '' }))}>
          <Icon name={'NAVIGATION_CLOSE_LG'} size={24} />
        </div>

        {/*<InputFormBox handleSignUp={handleSignUp} inputArr={inputArr} btnText={'확인'} padding={'64px 48px 32px 48px'} />*/}

        <InputFormBox
          handleSignUp={handleSignUp}
          inputArr={modalType === 'pwInquiry' ? inputArr2 : inputArr}
          btnText={modalType === 'login' ? '로그인' : modalType === 'signup' ? '회원가입' : '확인'}
          padding={modalType === 'pwInquiry' ? '64px 48px 32px 48px' : '64px 48px 0 48px'}
        />

        {modalType === 'pwInquiry' ? null : (
          <>
            <div css={textBox}>
              <span css={caption1_regular}>or 간편한 가입을 원하신다면?</span>
            </div>
            <FlexBox justify={'center'} padding={'0 0 24px 0'}>
              <Button
                onClick={loginWithGoogle}
                btnText={'구글로 시작하기'}
                full={false}
                buttonType={'action'}
                start={'icon'}
                icon={'GOOGLE'}
                padding={'8px 18px'}
              />
            </FlexBox>
          </>
        )}

        <FlexBox style={{ borderTop: '1px solid grey' }} justify={modalType === 'login' ? 'space-between' : 'center'} align={'center'}>
          {modalType === 'login' ? (
            <>
              <div css={leftTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'pwInquiry' }))}>
                <span css={[body3_bold]}>비밀번호</span>
                <span css={[body3_regular]}>를 잊어버리셨나요?</span>
              </div>

              <div css={rightTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'signup' }))}>
                <span css={body3_bold}>계정</span>
                <span css={[body3_regular]}>이 없으신가요?</span>
              </div>
            </>
          ) : modalType === 'signup' ? (
            <div css={centerTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'login' }))}>
              <span css={body3_bold}>계정</span>
              <span css={[body3_regular]}>이 있어요!</span>
            </div>
          ) : (
            <div css={centerTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'login' }))}>
              <span css={body3_bold}>비밀번호</span>
              <span css={[body3_regular]}>가 생각났어요!</span>
            </div>
          )}
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default AuthModal;

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
