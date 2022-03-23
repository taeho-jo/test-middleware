import React from 'react';
import { Controller, useForm } from 'react-hook-form';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';

const initValue = { name: '', animal: { name: '', color: '' }, money: '' };

const TestFromBox2 = () => {
  const { control, handleSubmit } = useForm({
    mode: 'onSubmit',
    defaultValues: initValue,
  });

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name={'name'}
        control={control}
        render={({ field }) => {
          console.log('### field', field);
          return <input css={inputStyle} autoComplete={'off'} {...field} />;
        }}
      />

      <Controller
        name={'animal.name'}
        control={control}
        render={({ field }) => {
          console.log('### field', field);
          return <input css={inputStyle} autoComplete={'off'} {...field} />;
        }}
      />

      <Controller
        name={'animal.color'}
        control={control}
        render={({ field }) => {
          console.log('### field', field);
          return <input css={inputStyle} autoComplete={'off'} {...field} />;
        }}
      />

      <Controller
        name={'money'}
        control={control}
        render={({ field }) => {
          console.log('### field', field);
          return <input css={inputStyle} autoComplete={'off'} {...field} />;
        }}
      />

      <input type="submit" />
    </form>
  );
};

export default TestFromBox2;
// const fragmentStyle = css`
//   margin-bottom: 10px;
// `;
const inputStyle = css`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${colors.black};
  padding: 10px 12px;
  outline: none;
`;
//
// const errorStyle = css`
//   padding: 8px 0 0 8px;
//   color: #ef3b7d;
//   font-size: ${typography['12']};
// `;
