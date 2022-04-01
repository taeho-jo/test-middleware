import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Page from '../../components/Page';
import AppBar from '../../components/AppBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import CustomFooter from './CustomFooter';
import { setGradient } from '../../lib/stripe-gradient';

const GradientBorder = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '640px',
  },
  [theme.breakpoints.up('md')]: {
    height: '800px',
  },
  position: 'absolute',
  top: '0px',
  zIndex: -1,
  width: '100%',
  borderTop: '0px',
  borderLeft: '0px',
  borderRight: '0px',
  borderBottom: '10px solid',
  borderImage: 'linear-gradient(93.75deg, #A8FF69 8.23%, #24E1D5 35.57%, #2878F0 62.91%, #7B3CE9 91.55%)',
  borderImageSlice: 1,
  boxSizing: 'border-box',
  background: 'transparent',
  // background: "#3C3C46",
  transform: 'skewY(-9deg)',
  transformOrigin: 'top left',
}));

const GradientCanvas = styled('canvas')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '632px',
  },
  [theme.breakpoints.up('md')]: {
    height: '792px',
  },
  position: 'absolute',
  top: '0px',
  zIndex: -1,
  width: '100%',
  background: '#3C3C46',
  transform: 'skewY(-9deg)',
  transformOrigin: 'top left',
}));

function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      setGradient(canvasRef.current);
    }
  }, []);

  return (
    <Page>
      <AppBar dark />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <CustomFooter />
      <GradientCanvas id="gradient-canvas" ref={canvasRef} />
      <GradientBorder />
    </Page>
  );
}

export default Home;
