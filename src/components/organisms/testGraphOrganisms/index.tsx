import React from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import TestGraphMolecules from '../../molecules/TestGraphMolecules';
import SimpleBarChart from '../../atoms/SimpleBarChart';
import { data, verticalData } from '../../../assets/dummy/dummyData';
import Index from '../../atoms/VerticalBarGraph';

const TestGraphOrganisms = () => {
  return (
    <>
      <FlexBox padding={'0'}>
        <PageTitle title={'Graph Test Page!'} />
      </FlexBox>

      <TestGraphMolecules title={'vertical bar graph'}>
        <Index data={verticalData} tooltip={false} legend={false} />
      </TestGraphMolecules>

      <TestGraphMolecules title={'simple bar graph'}>
        <SimpleBarChart data={data} />
      </TestGraphMolecules>
    </>
  );
};

export default TestGraphOrganisms;
