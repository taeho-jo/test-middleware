import React from 'react';
import { Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import LottieIcon from '../../components/LottieIcon';

const Header = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'bold',
  color: theme.palette.cyan.main,
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

function Section4() {
  return (
    <div style={{ width: '100%', maxWidth: '1920px', margin: '0 auto' }}>
      <GridContainer container spacing={16}>
        <Grid item xs={12} md={12} lg={12}>
          <Header data-aos="fade-up" style={{ fontSize: '20px' }}>
            Why Diby?
          </Header>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Title data-aos="fade-up">Diby로 체계적인 유저리서치 문화를 도입하세요. </Title>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_1" />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              기술 우선
            </Desc>
            <Desc data-aos="fade-up">
              Diby는 인력기반의 유저리서치 시장을
              <br />
              기술 중심으로 혁신합니다.
            </Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              챗봇, 인공지능, 표정 분석 등을 활용하여 <br />
              새로운 리서치 방법을 제공합니다.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_2" delay={500} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              애자일
            </Desc>
            <Desc data-aos="fade-up">
              리서치를 가볍고 빠르게
              <br /> 수행할 수 있습니다.
            </Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              짧은 주기로 여러번 수행하여 <br />
              고객 경험을 실제 의사결정에 반영하세요.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_3" delay={1000} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              프로덕트 맞춤형
            </Desc>
            <Desc data-aos="fade-up">
              서로 다른 프로덕트에 <br />
              동일한 기준을 적용하지 않습니다.
            </Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              Diby가 보유한 익명화된 데이터 기반으로
              <br /> 유사 업계 동향을 함께 확인하세요.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_4" delay={1500} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              다양한 리서치
            </Desc>
            <Desc data-aos="fade-up">
              리서치의 목적에 맞게 선택하실 수 있는
              <br /> 다양한 리서치를 제공합니다.
            </Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              원하시는 대로 커스텀하거나, <br />
              추천 리서치를 활용하세요.
            </Desc>
          </Stack>
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Section4;
