import React from 'react';
// Components
import FlexBox from '../../atoms/FlexBox';

interface PropsType {
  title: string;
  children: React.ReactNode;
}

const TestGraphMolecules = ({ title, children }: PropsType) => {
  return (
    <FlexBox padding={'0'} direction={'column'} lg={12}>
      <FlexBox padding={'0'} height={'500px'} lg={12}>
        {children}
      </FlexBox>
    </FlexBox>
  );
};

export default TestGraphMolecules;
