import React, { Fragment, useCallback, useEffect, useState } from 'react';
// Redux
import { useSelector, useDispatch } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
// Components
import FlexBox from '../../atoms/FlexBox';
import ProfileIcon from '../../atoms/ProfileIcon';
import Icon from '../../atoms/Icon';
import IconButton from '../../atoms/Button/IconButton';
// Styles
import { css } from '@emotion/react';
import { caption2_bold, heading5_bold } from '../../../styles/FontStyles';
import { profileColor } from '../../../common/util/commonVar';

import { ReducerType } from '../../../store/reducers';
interface PropsType {
  teamName?: string;
  memberList?: string[];
  parentsIndex: number;
}

const AdminSideTeamListItem = ({ teamName = 'dbdlab의 팀', memberList, parentsIndex }: PropsType) => {
  const dispatch = useDispatch();
  const isFirstCreateTeam = useSelector<ReducerType, boolean>(state => state.team.isFirstCreate);
  const isInviteModal = useSelector<ReducerType, boolean>(state => state.team.isInviteModal);
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);

  const [focusItem, setFocusItem] = useState(null);

  const handleChangeTeamName = useCallback(
    num => {
      // console.log('=============================', num, '=============================');
      setFocusItem(num);
      dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));
      // dispatch(createdTeam(true));
    },
    [focusItem],
  );

  const handToggleInviteModal = useCallback(
    num => {
      setFocusItem(num);
      dispatch(isShow({ isShow: true, type: 'inviteTeamMember' }));
    },
    [focusItem],
  );

  useEffect(() => {
    if (modalType === '') {
      setFocusItem(null);
    }

    // TODO: 최초로그인 시 로직
    // TODO: Team API 호출 후 리스트가 없을 경우, 최초 로그인 일 경우 focustItme에 'first' 업데이트
    // if (modalType !== '') {
    //   setFocusItem('first');
    // }
  }, [modalType]);

  return (
    <FlexBox
      direction={'column'}
      align={'flex-start'}
      column={'flex-start'}
      style={{ ...itemBox(modalType, isFirstCreateTeam, isInviteModal, parentsIndex, focusItem) }}
    >
      <FlexBox style={{ marginBottom: '15px' }} justify={'space-between'} align={'center'}>
        <span css={[heading5_bold]}>{teamName}</span>
        <Icon name={'ACTION_SETTING'} size={24} onClick={() => handleChangeTeamName(parentsIndex)} />
        {/*<Icon name={'ACTION_SETTING'} size={24} />*/}
      </FlexBox>

      <FlexBox justify={'flex-start'} align={'center'}>
        {memberList.map((item, index) => {
          return (
            <Fragment key={index}>
              <ProfileIcon name={item} backgroundColor={profileColor[index]} size={'20px'} fontStyle={caption2_bold} margin={'0 4px 0 0'} />
              {index + 1 === memberList.length ? (
                <IconButton onClick={() => handToggleInviteModal(parentsIndex)} name={'ACTION_ADD_CIRCLE'} style={{ marginTop: '3px' }} />
              ) : null}
            </Fragment>
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default AdminSideTeamListItem;

const itemBox = (modalType, isFirstCreateTeam, isInviteModal, parentsIndex, focusItem) => css`
  width: ${modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember' ? '240px' : 'calc(100%-1px)'};
  padding: 15px 24px;
  //z-index: 1000;
  background: white;
  ${modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember'
    ? `
    position: relative;
    z-index: 101;
    width: 240px;
  `
    : ''}
  ${parentsIndex === focusItem || focusItem === 'first'
    ? `
    z-index: 101;
  `
    : `
    z-index: -1;
  `}
`;
