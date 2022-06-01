import React, { useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold, heading5_regular } from '../../../styles/FontStyles';
import ProfileIcon from '../../atoms/ProfileIcon';
import Icon from '../../atoms/Icon';
import { profileColor } from '../../../common/util/commonVar';
import { css } from '@emotion/react';

interface PropsType {
  listData: {
    userId: string;
    userName: string;
    joinDate: string;
    authority: string;
  }[];
}
const MemberList = ({ listData }: PropsType) => {
  const getList = useCallback(() => {
    if (listData === null || listData.length === 0) {
      return <div>팀원이 없습니다</div>;
    } else {
      return listData.map((el, index) => {
        const { userId, userName, joinDate, authority } = el;
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
              <span css={heading5_regular}>{joinDate}</span>
            </FlexBox>

            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>{authority}</span>
            </FlexBox>

            <FlexBox justify={'center'} align={'center'} style={{ padding: '17px 0', flex: 1 }}>
              <Icon name={'MORE_HORIZON'} size={24} style={{ cursor: 'pointer' }} />
            </FlexBox>
          </FlexBox>
        );
      });
    }
  }, [listData]);

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
`;
