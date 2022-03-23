import React from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import TestGraphMolecules from '../../molecules/TestGraphMolecules';
import SimpleBarChart from '../../atoms/SimpleBarChart';
import VerticalBarGraph from '../../atoms/VerticalBarGraph';
// Dummy
import { data, verticalData } from '../../../assets/dummy/dummyData';
import StackedBarChart from '../../atoms/StackedBarChart';

const TestGraphOrganisms = () => {
  return (
    <>
      <FlexBox padding={'0'}>
        <PageTitle title={'Graph Test Page!'} />
      </FlexBox>

      <FlexBox>
        <TestGraphMolecules title={'stacked bar graph'}>
          <StackedBarChart />
        </TestGraphMolecules>

        <TestGraphMolecules title={'stacked bar graph'}>
          <StackedBarChart />
        </TestGraphMolecules>
      </FlexBox>

      <TestGraphMolecules title={'vertical bar graph'}>
        <VerticalBarGraph data={verticalData} tooltip={false} legend={false} />
      </TestGraphMolecules>

      <TestGraphMolecules title={'simple bar graph'}>
        <SimpleBarChart data={data} />
      </TestGraphMolecules>
    </>
  );
};

export default TestGraphOrganisms;
