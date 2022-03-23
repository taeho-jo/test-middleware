import React from 'react';
import { render } from '@testing-library/react';
import SimpleLineChart from './index';
import { verticalData } from '../../../assets/dummy/dummyData';

describe('Simple Line Chart', () => {
  it('simple line chart', () => {
    const utils = render(<SimpleLineChart data={verticalData} />);
    expect(utils.container).toMatchSnapshot();
  });

  it('simple line chart', () => {
    const utils = render(
      <SimpleLineChart data={verticalData} cartesianGrid={false} />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('simple line chart', () => {
    const utils = render(<SimpleLineChart data={verticalData} xAxis={false} />);
    expect(utils.container).toMatchSnapshot();
  });

  it('simple line chart', () => {
    const utils = render(<SimpleLineChart data={verticalData} yAxis={false} />);
    expect(utils.container).toMatchSnapshot();
  });

  it('simple line chart', () => {
    const utils = render(
      <SimpleLineChart data={verticalData} tooltip={false} />,
    );
    expect(utils.container).toMatchSnapshot();
  });

  it('simple line chart', () => {
    const utils = render(
      <SimpleLineChart data={verticalData} legend={false} />,
    );
    expect(utils.container).toMatchSnapshot();
  });
});
