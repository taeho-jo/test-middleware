import React from 'react';
import Image from 'next/image';
// Redux
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
// Style
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import FlexBox from '../../../components/atoms/FlexBox';
// Images
import LogoIcon from '../../../assets/logoIcon.png';
import LogoText from '../../../assets/logoText.png';
import Button from '../../../components/atoms/Button';
import ProfileIcon from '../../../components/atoms/ProfileIcon';
import Icon from '../../../components/atoms/Icon';

const Header = () => {
  const token = useSelector<ReducerType, string>(state => state.auth.token);

  const headerStyle = {
    maxWidth: `1480px`,
    minWidth: `1280px`,
  };
  return (
    <>
      {token ? (
        <FlexBox padding={'0 25.5px 0 40px'} height={'64px'} backgroundColor={colors.grey._3c} justify={'space-between'} align={'center'}>
          <FlexBox align={'center'} justify={'flex-start'}>
            <img css={marginStyle} src={LogoIcon.src} alt="logo" />
            <img src={LogoText.src} alt="diby" />
          </FlexBox>
          <FlexBox align={'center'} justify={'flex-end'}>
            <ProfileIcon size={'32px'} margin={'0 7.5px 0 0'} />
            <Icon name={'NAVIGATION_CHEVRON_DOWN'} size={24} />
          </FlexBox>
        </FlexBox>
      ) : (
        <FlexBox height={'64px'} backgroundColor={colors.grey._3c} justify={'center'} align={'center'}>
          <FlexBox style={[headerStyle]} height={'36px'} backgroundColor={''} justify={'space-between'} align={'center'}>
            <img style={{ width: '53px' }} src={LogoText.src} alt="DibyLogo" />
            <div>
              <Button btnText={'Use cases'} buttonType={'basic'} backgroundColor={colors.grey._3c} isLoading={false} />
              <Button btnText={'Feature'} buttonType={'basic'} backgroundColor={colors.grey._3c} isLoading={false} />
              <Button btnText={'Pricing'} buttonType={'basic'} backgroundColor={colors.grey._3c} isLoading={false} />
            </div>
            <div>
              <Button btnText={'로그인'} buttonType={'basic'} backgroundColor={colors.grey._3c} isLoading={false} />
              <Button buttonType={'basic'} isLoading={false} />
            </div>
          </FlexBox>
        </FlexBox>
      )}
    </>
  );
};

export default Header;

const marginStyle = css`
  margin-right: 12px;
  background-color: transparent;
`;
