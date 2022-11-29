import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import { body2_regular, caption1_regular, heading1_bold } from '../../../styles/FontStyles';
import Input from '../../../components/atoms/Input';
import { useForm } from 'react-hook-form';
import FlexBox from '../../../components/atoms/FlexBox';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
// Styles

export default {
  title: 'ATOMS/Input',
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
        <h2 css={titleStyle}>None Input</h2>
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
            style={{ border: `2px solid ${colors.grey._3c}`, padding: '9px 16px' }}
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
            style={{ background: `${colors.grey._ec}`, cursor: 'not-allowed' }}
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
            style={{ border: `2px solid ${colors.cyan._500}`, padding: '9px 16px' }}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍error Button</h3>
          <Input
            register={register}
            pattern="[A-Za-z0-9]{4,10}"
            required
            label={'name'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>
      </FlexBox>

      <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ padding: '10px' }}>
        <h2 css={titleStyle}>Value Input</h2>
        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍inactive_Input</h3>
          <Input
            defaultValue={'dbdlab@dbdlab.io'}
            register={register}
            label={'inactive'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍Focused Button</h3>
          <Input
            defaultValue={'dbdlab@dbdlab.io'}
            register={register}
            label={'focus'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
            style={{ border: `2px solid ${colors.grey._3c}`, padding: '9px 16px', fontWeight: 700 }}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍disabled Button</h3>
          <Input
            defaultValue={'dbdlab@dbdlab.io'}
            register={register}
            label={'disabled'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
            style={{ background: `${colors.grey._ec}`, cursor: 'not-allowed', color: `${colors.grey._99}` }}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍hover Button</h3>
          <Input
            defaultValue={'dbdlab@dbdlab.io'}
            register={register}
            label={'hover'}
            errors={errors}
            errorMsg={'필수 항목입니다.'}
            placeholder={'placeholder 입니다.'}
            disabled={false}
            style={{ border: `2px solid ${colors.cyan._500}`, padding: '9px 16px' }}
          />
        </FlexBox>

        <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ marginBottom: '20px' }}>
          <h3 css={subTitleStyle}>📍error Button</h3>
          <Input
            defaultValue={'dbdlab@dbdlab.io'}
            register={register}
            pattern="[A-Za-z0-9]{4,10}"
            required
            label={'error'}
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

export const InputComponent = () => {
  const {
    register,
    // setFocus,
    formState: { errors },
  } = useForm({});
  return (
    <>
      <Input
        title={'이메일'}
        pattern="[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}"
        type={'text'}
        register={register}
        label={'email'}
        errors={errors}
        errorMsg={'필수 항목입니다.'}
        placeholder={'placeholder 입니다.'}
        disabled={false}
      />
      <Input
        title={'비밀번호'}
        type={'password'}
        pattern="[A-Za-z0-9]{6,12}"
        // required
        register={register}
        label={'password'}
        errors={errors}
        errorMsg={'필수 항목입니다.'}
        placeholder={'비밀번호를 입력해주세요.'}
        // disabled={true}
      />
    </>
  );
};
