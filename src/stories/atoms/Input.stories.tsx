import React from 'react';
import { ComponentMeta } from '@storybook/react';
// Components
import { caption1_regular, heading1_bold } from '../../styles/FontStyles';
import GridBox from '../../components/atoms/GridBox';
import Input from '../../components/atoms/Input';
import { useForm } from 'react-hook-form';
import FlexBox from '../../components/atoms/FlexBox';
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

  const titleStyle = {
    display: 'block',
  };

  return (
    <GridBox lg={1} md={1} sm={1}>
      <h2 css={heading1_bold}>Basic Button</h2>
      <GridBox lg={4} md={4} sm={4}>
        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>inactive_</span>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
            line={false}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>focused_</span>
          <Input
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            status={true}
            disabled={false}
            line={false}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>inacitve_value</span>
          <Input
            // validation={validation}
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            status={false}
            disabled={false}
            line={false}
          />
        </FlexBox>
      </GridBox>

      <GridBox lg={4} md={4} sm={4}>
        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>disabled_</span>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={true}
            line={false}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>disabled_value</span>
          <Input
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            disabled={true}
            line={false}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>error_</span>
          <Input
            validation={false}
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            status={true}
            disabled={false}
            line={false}
            registerOptions={{
              required: true,
              pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              // onBlur: () => setFocused(false),
            }}
          />
        </FlexBox>
      </GridBox>

      {/*Line*/}
      <h2 css={heading1_bold}>Line Button</h2>
      <GridBox lg={4} md={4} sm={4}>
        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>inactive_</span>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
            line={true}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>focused_</span>
          <Input
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            status={true}
            disabled={false}
            line={true}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>inacitve_value</span>
          <Input
            // validation={validation}
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            status={false}
            disabled={false}
            line={true}
          />
        </FlexBox>
      </GridBox>

      <GridBox lg={4} md={4} sm={4}>
        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>disabled_</span>
          <Input
            register={register}
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={true}
            line={true}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>disabled_value</span>
          <Input
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            disabled={true}
            line={true}
          />
        </FlexBox>

        <FlexBox display={'block'} padding={'20px'}>
          <span css={caption1_regular}>error_</span>
          <Input
            validation={false}
            register={register}
            label={'name1'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            defaultValue={'DefaultValue'}
            status={true}
            disabled={false}
            line={true}
            registerOptions={{
              required: true,
              pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              // onBlur: () => setFocused(false),
            }}
          />
        </FlexBox>
      </GridBox>
    </GridBox>
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
