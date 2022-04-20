import React, { useCallback, useState } from 'react';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { colors } from '../../../styles/Common.styles';
import Image from 'next/image';
import { css } from '@emotion/react';
import ProfileIcon from '../../atoms/ProfileIcon';
import ProfilePopover from '../../atoms/ProfilePopover';

const CommonHeader = () => {
  const [focusProfile, setFocusProfile] = useState<boolean>(false);

  const test = useCallback(() => {
    setFocusProfile(prev => !prev);
  }, [focusProfile]);

  return (
    <FlexBox
      style={{ boxSizing: 'border-box' }}
      padding={'12px 40px'}
      justify={'space-between'}
      align={'center'}
      height={'64px'}
      backgroundColor={colors.grey._3c}
    >
      <FlexBox justify={'flex-start'} align={'center'}>
        <Icon name={'LOGO_ICON'} size={40} />
        <img
          src={'https://diby-storage.s3.ap-northeast-2.amazonaws.com/static/images/diby_white1.png'}
          alt={'Logo'}
          style={{ width: '56px', height: '30px' }}
        />
      </FlexBox>

      {/*<div css={profileCircle}>J</div>*/}
      <FlexBox justify={'flex-end'} align={'center'}>
        <FlexBox justify={'flex-end'} align={'center'} onClick={test} style={{ cursor: 'pointer' }}>
          <ProfileIcon name={'J'} backgroundColor={profileCircle[4]} />
          <Icon name={'NAVIGATION_CHEVRON_DOWN'} style={{ marginLeft: '8px' }} size={24} />
        </FlexBox>

        <ProfilePopover display={focusProfile} />
      </FlexBox>
    </FlexBox>
  );
};

export default CommonHeader;

const profileCircle = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
