import React from 'react';
import { ComponentMeta } from '@storybook/react';
// Styles
import { css } from '@emotion/react';
import GridBox from '../../components/atoms/GridBox';
import {
  body1_bold,
  body1_medium,
  body1_regular,
  body2_bold,
  body2_medium,
  body2_regular,
  body3_bold,
  body3_medium,
  body3_regular,
  caption1_bold,
  caption1_medium,
  caption1_regular,
  caption2_bold,
  caption2_medium,
  caption2_regular,
  heading1_bold,
  heading1_medium,
  heading1_regular,
  heading2_bold,
  heading2_medium,
  heading2_regular,
  heading3_bold,
  heading3_medium,
  heading3_regular,
  heading4_bold,
  heading4_medium,
  heading4_regular,
  heading5_bold,
  heading5_medium,
  heading5_regular,
} from '../../styles/FontStyles';

export default {
  title: 'ATOMS/Typography',
  component: GridBox,
} as ComponentMeta<typeof GridBox>;

const titleStyle = [
  heading1_bold,
  css`
    font-size: 35px;
    margin-bottom: 20px;
  `,
];

export const AllTypography = () => (
  <GridBox lg={2} md={2} sm={2}>
    <div>
      <h1 css={heading1_bold}>Heading1 bold</h1>
      <h1 css={heading1_medium}>Heading1 medium</h1>
      <h1 css={heading1_regular}>Heading1 regular</h1>
      <br />
      <h2 css={heading2_bold}>Heading2 bold</h2>
      <h2 css={heading2_medium}>Heading2 medium</h2>
      <h2 css={heading2_regular}>Heading2 regular</h2>
      <br />
      <h3 css={heading3_bold}>Heading3 bold</h3>
      <h3 css={heading3_medium}>Heading3 medium</h3>
      <h3 css={heading3_regular}>Heading3 regular</h3>
      <br />
      <h4 css={heading4_bold}>Heading4 bold</h4>
      <h4 css={heading4_medium}>Heading4 medium</h4>
      <h4 css={heading4_regular}>Heading4 regular</h4>
      <br />
      <h5 css={heading5_bold}>Heading5 bold</h5>
      <h5 css={heading5_medium}>Heading5 medium</h5>
      <h5 css={heading5_regular}>Heading5 regular</h5>
    </div>

    <div>
      <p css={body1_bold}>Body1 bold</p>
      <p css={body1_medium}>Body1 medium</p>
      <p css={body1_regular}>Body1 regular</p>
      <br />
      <p css={body2_bold}>Body2 bold</p>
      <p css={body2_medium}>Body2 medium</p>
      <p css={body2_regular}>Body2 regular</p>
      <br />
      <p css={body3_bold}>Body3 bold</p>
      <p css={body3_medium}>Body3 medium</p>
      <p css={body3_regular}>Body3 regular</p>
      <br />
      <p css={caption1_bold}>Caption1 bold</p>
      <p css={caption1_medium}>Caption1 medium</p>
      <p css={caption1_regular}>Caption1 regular</p>
      <br />
      <p css={caption2_bold}>Caption2 bold</p>
      <p css={caption2_medium}>Caption2 medium</p>
      <p css={caption2_regular}>Caption2 regular</p>
    </div>
  </GridBox>
);
