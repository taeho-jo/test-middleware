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
    <div style={{ width: '100%' }}>
      <GridContainer container spacing={16}>
        <Grid item xs={12} md={12} lg={12}>
          <Header data-aos="fade-up">Why Diby?</Header>
        </Grid>
        <Grid item xs={12} md={12} lg={12} style={{ paddingTop: '32px' }}>
          <Title data-aos="fade-up">자동화된 CX Research 프로세스</Title>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_1" />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              기술 우선
            </Desc>
            <Desc data-aos="fade-up">인력 기반의 CX Research 시장을 기술 중심으로 혁신합니다.</Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              누구나 객관적이고 체계적인 Research 를 수행할 수 있습니다.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_2" delay={500} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              애자일
            </Desc>
            <Desc data-aos="fade-up">문제를 해결하기 위해 짧은 주기로 Research를 수행합니다.</Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              결과 대시보드로 팀원에게 피드백을 쉽게 받고 문제상황에 빠르게 대처할 수 있습니다.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_3" delay={1000} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              서비스 맞춤형
            </Desc>
            <Desc data-aos="fade-up">서로 다른 비즈니스에 동일한 기준을 적용하지 않습니다.</Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              프로덕트 타입별로 문제를 정의하고 담당자가 선택하고 수행할 수 있는 다양한 솔루션을 제공합니다.
            </Desc>
          </Stack>
        </Grid>
        <Grid item xs={10} md={3} lg={3} style={{ paddingTop: '40px', paddingBottom: '40px' }}>
          <Stack direction="column" spacing={24} justifyContent="flex-start" alignItems="flex-start" style={{ width: 'fix-content' }}>
            <LottieIcon name="home_icon_4" delay={1500} />
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold', color: '#2878F0' }}>
              다양한 모듈
            </Desc>
            <Desc data-aos="fade-up">챗봇, AI, 표정 분석 등을 활용하여 새로운 CX Research 모듈을 제공합니다.</Desc>
            <Desc data-aos="fade-up" style={{ fontWeight: 'bold' }}>
              이 모듈은 모든 종류의 B2C 서비스에 적용할 수 있습니다.{' '}
            </Desc>
          </Stack>
        </Grid>
      </GridContainer>
    </div>
  );
}

export default Section4;
