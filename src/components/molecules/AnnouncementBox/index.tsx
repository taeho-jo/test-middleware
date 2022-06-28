import React from 'react';
import { caption1_regular } from '../../../styles/FontStyles';
import Icon from '../../atoms/Icon';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

interface PropsType {
  content: any;
  style?: any;
  icon?: string;
  color?: string;
}

const AnnouncementBox = ({ style, content, icon = 'ALERT_NORMAL', color = colors.grey._99 }: PropsType) => {
  return (
    <div css={[caption1_regular, notificationBox(color), style]}>
      <Icon name={icon} size={24} iconColor={colors.grey._cc} style={{ marginRight: '8px' }} />
      {/*<div  />*/}
      <span css={{ marginLeft: '8px' }} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default AnnouncementBox;

const notificationBox = color => css`
  background: ${colors.grey._f7};
  color: ${color};
  border-radius: 8px;
  height: auto;
  display: flex;
  padding: 4px 16px;
  align-items: center;
`;
