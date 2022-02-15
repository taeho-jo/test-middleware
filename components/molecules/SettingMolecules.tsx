import React from 'react';
// Components
import Button from '../atoms/Button';
import SimpleLineChart from '../atoms/SimpleLineChart';
import SimpleBarChart from '../atoms/SimpleBarChart';
// Dummy
import { data } from '../../assets/dummy/dummyData';
import FlexBox from '../atoms/FlexBox';

const SettingMolecules = () => {
  return (
    <>
      <FlexBox height={'500px'}>
        <SimpleLineChart data={data} />
      </FlexBox>

      <FlexBox height={'500px'}>
        <SimpleBarChart data={data} />
      </FlexBox>

      <Button size={'lg'} bgColor={'primary'} loading={false} active={true}>
        그래프확인
      </Button>
      <div>Init Molecules</div>
    </>
  );
};

export default SettingMolecules;
