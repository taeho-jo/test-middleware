import React from 'react';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold, heading5_regular } from '../../../styles/FontStyles';
import ProfileIcon from '../../atoms/ProfileIcon';
import Icon from '../../atoms/Icon';

interface PropsType {
  listData: {
    userId: string;
    userName: string;
    joinDate: string;
    authority: string;
  };
}
const MemberList = ({ listData }) => {
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
      <FlexBox style={{ borderTop: '1px solid #DCDCDC', borderBottom: '1px solid #DCDCDC' }}>
        <FlexBox justify={'flex-start'} style={{ padding: '17px 16px', width: '50%' }}>
          <div css={{ flex: 1 }}>
            <ProfileIcon />
          </div>

          <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={{ marginLeft: '24px' }}>
            <span css={[heading5_regular, { marginBottom: '7px' }]}>#amykim</span>
            <span css={[heading5_regular, { color: colors.grey._99 }]}>#amykim@dbdlab.io</span>
          </FlexBox>
        </FlexBox>

        <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
          <span css={heading5_regular}>#2022.05.31</span>
        </FlexBox>

        <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
          <span css={heading5_regular}>#관리자</span>
        </FlexBox>

        <FlexBox justify={'center'} align={'center'} style={{ padding: '17px 0', flex: 1 }}>
          <Icon name={'MORE_HORIZON'} size={24} style={{ cursor: 'pointer' }} />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default MemberList;
