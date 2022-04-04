import React, { useEffect, useRef } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import LottieCard from '../../components/LottieCard';

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
  // const divRef = useRef<HTMLDivElement>(null);

  // const setLottie = (ref: HTMLDivElement) => {
  //   // 로띠
  //   // ref.innerHTML = ""
  //   // lottie.loadAnimation({
  //   //   container: ref,
  //   //   renderer: 'svg',
  //   //   loop: true,
  //   //   autoplay: true,
  //   //   animationData: require("assets/lottie/sample.json")
  //   // })
  // };
  //
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     if (divRef.current) {
  //       setLottie(divRef.current);
  //     }
  //   }
  // }, []);

  return (
    <div style={{ width: '100%', marginBottom: '60px', backgroundColor: '#F8F8F8' }}>
      <GridContainer container spacing={16}>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '112px' }}>
          <Header data-aos="fade-up" style={{ fontSize: '20px' }}>
            Untact CX Research
          </Header>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Title data-aos="fade-up">
            CX 리서치에 드는 시간과 비용을 줄이고,
            <br />
            더많은 피드백을 더 빠르게 정리하세요.
          </Title>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
            리서치 방법 선정, 문항 설계, 응답자 모집까지 Diby 에서 빠르게 수행할 수 있습니다.
            <br />
            Diby 의 고객 피드백에 특화된 분석 템플릿으로 문장형 데이터를 읽고 분류하는 시간을 절약하세요.
          </Desc>
        </Grid>
        {/*<Grid item xs={12} md={6} lg={4} style={{ paddingTop: '40px' }}>*/}
        {/*  <Desc data-aos="fade-up">*/}
        {/*    실시간 사용자 행동 데이터로 문제를 발견하고,*/}
        {/*    <br />*/}
        {/*    다양한 피드백 모듈로 원인을 파악하세요.*/}
        {/*  </Desc>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} md={6} lg={4} style={{ paddingTop: '40px' }}>*/}
        {/*  <Desc data-aos="fade-up">Diby를 사용하는 기획자/디자이너/리서처/마케터는</Desc>*/}
        {/*  <Desc data-aos="fade-up" style={{ color: '#24E1D5' }}>*/}
        {/*    시간을 절약하고, 전략 수립과 의사결정에*/}
        {/*    <br />*/}
        {/*    집중할 수 있습니다.*/}
        {/*  </Desc>*/}
        {/*</Grid>*/}
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '40px' }}>
          <LottieCard name="home_solution" />
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Section2;
