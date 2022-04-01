import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Stack } from '@mui/material';
import { GridContainer } from '../../components/Grid';
import { breakpoints } from '../../Theme';
import FeatureLine from '../../assets/images/feature/feature_line.png';
import FeatureCircle from '../../assets/images/feature/feature_circle.png';
import IconCustomer from '../../assets/images/feature/icon_customer.png';
import IconRelease from '../../assets/images/feature/icon_release.png';
import IconTesting from '../../assets/images/feature/icon_testing.png';
import IconProcess from '../../assets/images/feature/icon_process.png';

import Icon from '../../../src/components/atoms/Icon';

import AppBar from '../../components/AppBar';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
  overflowX: 'hidden',
  [theme.breakpoints.up('md')]: {
    backgroundImage: `url(${FeatureLine})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(50% + 16px) top',
  },
}));

const Title = styled('p')(({ theme }) => ({
  fontWeight: 'bold',
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
}));

const CardWrapper = styled('div')({
  backgroundImage: `url(${FeatureCircle})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left center',
  paddingLeft: '40px',
});

const Card = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  minWidth: '353px',
  borderRadius: '8px',
  paddingLeft: '40px',
  [theme.breakpoints.down('lg')]: {
    height: '106px',
    p: {
      paddingLeft: '24px',
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '0',
    },
  },
  [theme.breakpoints.up('lg')]: {
    height: '128px',
    p: {
      paddingLeft: '24px',
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0',
    },
  },
}));

const Process = styled('div')(({ theme }) => ({
  aspectRatio: '3/5',
  background: '#F8F8F8',
  p: {
    margin: '0 auto',
    fontWeight: 'bold',
    whiteSpace: 'pre-wrap',
    textAlign: 'center',
  },
  [theme.breakpoints.down('lg')]: {
    p: {
      fontSize: '16px',
      lineHeight: '24px',
    },
  },
  [theme.breakpoints.up('lg')]: {
    p: {
      fontSize: '24px',
      lineHeight: '32px',
    },
  },
}));

const ProcessThumb = styled('div')(({ theme }) => ({
  aspectRatio: '1',
  [theme.breakpoints.down('lg')]: {
    padding: '32px',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '57px',
  },
}));

const ProcessImg = styled('img')(({ theme }) => ({
  background: 'white',
  aspectRatio: '1',
  borderRadius: '50%',
  width: '100%',
  height: '100',
}));

const timerTimeInterval = 2000;

function Section1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const [isTablet, setIsTablet] = useState(window.innerWidth < breakpoints.lg);
  const [count, setCount] = useState(0);

  const cards = [
    { title: '고객 지표 문제점 감지', img: 'ICON_ALERT' },
    { title: '실시간 피드백 수집', img: 'ICON_FEEDBACK2' },
    { title: '다양한 테스트 진행', img: 'ICON_TESTING' },
  ];

  const processes = [
    { title: '고객 지표 관리', image: IconCustomer },
    { title: '릴리즈 별 성과 측정 ', image: IconRelease },
    { title: '빠른 테스트로\n의사결정 근거 확보', image: IconTesting },
    { title: '문제 해결\n프로세스 간소화', image: IconProcess },
  ];

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

  useEffect(() => {
    const timerId = setTimeout(() => {
      setCount(count + 1);
    }, timerTimeInterval);

    return () => {
      clearInterval(timerId);
    };
  }, [count]);

  return (
    <Section>
      <AppBar />
      <GridContainer container spacing={16} style={{ paddingTop: '90px', paddingBottom: '50px' }}>
        <Grid item xs={12} md={6} lg={6}>
          <Title>
            의사소통 비용을 줄이는
            <br />
            자동화된 CX Research
            <br />
            프로세스 구축
          </Title>
        </Grid>
        {!isMobile && (
          <Grid item xs={0} md={6} lg={6}>
            <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
              {cards.map((card, index) => (
                <CardWrapper data-aos="fade-up" key={`card_${index}`}>
                  <Card className={index === count % cards.length ? 'box-shadow-active' : ''}>
                    <Icon name={card.img} size={40} />
                    {/*<img src={card.img} alt="feature_icon" style={{ width: '40px', height: '40px' }} />*/}
                    <p>{card.title}</p>
                  </Card>
                </CardWrapper>
              ))}
            </Stack>
          </Grid>
        )}
      </GridContainer>

      <GridContainer container spacing={16} style={{ paddingTop: '46px' }}>
        {processes.map((process, index) => (
          <Grid item xs={6} md={3} lg={3} key={`pr_${index}`}>
            <Process style={{ marginTop: index % 2 === 1 ? (isTablet ? '32px' : '48px') : '0' }}>
              <ProcessThumb>
                <ProcessImg src={process.image.src} alt={process.title} />
              </ProcessThumb>
              <p>{process.title}</p>
            </Process>
          </Grid>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Section1;
