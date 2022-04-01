import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GridBox from '../../components/atoms/GridBox';

export default {
  title: 'ATOMS/Grid',
  component: GridBox,
} as ComponentMeta<typeof GridBox>;

const Template: ComponentStory<typeof GridBox> = args => (
  <GridBox {...args}>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
    <GridBox
      lg={1}
      md={1}
      sm={1}
      backgroundColor={'orange'}
      border={'2px solid white'}
    >
      1
    </GridBox>
  </GridBox>
);
export const Grid = Template.bind({});
Grid.args = {
  lg: 4,
  md: 4,
  sm: 2,
  gutter: 8,
  backgroundColor: 'pink',
  padding: '0 30px',
};
