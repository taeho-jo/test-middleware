import React from 'react';
// Components
import SettingMolecules from '../molecules/SettingMolecules';
import TestFormBox from '../molecules/TestFormBox';
import FlexBox from '../atoms/FlexBox';
import TestFormBox2 from '../molecules/TestFormBox/TestFormBox2';

const SettingOrganisms = () => {
  return (
    <>
      <FlexBox justify={'space-between'}>
        <TestFormBox />
        <TestFormBox2 />
      </FlexBox>

      <SettingMolecules />
      <div>Init Organisms</div>
    </>
  );
};

export default SettingOrganisms;
