import React from 'react';
// Components
import FlexBox from '../../atoms/FlexBox';
import BoxTitle from '../../atoms/BoxTitle';
import SimpleBarChart from '../../atoms/SimpleBarChart';
import { data } from '../../../assets/dummy/dummyData';

interface PropsType {
  title: string;
  children: React.ReactNode;
  data: any;
}

const TestGraphMolecules = ({ title, children }) => {
  return (
    <FlexBox padding={'0'} direction={'column'}>
      <BoxTitle title={title} />
      <FlexBox padding={'0'} height={'500px'}>
        {children}
      </FlexBox>
    </FlexBox>
  );
};

export default TestGraphMolecules;
