import React from 'react';
import { render } from '@testing-library/react';
import FlexBox from './index';

describe('Flex Box', () => {
  it('flex width grid', () => {
    const utils = render(<FlexBox lg={12}>테스트</FlexBox>);
    expect(utils.container).toMatchSnapshot();
  });

  it('flex width grid', () => {
    const utils = render(<FlexBox lg={10}>테스트</FlexBox>);
    expect(utils.container).toMatchSnapshot();
  });
  it('flex width grid', () => {
    const utils = render(<FlexBox md={12}>테스트</FlexBox>);
    expect(utils.container).toMatchSnapshot();
  });
});
