import React from 'react';
import Page from '../../components/Page';
import AppBar from '../../components/AppBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Footer from '../../components/Footer';

function PricingComponent() {
  return (
    <Page>
      <AppBar />
      <Section1 />
      {/*<Section2 />*/}
      <Footer dark />
    </Page>
  );
}


export default PricingComponent;
