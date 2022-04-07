import React, { useState, useEffect } from 'react';
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
  fontWeight: 'bold',
}));

const Desc1 = styled('p')(({ theme }) => ({
  whiteSpace: 'pre-wrap',
  fontSize: '26px',
  lineHeight: '24px',
  fontWeight: 'bold',
  paddingTop: '6px',
}));

const Desc2 = styled('p')(({ theme }) => ({
  whiteSpace: 'pre-wrap',
  fontSize: '18px',
  lineHeight: '24px',
  margin: '0',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    width: '90%',
  },
}));

const SlideButton = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    width: '160px',
    height: '32px',
    fontWeight: 'bold',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#CCCCCC',
    borderRadius: '16px',
  },
  [theme.breakpoints.up('lg')]: {
    width: '175px',
    height: '32px',
    fontWeight: 'bold',
    fontSize: '16px',
    color: 'white',
    backgroundColor: '#CCCCCC',
    borderRadius: '16px',
  },
  marginRight: '17px',
}));

const Section2 = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const [isTablet, setIsTablet] = useState(window.innerWidth < breakpoints.lg);

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
    setIsTablet(window.innerWidth < breakpoints.lg);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '1920px', margin: '0 auto' }}>
      <Section>
        <GridContainer container spacing={0}>
          <Grid item xs={12} sm={12} md={12} lg={12} style={{ marginBottom: '30px' }}>
            <div>
              <Title data-aos="fade-up">{data.title}</Title>
            </div>
          </Grid>
          {!isTablet && (
            <LeftGrid item xs={12} md={12} lg={5}>
              <div style={{ flex: 1 }} />
              <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
                <Desc1 data-aos="fade-up">{data.slides[slideIndex].title}</Desc1>
                <Desc2 data-aos="fade-up">{data.slides[slideIndex].desc}</Desc2>
              </Stack>
              <div style={{ flex: 1 }} />
            </LeftGrid>
          )}
          {!isMobile && (
            <Grid item xs={12} md={12} lg={7}>
              <div data-aos="fade-up">
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end' }}>
                  {data.slides.map((slide, index) => (
                    <SlideButton
                      key={`slide:${index}`}
                      style={{ backgroundColor: slideIndex === index ? '#24E1D5' : '#CCCCCC' }}
                      onClick={() => setSlideIndex(index)}
                    >
                      {slide.title}
                    </SlideButton>
                  ))}
                </div>
                {isTablet && (
                  <Stack
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    style={{ width: 'fix-content', marginTop: '20px', marginBottom: '50px' }}
                  >
                    <Desc1 data-aos="fade-up">{data.slides[slideIndex].title}</Desc1>
                    <Desc2 data-aos="fade-up">{data.slides[slideIndex].desc}</Desc2>
                  </Stack>
                )}
                <div style={{ marginTop: '24px' }}>
                  <img src={data.slides[slideIndex].image.src} alt="slide" style={{ width: '656px', height: '472px' }} />
                </div>
              </div>
            </Grid>
          )}
          {isMobile &&
            data.slides.map(slide => (
              <Grid item xs={12} md={12} lg={7}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  style={{ width: 'fix-content', marginTop: '20px', marginBottom: '50px' }}
                >
                  <Desc1 data-aos="fade-up">{slide.title}</Desc1>
                  <Desc2 data-aos="fade-up">{slide.desc}</Desc2>
                </Stack>
                <div style={{ marginTop: '24px' }}>
                  <img data-aos="fade-up" src={slide.image.src} alt="slide" style={{ width: '100%', maxHeight: '100%' }} />
                </div>
              </Grid>
            ))}
        </GridContainer>
      </Section>
    </div>
  );
};

export default Section2;
