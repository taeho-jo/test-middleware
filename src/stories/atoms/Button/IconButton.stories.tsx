import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import IconButton from '../../../components/atoms/Button/IconButton';
// Styles

export default {
  title: 'ATOMS/Buttons',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => {
  return (
    <div style={{ padding: '10px' }}>
      <IconButton {...args} />
    </div>
  );
};

export const IconButtonComponent = Template.bind({});
IconButtonComponent.args = {
  onClick: () => console.log('Icon Button'),
  name: 'NAVIGATION_CHEVRON_RIGHT',
};
