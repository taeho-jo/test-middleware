import React from 'react';
import { caption1_regular } from '../../../styles/FontStyles';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  content: any;
  style?: any;
  icon?: string;
}

const AnnouncementBox = ({ style, content, icon = 'ALERT_NORMAL' }: PropsType) => {
  return (
    <div css={[caption1_regular, notificationBox, style]}>
      <Icon name={icon} size={24} iconColor={colors.grey._cc} style={{ marginRight: '8px' }} />
      {content}
    </div>
  );
};

export default AnnouncementBox;

const notificationBox = css`
  background: ${colors.grey._f7};
  color: ${colors.grey._99};
  border-radius: 8px;
  height: auto;
  display: flex;
  padding: 4px 16px;
  align-items: center;
`;
