import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import Icon from '../../components/atoms/Icon';
import FlexBox from '../../components/atoms/FlexBox';
import GridBox from '../../components/atoms/GridBox';
// Styles
import { css } from '@emotion/react';
import { caption1_regular, heading1_bold } from '../../styles/FontStyles';

export default {
  title: 'ATOMS/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const AllIcon = () => {
  const titleStyle = [
    heading1_bold,
    css`
      margin-top: 20px;
    `,
  ];

  return (
    <>
      <GridBox lg={1} md={1} sm={1}>
        <GridBox lg={2} md={2} sm={2}>
          <h2 css={heading1_bold}>ACTION_</h2>
        </GridBox>
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'ACTION_CREATE'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>CREATE</span>
          </FlexBox>

          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'ACTION_SETTING'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>SETTING</span>
          </FlexBox>

          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'ACTION_MORE'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>MORE</span>
          </FlexBox>
        </GridBox>
      </GridBox>

      {/* ============================ Navgation Icon ============================ */}
      <GridBox lg={1} md={1} sm={1}>
        <GridBox lg={2} md={2} sm={2}>
          <h2 css={titleStyle}>NAVIGATION_</h2>
        </GridBox>
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'NAVIGATION_ARROW_LEFT'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>ARROW_LEFT</span>
          </FlexBox>

          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'NAVIGATION_ARROW_RIGHT'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>ARROW_RIGHT</span>
          </FlexBox>

          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'NAVIGATION_CHEVRON_DOWN'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>CHEVRON_DOWN</span>
          </FlexBox>

          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'NAVIGATION_CHEVRON_RIGHT'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>CHEVRON_RIGHT</span>
          </FlexBox>

          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'NAVIGATION_CLOSE_LG'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>CLOSE_LG</span>
          </FlexBox>

          <FlexBox direction={'column'}>
            <FlexBox padding={'5px 0'}>
              <Icon name={'NAVIGATION_CLOSE_SM'} size={30} />
            </FlexBox>
            <span css={caption1_regular}>CLOSE_SM</span>
          </FlexBox>
        </GridBox>
      </GridBox>
    </>
  );
};

const Template: ComponentStory<typeof Icon> = args => <Icon {...args} />;

export const IconComponent = Template.bind({});
IconComponent.args = {
  name: 'ACTION_CREATE',
  size: 26,
};
