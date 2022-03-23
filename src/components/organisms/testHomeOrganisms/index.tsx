import React from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import Button from '../../atoms/Button';
import GridBox from '../../atoms/GridBox';
import { colors } from '../../../styles/Common.styles';

const TestHomeOrganisms = () => {
  return (
    <>
      <PageTitle title={'Diby 0.1 setting Test Home'} />
      <FlexBox>
        <Button buttonType={'basic'} backgroundColor={colors.red} />
        <Button buttonType={'basic'} backgroundColor={colors.grey._3c} />
        <Button buttonType={'basic'} backgroundColor={colors.cyan._500} />
        <Button buttonType={'action'} icon={'NAVIGATION_CHEVRON_RIGHT'} />
        <Button buttonType={'icon'} icon={'ACTION_CREATE'} />
      </FlexBox>

      <FlexBox backgroundColor={'pink'} wrap={'wrap'} justify={'flex-start'} padding={'20px 0px'}>
        <FlexBox lg={4} md={4}>
          <FlexBox border={'1px solid red'}>lg 6</FlexBox>
        </FlexBox>
        <FlexBox lg={4} md={4}>
          <FlexBox border={'1px solid red'}>lg 4</FlexBox>
        </FlexBox>
        <FlexBox lg={4} md={4}>
          <FlexBox border={'1px solid red'}>lg 2</FlexBox>
        </FlexBox>
      </FlexBox>

      <GridBox lg={12} md={12} sm={12} gutter={8}>
        <FlexBox column={'1/8'} row={'1/4'} border={'2px solid red'}>
          lg 1
        </FlexBox>
        <FlexBox border={'2px solid red'}>lg 2</FlexBox>
        <FlexBox border={'2px solid red'}>lg 3</FlexBox>
        <FlexBox border={'2px solid red'}>lg 4</FlexBox>
        <FlexBox border={'2px solid red'}>lg 5</FlexBox>
        <FlexBox border={'2px solid red'}>lg 6</FlexBox>
        <FlexBox border={'2px solid red'}>lg 7</FlexBox>
        <FlexBox border={'2px solid red'}>lg 8</FlexBox>
        <FlexBox border={'2px solid red'}>lg 9</FlexBox>
        <FlexBox border={'2px solid red'}>lg 10</FlexBox>
        <FlexBox border={'2px solid red'}>lg 11</FlexBox>
        <FlexBox border={'2px solid red'}>lg 12</FlexBox>
        <FlexBox border={'2px solid red'}>lg 13</FlexBox>
        <FlexBox border={'2px solid red'}>lg 14</FlexBox>
      </GridBox>
    </>
  );
};

export default TestHomeOrganisms;
