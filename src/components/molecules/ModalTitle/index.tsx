import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import { heading1_bold } from '../../../styles/FontStyles';
import { isShow } from '../../../store/reducers/modalReducer';

interface PropsType {
  modalType?: string;
  modalShow?: boolean;
}

const ModalTitle = ({ modalType, modalShow }: PropsType) => {
  const dispatch = useDispatch();
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const goBackLogin = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'login' }));
  }, []);

  const modalTitle = useCallback(() => {
    switch (modalType) {
      case 'login':
        return '로그인';
      case 'signup':
        return '회원가입';
      case 'pwInquiry':
        return '비밀번호 재설정';
      case 'confirmSignup':
        return '이메일을 인증해주세요!';
      case 'confirmPassword':
        return '메일을 확인해주세요!';
      case 'reset-password':
        return '새로운 비밀번호를 입력해주세요.';
      case 'reset-password-success':
        return '비밀번호가 성공적으로 변경되었습니다!';
      case 'create-team':
        return '반가워요!';
      case 'invite-team-member':
        return '함께해요!';
      default:
        return 'Title';
    }
  }, [modalType]);

  return (
    <FlexBox
      justify={
        !modalShow && (modalType === 'create-team' || modalType === 'invite-team-member')
          ? 'flex-start'
          : !modalShow && modalType === ''
          ? 'center'
          : 'space-between'
      }
      align={'center'}
      padding={'29px 32px 45px'}
      style={{ boxSizing: 'border-box' }}
    >
      <FlexBox justify={!modalShow ? 'center' : 'flex-start'} align={'center'}>
        {modalType === 'pwInquiry' ? (
          <Icon onClick={goBackLogin} name={'NAVIGATION_ARROW_LEFT'} size={24} style={{ cursor: 'pointer', marginRight: '10px' }} />
        ) : null}

        <span css={[heading1_bold, { cursor: 'default' }]}>{modalTitle()}</span>
      </FlexBox>

      {modalShow && <Icon onClick={closeModal} name={'NAVIGATION_CLOSE_LG'} size={24} style={{ cursor: 'pointer' }} />}
    </FlexBox>
  );
};

export default ModalTitle;
