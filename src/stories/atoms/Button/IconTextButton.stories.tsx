import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import BasicButton from '../../../components/atoms/Button/BasicButton';
import IconTextButton from '../../../components/atoms/Button/IconTextButton';
// Styles

export default {
  title: 'ATOMS/Buttons',
  component: IconTextButton,
} as ComponentMeta<typeof IconTextButton>;

const Template: ComponentStory<typeof IconTextButton> = args => {
  return (
    <div style={{ padding: '10px' }}>
      <IconTextButton {...args} />
    </div>
  );
};

export const IconTextButtonComponent = Template.bind({});
IconTextButtonComponent.args = {
  name: 'NAVIGATION_CHEVRON_RIGHT',

  onClick: () => console.log('IconText Button'),
};
