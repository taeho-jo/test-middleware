import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import { heading1_bold } from '../../../styles/FontStyles';
import { isShow, updateReturnPage } from '../../../store/reducers/modalReducer';
import { ReducerType } from '../../../store/reducers';
import { updateTeamSeq } from '../../../store/reducers/teamReducer';
import { updateRawData } from '../../../store/reducers/reportReducer';
import { updateCancelWithdrawal, updateErrorMessage, updateWithdrawalUserInfo } from '../../../store/reducers/userReducer';
import { closeResearchRecommendationModal } from '../../../store/reducers/commonReducer';

interface PropsType {
  title?: any;
  closed?: boolean;
  titlePosition?: 'flex-start' | 'center' | 'space-between';
  style?: any;
  titleStyle?: any;
  whiteSpace?: string;
}

const ModalTitle = ({
  whiteSpace = 'pre-line',
  title = 'Modal',
  titlePosition = 'flex-start',
  titleStyle,
  closed = true,
  style = { padding: '24px 32px' },
}: PropsType) => {
  const dispatch = useDispatch();
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const cancelWithdrawalStatus = useSelector<ReducerType, boolean>(state => state.user.cancelWithdrawal);
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
    dispatch(closeResearchRecommendationModal());
  }, []);

  const goBackLogin = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'login' }));
  }, []);

  return (
    <FlexBox align={'flex-start'} style={{ boxSizing: 'border-box', ...style }}>
      <FlexBox justify={titlePosition} align={'center'}>
        {modalType === 'resetPassword' ? <Icon onClick={goBackLogin} name={'NAVIGATION_ARROW_LEFT'} size={24} style={{ cursor: 'pointer' }} /> : null}

        <span css={[heading1_bold, { cursor: 'default', marginLeft: '10px', height: 'auto', ...titleStyle, whiteSpace: whiteSpace }]}>{title}</span>
      </FlexBox>

      {closed ? <Icon onClick={closeModal} name={'NAVIGATION_CLOSE_LG'} size={24} style={{ cursor: 'pointer' }} /> : null}
    </FlexBox>
  );
};

export default ModalTitle;
