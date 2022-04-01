import React from 'react';
import { render } from '@testing-library/react';
import VerticalBarGraph from './index';
import { verticalData } from '../../../assets/dummy/dummyData';

describe('Vertical Bar Graph', () => {
  it('vertical bar graph', () => {
    const utils = render(<VerticalBarGraph data={verticalData} />);
    expect(utils.container).toMatchSnapshot();
  });
});
