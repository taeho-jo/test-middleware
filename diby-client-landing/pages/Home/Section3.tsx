import React from 'react';
import { Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import LottieIcon from '../../components/LottieIcon';
import ImgSmartPhone from '../../assets/images/home/img_smartphone.png';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
  height: '1000px',
  position: 'relative',
}));

const Header = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'bold',
  color: theme.palette.green.main,
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
  color: theme.palette.white.main,
  margin: '0px',
}));

const Desc = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  color: theme.palette.white.main,
}));

const ThumbGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    height: '592px',
    marginTop: '-240px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '592px',
    marginTop: '-280px',
  },
}));

const Thumb = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '408px',
    height: '414px',
    paddingLeft: '0px',
  },
  [theme.breakpoints.up('md')]: {
    width: '584px',
    height: '592px',
    paddingLeft: '80px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '584px',
    height: '592px',
    paddingLeft: '0px',
  },
}));

const GradientBackground = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: '950px',
  },
  [theme.breakpoints.up('md')]: {
    height: '800px',
  },
  position: 'absolute',
  width: '100%',
  top: '0px',
  left: '0px',
  background: '#3C3C46',
  transform: 'skewY(-9deg)',
  transformOrigin: 'top left',
}));

const WhiteBackground = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    height: '200px',
  },
  position: 'absolute',
  width: '100%',
  top: '800px',
  left: '0px',
  background: 'white',
  transform: 'skewY(-9deg)',
  transformOrigin: 'top left',
  zIndex: 2,
}));

function Section3() {
  return (
    <Section>
      <GridContainer container spacing={16} style={{ position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '60px' }}>
          <Header data-aos="fade-up">On-demand Customer Feedback</Header>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Title data-aos="fade-up">
            커피한잔 주문하듯이, <br />
            고객의 피드백을 주문
          </Title>
        </Grid>
        <Grid item xs={10} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
            누구에게, 어떤 피드백을, 어떻게 받을지 고민하지 마세요.
            <br />
            음성, 텍스트, 표정, 감정, 유저 flow.
            <br />
            Diby는 당신에게 필요한 모든 종류의 피드백 수집을 지원합니다.
          </Desc>
        </Grid>
        <Grid item xs={12} md={3} lg={3} style={{ paddingTop: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_1" />
            <Desc data-aos="fade-up" style={{ color: '#2878F0' }}>
              섬세한 응답자 선별
            </Desc>
            <Desc data-aos="fade-up">
              프로덕트 실사용여부,
              <br />
              취미, 국적, 직업, 성향에 맞추어
              <br />
              가장 적합한 응답자를 찾습니다.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} lg={3} style={{ paddingTop: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_2" delay={500} />
            <Desc data-aos="fade-up" style={{ color: '#2878F0' }}>
              데이터 품질 유지
            </Desc>
            <Desc data-aos="fade-up">
              불량응답 분류 알고리즘과
              <br />
              체계적인 패널를 통해
              <br />
              의사결정에 도움이 되는
              <br />
              피드백을 수집합니다.
            </Desc>
          </Stack>
        </Grid>
        <ThumbGrid item xs={0} md={6} lg={6}>
          <Thumb data-aos="fade-up" src={ImgSmartPhone.src} alt="thumb" />
        </ThumbGrid>
      </GridContainer>
      <GradientBackground />
      <WhiteBackground />
    </Section>
  );
}

export default Section3;
