import React from 'react';
import { ComponentMeta } from '@storybook/react';
import FlexBox from '../../components/atoms/FlexBox';
import GridBox from '../../components/atoms/GridBox';
import { colors } from '../../styles/Common.styles';

export default {
  title: 'ATOMS/Colors',
  component: GridBox,
} as ComponentMeta<typeof GridBox>;

export const Colors = () => {
  return (
    <>
      <GridBox lg={1} md={1} sm={1}>
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox> </FlexBox>
          <FlexBox>300</FlexBox>
          <FlexBox>500</FlexBox>
          <FlexBox>700</FlexBox>
        </GridBox>

        {/*Green*/}
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox>Green</FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.green._300}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.green._500}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.green._700}>
              {' '}
            </FlexBox>
          </FlexBox>
        </GridBox>

        {/* Cyan */}
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox>Cyan</FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.cyan._300}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.cyan._500}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.cyan._700}>
              {' '}
            </FlexBox>
          </FlexBox>
        </GridBox>

        {/* Blue */}
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox>Blue</FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.blue._300}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.blue._500}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.blue._700}>
              {' '}
            </FlexBox>
          </FlexBox>
        </GridBox>

        {/* Violet */}
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox>Violet</FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.violet._300}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.violet._500}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.violet._700}>
              {' '}
            </FlexBox>
          </FlexBox>
        </GridBox>

        {/* Red */}
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox>Red</FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.red}>
              {' '}
            </FlexBox>
          </FlexBox>
        </GridBox>

        {/* Grey */}
        <GridBox lg={12} md={12} sm={12}>
          <FlexBox>Grey</FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.grey._fa}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.grey._ec}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.grey._cc}>
              {' '}
            </FlexBox>
          </FlexBox>
          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.grey._99}>
              {' '}
            </FlexBox>
          </FlexBox>

          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.grey._66}>
              {' '}
            </FlexBox>
          </FlexBox>

          <FlexBox>
            <FlexBox lg={8} md={8} height={'60px'} backgroundColor={colors.grey._3c}>
              {' '}
            </FlexBox>
          </FlexBox>
        </GridBox>
      </GridBox>
    </>
  );
};
