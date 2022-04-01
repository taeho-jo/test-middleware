import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/material/styles';
import { Button, Grid, Stack } from '@mui/material';
import { GridContainer } from '../../components/Grid';
import { breakpoints } from '../../Theme';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
}));

const LeftGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    alignItems: 'center',
    display: 'flex',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'flex-start',
  },
  marginTop: '16px',
}));

const RightGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    display: 'inherit',
  },
  marginTop: '8px',
}));

const Header = styled('p')(({ theme }) => ({
  whiteSpace: 'pre-wrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '24px',
  },
  marginBottom: '10px',
  fontWeight: 'bold',
}));

const Title = styled('p')(({ theme }) => ({
  whiteSpace: 'pre-wrap',
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '48px',
    lineHeight: '64px',
  },
  fontWeight: 'bold',
  margin: '0',
}));

const NextButton = styled(Button)({
  fontWeight: '700',
  textTransform: 'none',
  fontSize: '16px',
  height: '36px',
  borderRadius: '18px',
  marginTop: '32px',
  paddingLeft: '32px',
  paddingRight: '32px',
  boxShadow: 'none !important',
  color: 'white',
});

const Section1 = ({ data }) => {
  console.log(data);
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const navigate = useRouter();

  const handleClick = (path: string) => {
    navigate.push(path);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', marginBottom: '30px' }}>
      <Section>
        <GridContainer container spacing={0} style={{ paddingTop: '90px', overflowX: 'hidden' }}>
          <LeftGrid item xs={12} md={7} lg={7}>
            <div style={{ flex: 1 }} />
            <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              <Header>{data.header}</Header>
              <Title>{data.title}</Title>
              <NextButton
                onClick={() => {
                  handleClick('/tri');
                }}
                color="blue"
                variant="contained"
                endIcon={isMobile ? undefined : <ArrowRightAltIcon style={{ color: 'white' }} />}
              >
                나에게 맞는 리서치 모듈 알아보기
              </NextButton>
            </Stack>
            <div style={{ flex: 1 }} />
          </LeftGrid>
          <RightGrid item xs={0} md={5} lg={5}>
            <div style={{ display: 'flex', justifyContent: 'flex-start', overflowX: 'visible' }}>
              <div style={{ width: '600px', height: '488px', overflowY: 'hidden' }}>
                <img data-aos="fade-up" src={data.bg.src} alt="bg" style={{ width: '504px', height: '384px' }} />
                <img
                  data-aos="fade-up"
                  data-aos-delay={500}
                  src={data.chart.src}
                  alt="chart"
                  style={{ width: '352px', height: '384px', marginTop: '-320px', marginLeft: '145px' }}
                />
              </div>
            </div>
          </RightGrid>
          {isMobile && (
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <img src={data.chart.src} alt="chart" style={{ width: '352px', height: '384px', marginTop: '32px' }} />
            </div>
          )}
        </GridContainer>
      </Section>

      <GridContainer
        container
        columnSpacing={16}
        rowSpacing={8}
        justifyContent="center"
        style={{
          marginTop: '56px',
          paddingTop: '48px',
          paddingBottom: '48px',
          background: '#F8F8F8',
        }}
      >
        {data.labs.map((lab, index) => (
          <Grid data-aos="fade-up" key={`lab_${index}`} item xs={6} md={3} lg={3}>
            <div style={{ display: 'flex', height: '80px', alignItems: 'center', background: 'white' }}>
              <div style={{ flex: 1 }} />
              <img src={lab.image.src} alt={lab.name} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
              <div style={{ flex: 1 }} />
            </div>
          </Grid>
        ))}
      </GridContainer>
    </div>
  );
};

export default Section1;
