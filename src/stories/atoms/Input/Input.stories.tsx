import React from 'react';
import { ComponentMeta } from '@storybook/react';
// Components
import { body2_regular, caption1_regular, heading1_bold } from '../../../styles/FontStyles';
import GridBox from '../../../components/atoms/GridBox';
import Input from '../../../components/atoms/Input';
import { useForm } from 'react-hook-form';
import FlexBox from '../../../components/atoms/FlexBox';
import { css } from '@emotion/react';
// Styles

export default {
  title: 'ATOMS/Text Field',
  component: Input,
} as ComponentMeta<typeof Input>;

export const AllInput = () => {
  const {
    register,
    // setFocus,
    formState: { errors },
  } = useForm({});

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
    <FlexBox align={'flex-start'} justify={'flex-start'}>
      <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ padding: '10px' }}>
        <h2 css={titleStyle}>Basic Input</h2>
        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍inactive_Input</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍Focused Button</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍disabled Button</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍hover Button</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍error Button</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ padding: '10px' }}>
        <h2 css={titleStyle}>Basic Input</h2>
        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍inactive_Input</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍Focused Button</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍disabled Button</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍hover Button</h3>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍error Button</h3>
          <Input
            pattern="[A-Za-z0-9]{4,10}"
            required
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

// const Template: ComponentStory<typeof Input> = args => <Input {...args} />;
//
// export const InputComponent = Template.bind({});
// InputComponent.args = {
//   label: 'name',
//   register,
//   errors,
//   errorMsg: '필수 항목입니다.',
//   placeholder: 'placeholder 입니다.',
// };
