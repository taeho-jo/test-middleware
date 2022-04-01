import React from 'react';
import Page from '../../components/Page';
import AppBar from '../../components/AppBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Footer from '../../components/Footer';

function TRIComponent() {
  return (
    <Page>
      <AppBar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </Page>
  );
}

export default TRIComponent;
