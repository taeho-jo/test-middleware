import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import { heading1_bold } from '../../../styles/FontStyles';
import { isShow } from '../../../store/reducers/modalReducer';

interface PropsType {
  modalType: string;
}

const ModalTitle = ({ modalType }: PropsType) => {
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
      default:
        return 'Title';
    }
  }, [modalType]);

  return (
    <FlexBox justify={'space-between'} align={'center'} padding={'29px 32px 45px'} style={{ boxSizing: 'border-box' }}>
      <FlexBox justify={'flex-start'} align={'center'}>
        {modalType === 'pwInquiry' ? (
          <Icon onClick={goBackLogin} name={'NAVIGATION_ARROW_LEFT'} size={24} style={{ cursor: 'pointer', marginRight: '10px' }} />
        ) : null}

        <span css={[heading1_bold, { cursor: 'default' }]}>{modalTitle()}</span>
      </FlexBox>

      <Icon onClick={closeModal} name={'NAVIGATION_CLOSE_LG'} size={24} style={{ cursor: 'pointer' }} />
    </FlexBox>
  );
};

export default ModalTitle;
