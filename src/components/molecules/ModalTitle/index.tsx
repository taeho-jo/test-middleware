import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import { heading1_bold } from '../../../styles/FontStyles';
import { isShow } from '../../../store/reducers/modalReducer';
import { ReducerType } from '../../../store/reducers';

interface PropsType {
  title?: string;
  closed?: boolean;
  titlePosition?: 'flex-start' | 'center' | 'space-between';
}

const ModalTitle = ({ title = 'Modal', titlePosition = 'flex-start', closed = true }: PropsType) => {
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const goBackLogin = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'login' }));
  }, []);

  return (
    <FlexBox align={'center'} padding={'24px 32px'} style={{ boxSizing: 'border-box' }}>
      <FlexBox justify={titlePosition} align={'center'}>
        {modalType === 'resetPassword' ? (
          <Icon onClick={goBackLogin} name={'NAVIGATION_ARROW_LEFT'} size={24} style={{ cursor: 'pointer', marginRight: '10px' }} />
        ) : null}

        <span css={[heading1_bold, { cursor: 'default' }]}>{title}</span>
      </FlexBox>

      {closed ? <Icon onClick={closeModal} name={'NAVIGATION_CLOSE_LG'} size={24} style={{ cursor: 'pointer' }} /> : null}
    </FlexBox>
  );
};

export default ModalTitle;
