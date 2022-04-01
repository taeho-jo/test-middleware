import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { GridContainer } from './Grid';

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

function SolutionCard(props: { title: string; desc: string; thumb: string; style?: React.CSSProperties }) {
  const { title, desc, thumb } = props;
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
      </Grid>
    </GridContainer>
  );
}

export default SolutionCard;
