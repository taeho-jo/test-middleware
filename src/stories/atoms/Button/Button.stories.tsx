import React from 'react';
import { ComponentMeta } from '@storybook/react';
// Components
import FlexBox from '../../../components/atoms/FlexBox';
import { body2_regular, heading1_bold, heading5_medium } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import { css } from '@emotion/react';
import BasicButton from '../../../components/atoms/Button/BasicButton';
import IconButton from '../../../components/atoms/Button/IconButton';
import TextButton from '../../../components/atoms/Button/TextButton';
import IconTextButton from '../../../components/atoms/Button/IconTextButton';
// Styles

export default {
  title: 'ATOMS/Buttons',
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

export const AllButton = () => {
  const titleStyle = [
    heading1_bold,
    css`
      margin-bottom: 20px;
    `,
  ];

  const subTitleStyle = [
    body2_regular,
    css`
      display: block;
      margin-bottom: 10px;
    `,
  ];

  return (
    <>
      <FlexBox justify={'flex-start'} align={'flex-start'} direction={'column'}>
        <h2 css={titleStyle}>Basic Button</h2>
        <FlexBox justify={'flex-start'} align={'flex-start'} width={'100%'} direction={'column'}>
          <FlexBox justify={'flex-start'} align={'flex-start'}>
            <div css={{ flex: 1, padding: '10px' }}>
              <h3 css={subTitleStyle}>📍light Button</h3>
              <BasicButton theme={'light'} status={'normal'} />
            </div>

            <div css={{ flex: 1, padding: '10px' }}>
              <h3 css={subTitleStyle}>📍light Hover Button</h3>
              <BasicButton designBgColor={colors.cyan._700} theme={'light'} status={'normal'} />
            </div>

            <div css={{ flex: 1, padding: '10px' }}>
              <h3 css={subTitleStyle}>📍light Disable Button</h3>
              <BasicButton theme={'light'} status={'disabled'} />
            </div>
          </FlexBox>

          <FlexBox justify={'flex-start'} align={'flex-start'} style={{ marginTop: '20px' }}>
            <div css={{ flex: 1, padding: '10px' }}>
              <h3 css={subTitleStyle}>📍Dark Button</h3>
              <BasicButton theme={'dark'} status={'normal'} />
            </div>

            <div css={{ flex: 1, padding: '10px' }}>
              <h3 css={subTitleStyle}>📍Dark Hover Button</h3>
              <BasicButton designBgColor={colors.grey._2c} theme={'dark'} status={'normal'} />
            </div>

            <div css={{ flex: 1, padding: '10px' }}>
              <h3 css={subTitleStyle}>📍Dark Disable Button</h3>
              <BasicButton theme={'dark'} status={'disabled'} />
            </div>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox justify={'flex-start'} align={'flex-start'} direction={'column'} style={{ marginTop: '20px' }}>
        <h2 css={titleStyle}>Icon Button</h2>
        <FlexBox justify={'flex-start'} align={'flex-start'} wrap={'wrap'} width={'100%'}>
          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'GOOGLE'} />
            <p>GOOGLE</p>
          </FlexBox>
          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'ACTION_CREATE'} />
            <p>ACTION_CREATE</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'ACTION_SETTING'} />
            <p>ACTION_SETTING</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'ACTION_MORE'} />
            <p>ACTION_MORE</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'NAVIGATION_ARROW_LEFT'} />
            <p>NAVIGATION_ARROW_LEFT</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'NAVIGATION_ARROW_RIGHT'} />
            <p>NAVIGATION_ARROW_RIGHT</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'NAVIGATION_CHEVRON_DOWN'} />
            <p>NAVIGATION_CHEVRON_DOWN</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'NAVIGATION_CHEVRON_RIGHT'} />
            <p>NAVIGATION_CHEVRON_RIGHT</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'NAVIGATION_CLOSE_LG'} />
            <p>NAVIGATION_CLOSE_LG</p>
          </FlexBox>

          <FlexBox justify={'center'} align={'center'} direction={'column'} style={{ padding: '10px', width: '20%' }}>
            <IconButton name={'NAVIGATION_CLOSE_SM'} />
            <p>NAVIGATION_CLOSE_SM</p>
          </FlexBox>
        </FlexBox>
      </FlexBox>

      <FlexBox justify={'flex-start'} align={'flex-start'} direction={'column'} style={{ marginTop: '20px' }}>
        <h2 css={titleStyle}>Text Button</h2>
        <TextButton textStyle={heading5_medium} text={'다음에 할게요'} />
      </FlexBox>

      <FlexBox justify={'flex-start'} align={'flex-start'} direction={'column'} style={{ marginTop: '20px' }}>
        <h2 css={titleStyle}>IconText Button</h2>

        <FlexBox justify={'flex-start'} align={'flex-start'}>
          <div css={{ flex: 1, padding: '10px' }}>
            <h3 css={subTitleStyle}>📍Border Right Button</h3>
            <IconTextButton disabled={false} name={'NAVIGATION_CHEVRON_RIGHT'} textStyle={heading5_medium} />
          </div>

          <div css={{ flex: 1, padding: '10px' }}>
            <h3 css={subTitleStyle}>📍No Border Right Button</h3>
            <IconTextButton disabled={false} name={'NAVIGATION_CHEVRON_RIGHT'} textStyle={heading5_medium} roundBorder={false} />
          </div>
        </FlexBox>
      </FlexBox>
    </>
  );
};
