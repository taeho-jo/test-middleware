import Icon from './index';
import { render } from '@testing-library/react';
import React from 'react';

describe('ICON', () => {
  it('test Icon', () => {
    const utils = render(<Icon name="TEST" />);
    expect(utils.container).toMatchSnapshot();
    // const wrapper = mount;
  });

  it('test Icon', () => {
    const utils = render(<Icon name="TEST" size={22} />);
    expect(utils.container).toMatchSnapshot();
    // const wrapper = mount;
  });
});
