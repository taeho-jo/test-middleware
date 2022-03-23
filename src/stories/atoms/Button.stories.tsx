import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import FlexBox from '../../components/atoms/FlexBox';
import Button from '../../components/atoms/Button';
import { body2_regular, heading1_bold } from '../../styles/FontStyles';
import { colors } from '../../styles/Common.styles';
import GridBox from '../../components/atoms/GridBox';
import { css } from '@emotion/react';
// Styles

export default {
  title: 'ATOMS/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const AllButton = () => {
  console.log(`${colors.cyan._500}`, '!!');

  const titleStyle = [
    heading1_bold,
    css`
      margin-top: 20px;
    `,
  ];

  const subTitleStyle = [
    body2_regular,
    css`
      display: block;
      margin-top: 10px;
    `,
  ];

  return (
    <GridBox lg={1} md={1} sm={1}>
      <GridBox lg={1} md={1} sm={1}>
        <span css={heading1_bold}>Basic Button</span>
        <GridBox lg={1} md={1} sm={1}>
          <div>
            <span css={subTitleStyle}>Active Button</span>
            <Button buttonType={'basic'} isLoading={false} />
          </div>

          <div>
            <span css={subTitleStyle}>Loading Button</span>
            <Button buttonType={'basic'} isLoading={true} />
          </div>
        </GridBox>
      </GridBox>
      <GridBox lg={1} md={1} sm={1}>
        <span css={titleStyle}>Action Button</span>
        <FlexBox justify={'flex-start'}>
          <Button full={false} buttonType={'action'} />
        </FlexBox>
      </GridBox>
      <GridBox lg={1} md={1} sm={1}>
        <span css={titleStyle}>Icon Button</span>
        <FlexBox justify={'flex-start'}>
          <Button full={false} buttonType={'icon'} icon="ACTION_CREATE" />
        </FlexBox>
      </GridBox>
    </GridBox>
  );
};

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  buttonType: 'basic',
};
