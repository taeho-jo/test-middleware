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
import { memberListType, TeamListType, updateTeamSeq } from '../../../store/reducers/teamReducer';
import { useRouter } from 'next/router';
interface PropsType {
  teamName?: string;
  memberList?: memberListType[];
  parentsIndex: number;
  onClick: (item) => void;
  item: any;
}

const AdminSideTeamListItem = ({ teamName = 'dbdlab의 팀', memberList, parentsIndex, onClick, item }: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const isFirstCreateTeam = useSelector<ReducerType, boolean>(state => state.team.isFirstCreate);
  const isInviteModal = useSelector<ReducerType, boolean>(state => state.team.isInviteModal);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const modalType = useSelector<ReducerType, string>(state => state.modal.type);
  const teamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);

  const [focusItem, setFocusItem] = useState(null);

  const handleChangeTeamName = useCallback(
    num => {
      setFocusItem(num - 1);
      router.push('/admin/setting');
    },
    [focusItem],
  );

  const handToggleInviteModal = useCallback(
    num => {
      setFocusItem(num);
      dispatch(updateTeamSeq(num));
      dispatch(isShow({ isShow: true, type: 'inviteTeamMember' }));
    },
    [focusItem],
  );

  console.log(focusItem, parentsIndex, teamSeq);
  useEffect(() => {
    if (modalType === '') {
      setFocusItem(null);
    }
    if (modalType == 'firstCreateTeam') {
      setFocusItem('first');
    }
  }, [modalType]);

  return (
    <FlexBox
      direction={'column'}
      align={'flex-start'}
      column={'flex-start'}
      onClick={() => onClick(item)}
      style={{ ...itemBox(modalType, isFirstCreateTeam, isInviteModal, parentsIndex, focusItem) }}
    >
      <FlexBox style={{ marginBottom: '15px' }} justify={'space-between'} align={'center'}>
        <span css={[heading5_bold, textStyle]}>{teamName}</span>
        <Icon
          name={'ACTION_SETTING'}
          size={24}
          onClick={
            modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember' ? () => console.log('1') : () => handleChangeTeamName(parentsIndex)
          }
          style={{ cursor: modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember' ? 'not-allowed' : 'pointer' }}
        />
      </FlexBox>

      <FlexBox justify={'flex-start'} align={'center'} wrap={'wrap'}>
        {memberList?.map((item, index) => {
          return (
            <Fragment key={index}>
              <ProfileIcon
                name={item?.userName?.slice(0, 1)}
                backgroundColor={
                  item?.userId === userInfo?.userId && parentsIndex === teamSeq ? '#cfffac' : parentsIndex === teamSeq ? profileColor[index] : 'grey'
                }
                size={'20px'}
                fontStyle={caption2_bold}
                margin={'0 6px 0 0'}
              />
              {index + 1 === memberList?.length ? (
                <IconButton
                  onClick={
                    modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember'
                      ? () => console.log('1')
                      : () => handToggleInviteModal(item.teamSeq)
                  }
                  style={{ cursor: modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember' ? 'not-allowed' : 'pointer' }}
                  name={'ACTION_ADD_CIRCLE'}
                />
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
  cursor: pointer;
  ${modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember'
    ? `
    position: relative;
    z-index: 503;
    width: 240px;
  `
    : ''}
  ${parentsIndex === focusItem || focusItem === 'first'
    ? `
    z-index: 503;
    background: white;
  `
    : `
    z-index: -1;
  `}
`;
const textStyle = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;