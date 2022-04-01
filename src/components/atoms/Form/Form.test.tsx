import React from 'react';
import { render } from '@testing-library/react';
import Form from './index';

describe('Form', () => {
  it('form', () => {
    const utils = render(<Form onSubmit={() => console.log('123')}>아아</Form>);
    expect(utils.container).toMatchSnapshot();
  });
});
