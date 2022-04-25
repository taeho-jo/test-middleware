import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
import { setToken } from '../../../store/reducers/authReducer';
import { ReducerType } from '../../../store/reducers';
import { persistor } from '../../../pages/_app';
// Components
import Button from '../../atoms/Button';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import InputFormBox from '../../molecules/InputFormBox';
import ModalTitle from '../../molecules/ModalTitle';
// Style
import { css } from '@emotion/react';
import { body3_bold, body3_regular } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import { showToast } from '../../../store/reducers/toastReducer';

const loginInputArr = [
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
const signupInputArr = [
  {
    label: 'email1',
    placeholder: 'E-mail을 입력해주세요.',
    errorMsg: 'E-mail양식이 아닙니다.',
    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    type: 'text',
  },
  {
    label: 'password1',
    placeholder: '비밀번호를 입력해주세요.',
    errorMsg: '6자리 이상 입력해주세요.',
    pattern: /^(?=.*[A-Za-z])(?=.*[0-9]).{6,10}$/,
    type: 'password',
  },
];
const pwInquiryInputArr = [
  {
    label: 'email',
    placeholder: 'E-mail을 입력해주세요.',
    errorMsg: 'E-mail양식이 아닙니다.',
    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    type: 'text',
  },
];
const pwInquirySubTitleArr = ['비밀번호 재설정을 위해', 'Diby에서 사용한 이메일을 입력해주세요.'];

const AuthModal = () => {
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);

  const { push, pathname } = useRouter();

  const handleSignUp = useCallback(
    (status, data) => {
      if (status === 'fail') {
        alert(status);
        dispatch(showToast({ message: '가입된 계정이 없습니다. 다시 확인해주세요!', isShow: true, status: 'warning', duration: 5000 }));
      } else {
        if (modalType === 'signup') {
          dispatch(isShow({ isShow: true, type: 'confirmSignup' }));
        }
        if (modalType === 'pwInquiry') {
          dispatch(isShow({ isShow: true, type: 'confirmPassword' }));
        }
        if (modalType === 'login') {
          persistor.flush().then(() => {
            persistor.purge();
            dispatch(setToken('로그인 토큰 저장'));
            dispatch(isShow({ isShow: false, type: '' }));
          });
        }
      }
    },
    [modalType],
  );

  // const onLoginSuccess = async (res: any) => {
  //   console.log(res.accessToken, 'RES RES RES');
  //   const accessToken = res.accessToken;
  //   if (res.accessToken) {
  //     dispatch(setToken(accessToken));
  //     await router.push('/');
  //   }
  // };

  const loginWithGoogle = useCallback(() => {
    push(`http://local-backend.diby.io:8010/oauth2/authorization/google?redirect_uri=http://localhost:3000/${pathname}`);

    dispatch(setToken('1231231231231231'));
  }, [pathname]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle modalType={modalType} />

        {modalType === 'pwInquiry' ? <ModalSubTitle subTitle={pwInquirySubTitleArr} /> : null}

        <InputFormBox
          btnTextColor={`${colors.white}`}
          handleSignUp={handleSignUp}
          inputArr={modalType === 'pwInquiry' ? pwInquiryInputArr : modalType === 'login' ? loginInputArr : signupInputArr}
          btnText={modalType === 'login' ? '로그인하기' : modalType === 'signup' ? '간편하게 시작하기' : '간편하게 시작하기'}
          padding={modalType === 'pwInquiry' ? '0 36px 32px' : '0 36px 0'}
          modalType={modalType}
        />

        {modalType === 'pwInquiry' ? null : (
          <FlexBox justify={'center'} padding={'16px 0 24px 0'}>
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
        )}

        <FlexBox
          padding={'19px 24px'}
          style={{ boxSizing: 'border-box', background: `${colors.grey._f7}`, borderRadius: '0 0 16px 16px' }}
          justify={modalType === 'login' ? 'space-between' : 'center'}
          align={'center'}
        >
          {modalType === 'login' ? (
            <>
              <div css={bottomTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'pwInquiry' }))}>
                <span css={[body3_bold]}>비밀번호</span>
                <span css={[body3_regular]}>를 잊어버리셨나요?</span>
              </div>

              <div css={bottomTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'signup' }))}>
                <span css={body3_bold}>계정</span>
                <span css={[body3_regular]}>이 없으신가요?</span>
              </div>
            </>
          ) : modalType === 'signup' ? (
            <div css={bottomTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'login' }))}>
              <span css={body3_bold}>계정</span>
              <span css={[body3_regular]}>이 있어요!</span>
            </div>
          ) : (
            <div css={bottomTextStyle} onClick={() => dispatch(isShow({ isShow: true, type: 'login' }))}>
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

const bottomTextStyle = css`
  cursor: pointer;
`;
