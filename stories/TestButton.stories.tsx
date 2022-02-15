import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
// Components
import Button from '../components/atoms/Button';
import FlexBox from '../components/atoms/FlexBox';
// Styles
import { commonStyles } from '../styles/Common.styles';

export default {
  title: 'ATOMS/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const AllButtons = () => (
  <>
    <h2>Active Button</h2>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'sm'} bgColor={'primary'} loading={false} active={true} />
      <Button size={'sm'} bgColor={'secondary'} loading={false} active={true} />
      <Button size={'sm'} bgColor={'danger'} loading={false} active={true} />
      <Button size={'sm'} bgColor={'gray'} loading={false} active={true} />
      <Button size={'sm'} bgColor={'black'} loading={false} active={true} />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'md'} bgColor={'primary'} loading={false} active={true} />
      <Button size={'md'} bgColor={'secondary'} loading={false} active={true} />
      <Button size={'md'} bgColor={'danger'} loading={false} active={true} />
      <Button size={'md'} bgColor={'gray'} loading={false} active={true} />
      <Button size={'md'} bgColor={'black'} loading={false} active={true} />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'lg'} bgColor={'primary'} loading={false} active={true} />
      <Button size={'lg'} bgColor={'secondary'} loading={false} active={true} />
      <Button size={'lg'} bgColor={'danger'} loading={false} active={true} />
      <Button size={'lg'} bgColor={'gray'} loading={false} active={true} />
      <Button size={'lg'} bgColor={'black'} loading={false} active={true} />
    </FlexBox>

    <h2 style={{ marginTop: '20px' }}>Outline Button</h2>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button
        border={'outline'}
        size={'sm'}
        bgColor={'primary'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'sm'}
        bgColor={'secondary'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'sm'}
        bgColor={'danger'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'sm'}
        bgColor={'gray'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'sm'}
        bgColor={'black'}
        loading={false}
        active={true}
      />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button
        border={'outline'}
        size={'md'}
        bgColor={'primary'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'md'}
        bgColor={'secondary'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'md'}
        bgColor={'danger'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'md'}
        bgColor={'gray'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'md'}
        bgColor={'black'}
        loading={false}
        active={true}
      />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button
        border={'outline'}
        size={'lg'}
        bgColor={'primary'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'lg'}
        bgColor={'secondary'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'lg'}
        bgColor={'danger'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'lg'}
        bgColor={'gray'}
        loading={false}
        active={true}
      />
      <Button
        border={'outline'}
        size={'lg'}
        bgColor={'black'}
        loading={false}
        active={true}
      />
    </FlexBox>

    <h2 style={{ marginTop: '20px' }}>Text Button</h2>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button
        border={'text'}
        size={'sm'}
        bgColor={'primary'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'sm'}
        bgColor={'secondary'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'sm'}
        bgColor={'danger'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'sm'}
        bgColor={'gray'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'sm'}
        bgColor={'black'}
        loading={false}
        active={true}
      />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button
        border={'text'}
        size={'md'}
        bgColor={'primary'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'md'}
        bgColor={'secondary'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'md'}
        bgColor={'danger'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'md'}
        bgColor={'gray'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'md'}
        bgColor={'black'}
        loading={false}
        active={true}
      />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button
        border={'text'}
        size={'lg'}
        bgColor={'primary'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'lg'}
        bgColor={'secondary'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'lg'}
        bgColor={'danger'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'lg'}
        bgColor={'gray'}
        loading={false}
        active={true}
      />
      <Button
        border={'text'}
        size={'lg'}
        bgColor={'black'}
        loading={false}
        active={true}
      />
    </FlexBox>

    <h2 style={{ marginTop: '20px' }}>Loading Button</h2>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'sm'} bgColor={'primary'} loading={true} active={true} />
      <Button size={'sm'} bgColor={'secondary'} loading={true} active={true} />
      <Button size={'sm'} bgColor={'danger'} loading={true} active={true} />
      <Button size={'sm'} bgColor={'gray'} loading={true} active={true} />
      <Button size={'sm'} bgColor={'black'} loading={true} active={true} />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'md'} bgColor={'primary'} loading={true} active={true} />
      <Button size={'md'} bgColor={'secondary'} loading={true} active={true} />
      <Button size={'md'} bgColor={'danger'} loading={true} active={true} />
      <Button size={'md'} bgColor={'gray'} loading={true} active={true} />
      <Button size={'md'} bgColor={'black'} loading={true} active={true} />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'lg'} bgColor={'primary'} loading={true} active={true} />
      <Button size={'lg'} bgColor={'secondary'} loading={true} active={true} />
      <Button size={'lg'} bgColor={'danger'} loading={true} active={true} />
      <Button size={'lg'} bgColor={'gray'} loading={true} active={true} />
      <Button size={'lg'} bgColor={'black'} loading={true} active={true} />
    </FlexBox>

    <h2 style={{ marginTop: '20px' }}>Disabled Button</h2>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'sm'} bgColor={'primary'} loading={false} active={false} />
      <Button size={'sm'} bgColor={'primary'} loading={true} active={false} />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'md'} bgColor={'primary'} loading={false} active={false} />
      <Button size={'md'} bgColor={'primary'} loading={true} active={false} />
    </FlexBox>
    <FlexBox justify={'flex-start'} align={'center'} padding={'0'}>
      <Button size={'lg'} bgColor={'primary'} loading={false} active={false} />
      <Button size={'lg'} bgColor={'primary'} loading={true} active={false} />
    </FlexBox>
  </>
);

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  bgColor: 'primary',
  loading: false,
  active: true,
};
// export const NotActiveSmall = Template.bind({});
// NotActiveSmall.args = {
//   ...Small.args,
//   active: false,
// };
//
// export const LoadingSmall = Template.bind({});
// LoadingSmall.args = {
//   ...NotActiveSmall.args,
//   loading: true,
// };
//
// export const Medium = Template.bind({});
// Medium.args = {
//   ...Small.args,
//   size: 'md',
// };
//
// export const NotActiveMedium = Template.bind({});
// NotActiveMedium.args = {
//   ...Medium.args,
//   size: 'md',
//   active: false,
// };
//
// export const LoadingMedium = Template.bind({});
// LoadingMedium.args = {
//   ...NotActiveMedium.args,
//   loading: true,
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   ...Small.args,
//   size: 'lg',
// };
//
// export const NotActiveLarge = Template.bind({});
// NotActiveLarge.args = {
//   ...Large.args,
//   active: false,
// };
//
// export const LoadingLarge = Template.bind({});
// LoadingLarge.args = {
//   ...NotActiveLarge.args,
//   loading: true,
// };
