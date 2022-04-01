import React from 'react';
import { render } from '@testing-library/react';
import SimpleBarChart from './index';
import { verticalData } from '../../../assets/dummy/dummyData';

describe('Simple Bar Chart', () => {
  it('simple bar chart', () => {
    const utils = render(<SimpleBarChart data={verticalData} />);
    expect(utils.container).toMatchSnapshot();
  });

  it('simple bar chart', () => {
    const utils = render(
      <SimpleBarChart data={verticalData} tooltip={false} />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('simple bar chart', () => {
    const utils = render(<SimpleBarChart data={verticalData} legend={false} />);
    expect(utils.container).toMatchSnapshot();
  });

  it('simple bar chart', () => {
    const utils = render(
      <SimpleBarChart data={verticalData} cartesianGrid={false} />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('simple bar chart', () => {
    const utils = render(<SimpleBarChart data={verticalData} xAxis={false} />);
    expect(utils.container).toMatchSnapshot();
  });

  it('simple bar chart', () => {
    const utils = render(<SimpleBarChart data={verticalData} yAxis={false} />);
    expect(utils.container).toMatchSnapshot();
  });
});
