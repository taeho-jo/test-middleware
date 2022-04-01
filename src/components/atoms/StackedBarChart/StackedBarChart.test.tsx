import React from 'react';
import { render } from '@testing-library/react';
import StackedBarChart from './index';

describe('Stacked Bar Chart', () => {
  it('stacked bar chart', () => {
    const utils = render(<StackedBarChart />);
    expect(utils.container).toMatchSnapshot();
  });
});
