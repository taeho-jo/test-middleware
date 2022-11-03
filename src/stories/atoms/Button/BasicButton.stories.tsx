import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import BasicButton from '../../../components/atoms/Button/BasicButton';
// Styles

export default {
  title: 'ATOMS/Buttons',
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;

const Template: ComponentStory<typeof BasicButton> = args => {
  return (
    <div style={{ padding: '10px' }}>
      <BasicButton {...args} />
    </div>
  );
};

export const BasicButtonComponent = Template.bind({});
BasicButtonComponent.args = {
  text: '간편하게 시작하기',
  onClick: () => {
    return;
  },
};
