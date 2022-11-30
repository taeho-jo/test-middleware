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
import { profileColor, profileColor2 } from '../../../common/util/commonVar';

import { ReducerType } from '../../../store/reducers';
import { memberListType, TeamListType, updateTeamSeq } from '../../../store/reducers/teamReducer';
import { useRouter } from 'next/router';
import { colors } from '../../../styles/Common.styles';
import { getBackgroundColor } from '../../../common/util/commonFunc';
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

  const handleChangeTeamName = (e: any, num: any) => {
    e.stopPropagation();
    setFocusItem(num - 1);
    router.push('/admin/setting');
  };
  const handToggleInviteModal = useCallback(
    (e, num) => {
      e.stopPropagation();
      setFocusItem(num);
      dispatch(updateTeamSeq(num));
      dispatch(isShow({ isShow: true, type: 'inviteTeamMember' }));
    },
    [focusItem],
  );

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
      style={[hoverShadow, { ...itemBox(modalType, isFirstCreateTeam, isInviteModal, parentsIndex, focusItem) }]}
    >
      <FlexBox style={{ marginBottom: '15px' }} justify={'space-between'} align={'center'}>
        <span css={[heading5_bold, textStyle]}>{teamName}</span>
        <Icon
          name={'ACTION_SETTING'}
          size={24}
          onClick={
            modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember'
              ? () => {
                  return;
                }
              : e => handleChangeTeamName(e, parentsIndex)
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
                  item?.userId === userInfo?.userId && parentsIndex === teamSeq
                    ? profileColor
                    : parentsIndex == teamSeq
                    ? getBackgroundColor(index)
                    : 'grey'
                }
                size={'20px'}
                fontStyle={caption2_bold}
                margin={'3px'}
              />
              {index + 1 === memberList?.length ? (
                <IconButton
                  onClick={
                    modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember'
                      ? () => console.log('1')
                      : e => handToggleInviteModal(e, item.teamSeq)
                  }
                  style={{ cursor: modalType === 'firstCreateTeam' || modalType === 'inviteTeamMember' ? 'not-allowed' : 'pointer' }}
                  name={'ACTION_ADD_CIRCLE'}
                  size={24}
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
const hoverShadow = css`
  border-bottom: 1px solid #dcdcdc;
  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
`;
