import React from 'react';
import { Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import LottieIcon from '../../components/LottieIcon';
import ImgSmartPhone from '../../../public/assets/images/home/img_smartphone.png';
import Image from 'next/image';

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
      <GridContainer container style={{ position: 'relative', zIndex: 2, overflow: 'hidden', maxWidth: '1920px', margin: '0 auto' }}>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '60px' }}>
          <Header data-aos="fade-up">On-demand Customer Feedback</Header>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Title data-aos="fade-up">
            커피한잔 주문하듯이, <br />
            고객의 피드백을 주문하세요.
          </Title>
        </Grid>
        <Grid item xs={10} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
            리서치 응답자를 어디서 모으고, 어떤 보상을 줘야할지 고민하지마세요.
            <br />
            2만명의 Diby 패널에서 응답자를 찾거나, 보유하고 계신 고객에게 리서치 참여 링크를 보낼 수 있습니다.
            <br />
            참여자 표집 조건과 리서치 난이도에 따라 보상금액을 자동 계산해드립니다.
          </Desc>
        </Grid>
        <Grid item xs={12} md={3} lg={3} style={{ paddingTop: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_1" />
            <Desc data-aos="fade-up" style={{ color: '#2878F0' }}>
              섬세한 응답자 선별
            </Desc>
            <Desc data-aos="fade-up">
              성별, 취미, 직업 등
              <br />
              원하시는 조건을 충족하는 응답자만을
              <br />
              Diby 패널 중 선별하여 리서치를 수행합니다.
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
              불성실 피드백 식별 알고리즘과
              <br />
              체계적인 패널 관리를 통해
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
