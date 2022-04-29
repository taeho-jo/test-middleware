import React, { Fragment, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Components
import FlexBox from '../../atoms/FlexBox';
import ProfileIcon from '../../atoms/ProfileIcon';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
// Styles
import { css } from '@emotion/react';
import { caption2_bold, heading5_bold } from '../../../styles/FontStyles';
import { profileColor } from '../../../common/util/commonVar';
import { ReducerType } from '../../../store/reducers';
import { created, toggleInviteModal } from '../../../store/reducers/teamReducer';

interface PropsType {
  teamName?: string;
  memberList?: string[];
  style?: any;
}

const AdminSideTeamListItem = ({ teamName = 'dbdlab의 팀', memberList, style }: PropsType) => {
  const dispatch = useDispatch();
  const isFirstCreateTeam = useSelector<ReducerType, boolean>(state => state.team.isFirstCreate);
  const isInviteModal = useSelector<ReducerType, boolean>(state => state.team.isInviteModal);

  const handleChangeTeamName = useCallback(() => {
    dispatch(created(true));
  }, []);
  const handToggleInviteModal = useCallback(() => {
    dispatch(toggleInviteModal(true));
  }, []);
  return (
    <FlexBox direction={'column'} align={'flex-start'} column={'flex-start'} style={{ ...itemBox(isFirstCreateTeam, isInviteModal) }}>
      <FlexBox style={{ marginBottom: '15px' }} justify={'space-between'} align={'center'}>
        <span css={[heading5_bold]}>{teamName}</span>
        <Icon name={'ACTION_SETTING'} size={24} onClick={handleChangeTeamName} />
      </FlexBox>

      <FlexBox justify={'flex-start'}>
        {memberList.map((item, index) => {
          return (
            <Fragment key={index}>
              <ProfileIcon name={item} backgroundColor={profileColor[index]} size={'20px'} fontStyle={caption2_bold} margin={'0 4px 0 0'} />
            </Fragment>
          );
        })}
        <Button onClick={handToggleInviteModal} buttonType={'icon'} icon={'ACTION_CREATE'} size={24} />
      </FlexBox>
    </FlexBox>
  );
};

export default AdminSideTeamListItem;

const itemBox = (isFirstCreateTeam, isInviteModal) => css`
  width: ${isFirstCreateTeam || isInviteModal ? '240px' : '100%'};
  padding: 15px 24px;
  //z-index: 1000;
  background: white;
  ${isFirstCreateTeam || isInviteModal
    ? `
    position: relative;
    z-index: 101;
    width: 240px;
  `
    : ''}
`;
