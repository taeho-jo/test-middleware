import React, { Fragment } from 'react';
// Components
import FlexBox from '../../atoms/FlexBox';
import ProfileIcon from '../../atoms/ProfileIcon';
import Button from '../../atoms/Button';
import Icon from '../../atoms/Icon';
// Styles
import { css } from '@emotion/react';
import { caption2_bold, heading5_bold } from '../../../styles/FontStyles';
import { profileColor } from '../../../common/util/commonVar';

interface PropsType {
  teamName?: string;
  memberList?: string[];
}

const AdminSideTeamListItem = ({ teamName = 'dbdlab의 팀', memberList }: PropsType) => {
  return (
    <FlexBox direction={'column'} align={'flex-start'} column={'flex-start'} style={{ ...itemBox }}>
      <FlexBox style={{ marginBottom: '15px' }} justify={'space-between'} align={'center'}>
        <span css={[heading5_bold]}>{teamName}</span>
        <Icon name={'ACTION_SETTING'} size={24} />
      </FlexBox>

      <FlexBox justify={'flex-start'}>
        {memberList.map((item, index) => {
          return (
            <Fragment key={index}>
              <ProfileIcon name={item} backgroundColor={profileColor[index]} size={'20px'} fontStyle={caption2_bold} margin={'0 4px 0 0'} />
            </Fragment>
          );
        })}
        <Button buttonType={'icon'} icon={'ACTION_CREATE'} size={24} />
      </FlexBox>
    </FlexBox>
  );
};

export default AdminSideTeamListItem;

const itemBox = css`
  width: 100%;
  padding: 15px 24px;
`;
