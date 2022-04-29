import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import TextButton from '../../../components/atoms/Button/TextButton';
// Styles

export default {
  title: 'ATOMS/Buttons',
  component: TextButton,
} as ComponentMeta<typeof TextButton>;

const Template: ComponentStory<typeof TextButton> = args => {
  return (
    <div style={{ padding: '10px' }}>
      <TextButton {...args} />
    </div>
  );
};

export const TextButtonComponent = Template.bind({});
TextButtonComponent.args = {
  text: '다음에 할게요',
  onClick: () => console.log('Text Button'),
};
