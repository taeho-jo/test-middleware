import React, { useCallback, useEffect, useRef, useState } from 'react';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold, heading5_regular } from '../../../styles/FontStyles';
import ProfileIcon from '../../atoms/ProfileIcon';
import Icon from '../../atoms/Icon';
import { profileColor } from '../../../common/util/commonVar';
import { css } from '@emotion/react';
import moment from 'moment';
import ClipLoader from 'react-spinners/ClipLoader';
import { useRouter } from 'next/router';
import useGetElementProperty from '../../../hooks/useGetElementProperty';
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { ReducerType } from '../../../store/reducers';
import { setSelectTeamMember } from '../../../store/reducers/userReducer';

interface PropsType {
  isLoading: boolean;
  searchText: string;
  listData: {
    joinDate: string;
    teamSeq: string;
    userId: string;
    userName: string;
    teamRoleType?: string;
  }[];
  setPositionValue?: any;
  setFocus?: any;
  focus?: boolean;
  setTeamRoleType?: any;
}

const MemberList = ({ listData, isLoading, searchText, setPositionValue, setFocus, setTeamRoleType }: PropsType) => {
  const dispath = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const cellsRef = useRef([]);
  const cellRef = useRef(null);

  const [list, setList] = useState(null);
  const [myRole, setMyRole] = useState<string | null>(null);

  useEffect(() => {
    if (listData) {
      if (searchText) {
        const filterArr = listData.filter(el => el.userName === searchText);
        setList(filterArr);
      } else {
        setList(listData);
      }
    }
  }, [listData, searchText]);
  useEffect(() => {
    if (listData) {
      const myInfo = listData.filter(el => el.userId === userInfo.userId)?.[0]?.teamRoleType;
      setMyRole(myInfo);
    }
  }, [listData]);

  const { getElementProperty } = useGetElementProperty<HTMLElement>(cellRef);

  const handleClickDropdown = (index, teamRoleType, el) => {
    dispath(setSelectTeamMember(el));
    cellRef.current = cellsRef.current[index];
    const option = {
      x: getElementProperty('x'),
      y: window.pageYOffset + getElementProperty('y'),
    };
    setPositionValue(option);
    setTeamRoleType(teamRoleType);
    setFocus(true);
  };

  useOutsideClick(cellRef, () => {
    setFocus(false);
  });

  const getList = useCallback(() => {
    if (isLoading) {
      return <ClipLoader />;
    }
    if (list === null || list === undefined) {
      return <div>팀원이 없습니다</div>;
    } else {
      return list.map((el, index) => {
        const { userId, userName, joinDate, teamRoleType } = el;

        return (
          <FlexBox key={index} style={{ borderTop: '1px solid #DCDCDC', position: 'relative' }}>
            <FlexBox justify={'flex-start'} style={{ padding: '17px 16px', width: '50%' }}>
              <div css={{ flex: 1 }}>
                <ProfileIcon name={userName ? userName?.slice(0, 1) : '?'} backgroundColor={profileColor[index]} />
              </div>

              <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={{ marginLeft: '24px' }}>
                <span css={[heading5_regular, { marginBottom: '7px' }]}>
                  {userName
                    ? `${userName} ${joinDate ? '' : '(합류를 기다리는 중)'}`
                    : `${userId.split('@')[0]} ${joinDate ? '' : '(합류를 기다리는 중)'}`}
                </span>
                <span css={[heading5_regular, { color: colors.grey._99 }]}>{userId}</span>
              </FlexBox>
            </FlexBox>

            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>{joinDate ? moment(joinDate).format('YYYY-MM-DD') : '-'}</span>
            </FlexBox>

            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>{joinDate ? teamRoleType : '-'}</span>
            </FlexBox>

            <FlexBox justify={'center'} align={'center'} style={{ padding: '17px 0', flex: 1 }}>
              {myRole === '멤버' ? (
                userInfo.userId === userId ? (
                  <Icon
                    onClick={() => handleClickDropdown(index, 'myRole', el)}
                    forwardref={(el: never) => (cellsRef.current[index] = el)}
                    name={'MORE_HORIZON'}
                    size={24}
                    style={{ cursor: 'pointer' }}
                  />
                ) : null
              ) : (
                <Icon
                  onClick={() => handleClickDropdown(index, joinDate ? teamRoleType : 'invite', el)}
                  forwardref={(el: never) => (cellsRef.current[index] = el)}
                  name={'MORE_HORIZON'}
                  size={24}
                  style={{ cursor: 'pointer' }}
                />
              )}
            </FlexBox>
          </FlexBox>
        );
      });
    }
  }, [list, listData, isLoading, searchText]);

  return (
    <FlexBox justify={'flex-start'} direction={'column'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0px 40px 24px 40px' }}>
      {/*테이블 제목*/}
      <FlexBox justify={'flex-start'} align={'center'} style={{ borderTop: '1px solid #DCDCDC', padding: '4px 8px' }}>
        <FlexBox justify={'flex-start'} style={{ width: '50%', color: colors.grey._99 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>이름</span>
        </FlexBox>
        <FlexBox justify={'flex-start'} style={{ flex: 2 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>합류일</span>
        </FlexBox>
        <FlexBox justify={'flex-start'} style={{ flex: 2, color: colors.grey._99 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>권한</span>
        </FlexBox>
        <FlexBox justify={'flex-start'} style={{ flex: 1 }} />
      </FlexBox>

      {/*테이블 리스트*/}
      <div css={listBoxStyle}>{getList()}</div>
    </FlexBox>
  );
};

export default MemberList;

const listBoxStyle = css`
  width: 100%;
  height: 720px;
  overflow: scroll;
  position: relative;
`;
