import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { GridContainer } from '../../components/Grid';
import LottieIcon from '../../components/LottieIcon';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
  background: '#3C3C46',
  marginTop: '90px',
  paddingBottom: '64px',

  [theme.breakpoints.down('md')]: {
    paddingTop: '32px',
    paddingBottom: '128px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '64px',
    paddingBottom: '200px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '64px',
    paddingBottom: '250px',
  },
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
  color: 'white',
}));

const Title = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 'bold',
  whiteSpace: 'pre-wrap',
  color: '#A8FF69',
}));

const Desc = styled('p')(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '24px',
  whiteSpace: 'pre-wrap',
  color: 'white',
}));

function Section4() {
  const data = [
    { title: '스마트 세그먼트', desc: "프로덕트별로 맞춤화된  ‘충성도 높은 고객'의\n기준을 설정하고 고객을 분류합니다.", icon: 'feature_1' },
    {
      title: 'KPI 이상 감지 및 알림',
      desc: '설정한 KPI를 실시간으로 추적합니다.기준치보다 낮아지거나 높아졌을 때,\n알림 및 문제 분석을 시작합니다.',
      icon: 'feature_2',
    },
    { title: '상황별 피드백 수집', desc: '지정된 상황에서 실제 프로덕트 사용자의\n피드백을 실시간으로 수집합니다.', icon: 'feature_3' },
    { title: '피드백 수집 방법 추천', desc: '현재 문제상황 혹은 내부 목표에 따라\n어떤 종류의 피드백이 필요한지 추천합니다.', icon: 'feature_4' },
    { title: 'Research 시나리오 설계', desc: '응답자가 수행할 미션, 문항, 조건 등을\n바탕으로 쉽고 빠르게 설계합니다.', icon: 'feature_5' },
    { title: '패널 표집', desc: '팀에서 원하는 조건에 부합하는 패널만을\n표집하고, 응답의 품질을 검수합니다.', icon: 'feature_6' },
    { title: '피드백 분석', desc: 'Diby 자체 개발 자연어 처리 솔루션을\n활용하여, 정성데이터를 정량화합니다.', icon: 'feature_7' },
    { title: '스마트 리포트', desc: '유사 산업군에서 수행한 다른 리서치의 응답을\n익명화하여 비교합니다.', icon: 'feature_8' },
    { title: '리포트 다운로드', desc: '리포트를 공유하여 팀에게 인사이트를\n전달하고 협업할 수 있습니다.', icon: 'feature_9' },
  ];

  return (
    <Section>
      <GridContainer container spacing={16}>
        <Grid item sm={12} md={12} lg={12}>
          <Header data-aos="fade-up">CX 팀을 위한 핵심 기능.</Header>
        </Grid>
        {data.map((item, index) => (
          <Grid item sm={6} md={6} lg={4} key={`id_${index}`}>
            <LottieIcon name={item.icon} delay={500 * index} />
            <Title data-aos="fade-up">{item.title}</Title>
            <Desc data-aos="fade-up">{item.desc}</Desc>
          </Grid>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Section4;
