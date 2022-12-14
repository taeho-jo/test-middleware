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
    width: '100%',
    fontSize: '24px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('md')]: {
    width: '90%',
    fontSize: '32px',
    lineHeight: '48px',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '40px',
    lineHeight: '55px',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '38px',
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const navigate = useRouter();

  const handleClick = (path: string) => {
    if (path === '/usecases/ui') {
      window.open('https://dbdlab.notion.site/UI-5a3e44a7bcb2439097e311fd62ad5e5d');
    }
    if (path === '/usecases/ux') {
      window.open('https://dbdlab.notion.site/UX-205652e102c3439b9bcb44a7383f5bb3');
    }
    if (path === '/usecases/scenario') {
      window.open('https://dbdlab.notion.site/e431cc58286c4b1b9113f45f1ce88f57');
    }
    if (path === '/usecases/customer') {
      window.open('https://dbdlab.notion.site/34d243dc532d462b84468a710a63c3e8');
    }
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
    <>
      <div style={{ width: '100%', marginBottom: '30px', maxWidth: '1920px', margin: '0 auto' }}>
        <Section>
          <GridContainer container spacing={0} style={{ paddingTop: '90px', overflowX: 'hidden' }}>
            <LeftGrid item xs={12} md={7} lg={7}>
              <div style={{ flex: 1 }} />
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
                <Header>{data.header}</Header>
                <Title>{data.title}</Title>
                <NextButton
                  onClick={() => {
                    handleClick(navigate.pathname);
                  }}
                  color="blue"
                  variant="contained"
                  endIcon={isMobile ? undefined : <ArrowRightAltIcon style={{ color: 'white' }} />}
                >
                  {navigate.pathname === '/usecases/ui'
                    ? '????????? ???????????? ????????? ????????????'
                    : navigate.pathname === '/usecases/ux'
                    ? 'UX ????????? ???????????? UX ?????? ????????????'
                    : navigate.pathname === '/usecases/scenario'
                    ? '???????????? ???????????? ??????????????????'
                    : '????????? ???????????? ????????? ????????????'}
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
      </div>

      <div style={{ width: '100%', background: '#F8F8F8' }}>
        <GridContainer
          container
          // columnSpacing={16}
          rowSpacing={8}
          justifyContent="center"
          style={{
            maxWidth: '1920px',
            margin: '0 auto',
            marginTop: '56px',
            paddingTop: '48px',
            paddingBottom: '48px',
          }}
        >
          {data.labs.map((lab, index) => (
            <Grid data-aos="fade-up" key={`lab_${index}`} item xs={6} md={3} lg={3}>
              <div style={{ display: 'flex', width: '97%', height: '80px', alignItems: 'center', background: 'white' }}>
                <div style={{ flex: 1 }} />
                <img src={lab.image.src} alt={lab.name} style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100%' }} />
                <div style={{ flex: 1 }} />
              </div>
            </Grid>
          ))}
        </GridContainer>
      </div>
    </>
  );
};

export default Section1;
