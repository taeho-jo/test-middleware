import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { GridContainer } from './Grid';
import LottieIcon from './/LottieIcon';

const Thumb = styled('img')(({ theme }) => ({
  objectFit: 'contain',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100vw - 64px)',
  },
  [theme.breakpoints.up('md')]: {
    width: '394px',
    height: '405px',
  },
}));

const Title = styled('p')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 'bold',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '48px',
    fontWeight: 'bold',
  },
  whiteSpace: 'pre-wrap',
}));

const Desc = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'bold',
  whiteSpace: 'pre-wrap',
}));

const IconDesc = styled('p')({
  fontSize: '16px',
  lineHeight: '24px',
  ontWeight: 'bold',
  color: '#2878F0',
  paddingTop: '30px',
  whiteSpace: 'pre-wrap',
});

function FeatureCard(props: {
  title: string;
  desc: string;
  icon1: string;
  iconDesc1: string;
  icon2: string;
  iconDesc2: string;
  thumb: string;
  style?: React.CSSProperties;
}) {
  const { title, desc, icon1, iconDesc1, icon2, iconDesc2, thumb } = props;
  const style = props.style ?? {};

  return (
    <GridContainer container spacing={16} direction="row-reverse" justifyContent="center" style={style}>
      <Grid item xs={12} md={5} lg={4}>
        <div data-aos="fade-up" style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Thumb src={thumb} alt="thumb" />
        </div>
      </Grid>
      <Grid item xs={12} md={7} lg={8}>
        <Title data-aos="fade-up">{title}</Title>
        <Desc data-aos="fade-up">{desc}</Desc>
        <div style={{ display: 'flex', paddingTop: '50px', width: '70%' }}>
          <div style={{ flex: 1, paddingRight: '15px' }}>
            <LottieIcon name={icon1} />
            <IconDesc data-aos="fade-up">{iconDesc1}</IconDesc>
          </div>
          <div style={{ flex: 1 }}>
            <LottieIcon name={icon2} delay={500} />
            <IconDesc data-aos="fade-up">{iconDesc2}</IconDesc>
          </div>
        </div>
      </Grid>
    </GridContainer>
  );
}

export default FeatureCard;
