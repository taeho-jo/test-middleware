import Button from './index';
import { render } from '@testing-library/react';
import React from 'react';

describe('Button', () => {
  it('loading button', () => {
    const utils = render(
      <Button loading={true} />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('active button', () => {
    const utils = render(
      <Button active={true} />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('large button', () => {
    const utils = render(
      <Button size={'lg'} />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('border button', () => {
    const utils = render(
      <Button border={'none'} />,
    );
    expect(utils.container).toMatchSnapshot();
  });
});

