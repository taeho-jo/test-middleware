import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import { breakpoints } from '../../Theme';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
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
}));

const PriceDiv = styled('div')(({ theme }) => ({
  backgroundColor: '#F8F8F8',
  borderRadius: '8px',
  [theme.breakpoints.down('md')]: {
    height: '792px',
  },
  [theme.breakpoints.up('md')]: {
    height: '696px',
  },
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
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
}));

const Card = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  [theme.breakpoints.down('md')]: {
    margin: '0 32px 24px',
    width: 'calc(100% - 64px)',
  },
  [theme.breakpoints.up('md')]: {
    margin: '0 48px 24px',
    width: 'calc(100% - 96px)',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0 72px 24px',
    width: 'calc(100% - 144px)',
  },
}));

const GradientBorder = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '380px',
  },
  [theme.breakpoints.up('md')]: {
    height: '480px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '580px',
  },
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  borderTop: '0px',
  borderLeft: '0px',
  borderRight: '0px',
  borderBottom: '250px solid',
  borderColor: '#3C3C46',
  left: 0,
}));

const GradientBorder2 = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '1380px',
  },
  [theme.breakpoints.up('md')]: {
    height: '1480px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '1580px',
  },
  position: 'absolute',
  zIndex: -1,
  width: '100%',
  borderTop: '0px',
  borderLeft: '0px',
  borderRight: '0px',
  borderBottom: '250px solid',
  borderColor: '#3C3C46',
  left: 0,
}));

function getSkewYDegree(width: number) {
  if (window.innerWidth < breakpoints.md) {
    return 180 - (Math.atan(508 / width) * 180) / Math.PI;
  } else if (window.innerWidth < breakpoints.lg) {
    return 180 - (Math.atan(768 / width) * 180) / Math.PI;
  } else {
    return 180 - (Math.atan(900 / width) * 180) / Math.PI;
  }
}

function Section1() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);
  const [skewYDegree, setSkewYDegree] = useState(getSkewYDegree(window.innerWidth));

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
    setSkewYDegree(getSkewYDegree(window.innerWidth));
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const newlineForMobile = isMobile ? '\n' : ' ';
  const desc1 = `필요할 때, 빠르게 리서치를${newlineForMobile}진행할 수 있습니다.\n\n웹리포트는${newlineForMobile}90일간 조회할 수 있으며,\n모든 결과와 원본 데이터는${newlineForMobile}다운로드 할 수 있습니다.`;
  const desc2 =
    `서비스에 필요한 리서치를${newlineForMobile}정기적으로 수행할 수 있습니다.\n\n` +
    // `담당자가 별도로 설정하지 않아도,\n지정된 날짜에 웹리포트가 제공됩니다.\n\n` +
    `웹리포트는 구독기간내${newlineForMobile}무제한 조회할 수 있으며,\n모든 결과와 원본 데이터는${newlineForMobile}다운로드할 수 있습니다.`;
  // 지정된 날짜에 인터렉티브${newlineForMobile}리포트가 제공됩니다.
  return (
    <Section>
      <GridContainer
        container
        spacing={16}
        style={{ paddingTop: '90px', paddingBottom: '90px', width: '100%', maxWidth: '1920px', margin: '0 auto' }}
      >
        <Grid item sm={12} md={12} lg={12}>
          <Header>
            커피한잔 주문하듯이,
            <br />
            고객의 피드백을 주문해보세요.
          </Header>
        </Grid>
        <Grid item sm={12} md={6} lg={6} style={{ paddingTop: isMobile ? '48px' : '90px' }}>
          <PriceDiv>
            <Title data-aos="fade-up">리서치 1회 주문</Title>
            <Card data-aos="fade-up" className="box-shadow-active">
              <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px' }}>응답자 보상 비용</p>
              <p style={{ fontSize: '16px', lineHeight: '24px', margin: '8px auto 16px', paddingTop: '8px' }}>(응답자 보상 비용 * 응답자 수)</p>
            </Card>
            <Card data-aos="fade-up" className="box-shadow-active">
              <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px' }}>응답자 모집 비용</p>
              <p style={{ fontSize: '16px', lineHeight: '24px', margin: '8px auto 16px', paddingTop: '8px' }}>(응답자 보상 비용 * 30%)</p>
            </Card>
            <Card data-aos="fade-up" className="box-shadow-active">
              <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px' }}>솔루션 사용료 (회당)</p>
            </Card>
            <p
              data-aos="fade-up"
              style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px', whiteSpace: 'pre-wrap' }}
            >
              {desc1}
            </p>
            <div style={{ flex: 1 }} />
          </PriceDiv>
        </Grid>
        <Grid item sm={12} md={6} lg={6} style={{ paddingTop: isMobile ? '48px' : '90px' }}>
          <PriceDiv>
            <Title data-aos="fade-up">리서치 정기 구독</Title>
            <Card data-aos="fade-up" className="box-shadow-active">
              <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px' }}>응답자 보상 비용</p>
              <p style={{ fontSize: '16px', lineHeight: '24px', margin: '8px auto 16px', paddingTop: '8px' }}>(응답자 보상 비용 * 응답자 수)</p>
            </Card>
            <Card data-aos="fade-up" className="box-shadow-active">
              <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px' }}>응답자 모집 비용</p>
              <p style={{ fontSize: '16px', lineHeight: '24px', margin: '8px auto 16px', paddingTop: '8px' }}>(응답자 보상 비용 * 30%)</p>
            </Card>
            <Card data-aos="fade-up" className="box-shadow-active">
              <p style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px' }}>정기 구독료 (연간 결제)</p>
            </Card>
            <p
              data-aos="fade-up"
              style={{ fontSize: '16px', lineHeight: '24px', fontWeight: 'bold', margin: '16px auto 8px', whiteSpace: 'pre-wrap' }}
            >
              {desc2}
            </p>
            <div style={{ flex: 1 }} />
          </PriceDiv>
        </Grid>
        <GradientBorder style={{ transform: `skewY(${skewYDegree}deg)` }} />
        {isMobile && <GradientBorder2 style={{ transform: `skewY(${skewYDegree}deg)` }} />}
      </GridContainer>
    </Section>
  );
}

export default Section1;
