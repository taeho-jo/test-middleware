import Button from './index';
import { render } from '@testing-library/react';
import React from 'react';

describe('atoms/Button', () => {
  it('matches snapshot', () => {
    const utils = render(
      <Button size={'sm'} bgColor={'primary'} loading={true} active={false} />,
    );
    expect(utils.container).toMatchSnapshot();
  });
});
