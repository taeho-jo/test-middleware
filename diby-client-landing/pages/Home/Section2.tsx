import React from 'react';
import Image from 'next/image';
// Components
import LottieCard from '../../components/LottieCard';
// Styles
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { GridContainer } from '../../components/Grid';

const Header = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'bold',
  color: theme.palette.cyan.main,
  margin: '0px',
}));

const Title = styled('p')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
    lineHeight: '32px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '32px',
    lineHeight: '48px',
  },
  fontWeight: 'bold',
  color: theme.palette.primary.main,
  margin: '0px',
}));

const Desc = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  color: theme.palette.primary.main,
  margin: '0px',
}));

function Section2() {
  return (
    <div style={{ width: '100%', paddingBottom: '60px', backgroundColor: '#F8F8F8', boxSizing: 'border-box' }}>
      <GridContainer container style={{ maxWidth: '1920px', margin: '0 auto' }}>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '112px' }}>
          <Header data-aos="fade-up" style={{ fontSize: '20px' }}>
            Untact User Research
          </Header>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Title data-aos="fade-up">
            유저리서치에 드는 시간과 비용을 줄이고,
            <br />더 많은 피드백을 더 빠르게 정리하세요.
          </Title>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Desc data-aos="fade-up">
            리서치 방법 선정, 문항 설계, 응답자 모집까지 Diby 에서 빠르게 수행할 수 있습니다.
            <br />
            Diby 의 고객 피드백에 특화된 분석 템플릿으로 문장형 데이터를 읽고 분류하는 시간을 절약하세요.
          </Desc>
        </Grid>

        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '40px' }}>
          <LottieCard name="home_solution" />
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Section2;
