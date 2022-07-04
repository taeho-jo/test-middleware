import { css } from '@emotion/react';
import { colors } from './Common.styles';

const height30 = css`
  height: 30px;
  line-height: 30px;
`;
const height24 = css`
  height: 24px;
  line-height: 24px;
`;
const height22 = css`
  height: 22px;
  line-height: 22px;
`;
const height20 = css`
  height: 20px;
  line-height: 20px;
`;
const height18 = css`
  height: 18px;
  line-height: 18px;
`;
const height14 = css`
  height: 14px;
  line-height: 14px;
`;
const height12 = css`
  height: 12px;
  line-height: 12px;
`;

const font24 = css`
  font-size: 24px;
  color: ${colors.grey._3c};
`;
const font20 = css`
  font-size: 20px;
  color: ${colors.grey._3c};
`;
const font18 = css`
  font-size: 18px;
  color: ${colors.grey._3c};
`;
const font16 = css`
  font-size: 16px;
  color: ${colors.grey._3c};
`;
const font14 = css`
  font-size: 14px;
  color: ${colors.grey._3c};
`;
const font12 = css`
  font-size: 12px;
  color: ${colors.grey._3c};
`;
const font10 = css`
  font-size: 10px;
  color: ${colors.grey._3c};
`;

const fontBold = css`
  font-weight: 700;
`;
const fontMedium = css`
  font-weight: 500;
`;
const fontRegular = css`
  font-weight: 400;
`;

// heading1
const heading1_bold = [font24, fontBold, height30];
const heading1_medium = [font24, fontMedium, height30];
const heading1_regular = [font24, fontRegular, height30];
// heading2
const heading2_bold = [font20, fontBold, height24];
const heading2_medium = [font20, fontMedium, height24];
const heading2_regular = [font20, fontRegular, height24];
// heading3
const heading3_bold = [font18, fontBold, height24];
const heading3_medium = [font18, fontMedium, height24];
const heading3_regular = [font18, fontRegular, height24];
// heading4
const heading4_bold = [font16, fontBold, height20];
const heading4_medium = [font16, fontMedium, height20];
const heading4_regular = [font16, fontRegular, height20];
// heading5
const heading5_bold = [font14, fontBold, height18];
const heading5_medium = [font14, fontMedium, height18];
const heading5_regular = [font14, fontRegular, height18];
// body1
const body1_bold = [font18, fontBold, height22];
const body1_medium = [font18, fontMedium, height22];
const body1_regular = [font18, fontRegular, height22];
// body2
const body2_bold = [font16, fontBold, height20];
const body2_medium = [font16, fontMedium, height20];
const body2_regular = [font16, fontRegular, height20];
// body3
const body3_bold = [font14, fontBold, height18];
const body3_medium = [font14, fontMedium, height18];
const body3_regular = [font14, fontRegular, height18];
// caption1
const caption1_bold = [font12, fontBold, height14];
const caption1_medium = [font12, fontMedium, height14];
const caption1_regular = [font12, fontRegular, height14];
//caption2
const caption2_bold = [font10, fontBold, height12];
const caption2_medium = [font10, fontMedium, height12];
const caption2_regular = [font10, fontRegular, height12];

export {
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
};
