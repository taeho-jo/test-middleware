import React, { useCallback, useRef } from 'react';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold, heading5_regular } from '../../../styles/FontStyles';
import ProfileIcon from '../../atoms/ProfileIcon';
import Icon from '../../atoms/Icon';
import { profileColor } from '../../../common/util/commonVar';
import { css } from '@emotion/react';
import moment from 'moment';
import ClipLoader from 'react-spinners/ClipLoader';

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
}

const MemberList = ({ listData, isLoading, searchText }: PropsType) => {
  const cellsRef = useRef([]);
  const cellRef = useRef(null);

  const test = index => {
    // setSelected(index + 1);
    // cellRef.current = cellsRef.current[index];
    // const option = {
    //   x: getElementProperty('x'),
    //   y: window.pageYOffset + getElementProperty('y'),
    //   items: [
    //     {
    //       label: '참여 회원 목록',
    //       onClick: () => push('/'),
    //     },
    //     {
    //       label: '데이터 정제',
    //       onClick: () => push('/user/withdrawal'),
    //     },
    //     {
    //       label: '데이터 라벨링',
    //       onClick: () => push('/journey/screening'),
    //     },
    //   ],
    // };
    // dispatch(setLayerPopup(option));
  };

  const getList = useCallback(() => {
    if (isLoading) {
      return <ClipLoader />;
    }
    if (listData === null || listData === undefined) {
      return <div>팀원이 없습니다</div>;
    } else {
      if (searchText === '') {
        return listData.map((el, index) => {
          const { userId, userName, joinDate, teamRoleType } = el;
          return (
            <FlexBox key={index} style={{ borderTop: '1px solid #DCDCDC', position: 'relative' }}>
              <FlexBox justify={'flex-start'} style={{ padding: '17px 16px', width: '50%' }}>
                <div css={{ flex: 1 }}>
                  <ProfileIcon name={userName.slice(0, 1)} backgroundColor={profileColor[index]} />
                </div>

                <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={{ marginLeft: '24px' }}>
                  <span css={[heading5_regular, { marginBottom: '7px' }]}>{userName}</span>
                  <span css={[heading5_regular, { color: colors.grey._99 }]}>{userId}</span>
                </FlexBox>
              </FlexBox>

              <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
                <span css={heading5_regular}>{moment(joinDate).format('YYYY-MM-DD')}</span>
              </FlexBox>

              <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
                <span css={heading5_regular}>{teamRoleType}</span>
              </FlexBox>

              <FlexBox justify={'center'} align={'center'} style={{ padding: '17px 0', flex: 1 }}>
                <Icon
                  onClick={() => test(index)}
                  forwardref={(el: never) => (cellsRef.current[index] = el)}
                  name={'MORE_HORIZON'}
                  size={24}
                  style={{ cursor: 'pointer' }}
                />
              </FlexBox>
            </FlexBox>
          );
        });
      } else {
        const filterArr = listData.filter(el => el.userName === searchText);
        console.log(filterArr, 'filter aRr');
        return filterArr.map((el, index) => {
          const { userId, userName, joinDate, teamRoleType } = el;
          return (
            <FlexBox key={index} style={{ borderTop: '1px solid #DCDCDC' }}>
              <FlexBox justify={'flex-start'} style={{ padding: '17px 16px', width: '50%' }}>
                <div css={{ flex: 1 }}>
                  <ProfileIcon name={userName.slice(0, 1)} backgroundColor={profileColor[index]} />
                </div>

                <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={{ marginLeft: '24px' }}>
                  <span css={[heading5_regular, { marginBottom: '7px' }]}>{userName}</span>
                  <span css={[heading5_regular, { color: colors.grey._99 }]}>{userId}</span>
                </FlexBox>
              </FlexBox>

              <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
                <span css={heading5_regular}>{moment(joinDate).format('YYYY-MM-DD')}</span>
              </FlexBox>

              <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
                <span css={heading5_regular}>{teamRoleType}</span>
              </FlexBox>

              <FlexBox justify={'center'} align={'center'} style={{ padding: '17px 0', flex: 1 }}>
                <Icon onClick={() => test(index)} forwardref={cellRef} name={'MORE_HORIZON'} size={24} style={{ cursor: 'pointer' }} />
              </FlexBox>
            </FlexBox>
          );
        });
      }
    }
  }, [listData, isLoading, searchText]);

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
