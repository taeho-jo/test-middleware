import React from 'react';
import { render } from '@testing-library/react';
import PageTitle from './index';

describe('PageTitle', () => {
  it('page title', () => {
    const utils = render(<PageTitle title={'page title'} />);
    expect(utils.container).toMatchSnapshot();
  });
});
