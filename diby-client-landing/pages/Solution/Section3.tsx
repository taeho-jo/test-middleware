import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import SolutionCard from '../../components/SolutionCard';
import { GridContainer } from '../../components/Grid';
import { breakpoints } from '../../Theme';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
  overflowX: 'hidden',
  paddingTop: '160px',
}));

const Header = styled('p')(({ theme }) => ({
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
  [theme.breakpoints.up('lg')]: {
    fontSize: '48px',
    lineHeight: '64px',
    fontWeight: 'bold',
  },
  color: '#3C3C46',
  whiteSpace: 'pre-wrap',
}));

const Section3 = ({ data }) => {
  const { title, cards } = data;
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const marginBottom = isMobile ? '150px' : '200px';

  return (
    <Section style={{ width: '100%', maxWidth: '1920px', margin: '0 auto' }}>
      <GridContainer container>
        <Grid item xs={12} md={12} lg={12}>
          <Header>{title}</Header>
        </Grid>
      </GridContainer>
      {cards.map((card, index) => (
        <SolutionCard
          data-aos="fade-up"
          {...card}
          key={`sc${index}`}
          style={{ marginTop: '100px', marginBottom: index === cards.length - 1 ? '100px' : marginBottom }}
        />
      ))}
    </Section>
  );
};

export default Section3;
