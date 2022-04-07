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
    { title: '리포트 요약', desc: '리서치의 목적별로\n실제 의사결정에 활용할 수 있는\n결과 요약을 제공합니다.', icon: 'feature_1' },
    {
      title: '테스트 방법 추천',
      desc: '리서치를 수행하는 이유에 맞추어\n가장 적합한 테스트를 추천합니다.',
      icon: 'feature_2',
    },
    { title: '피드백 검색', desc: '결과리포트에서\n원하는 키워드로\n피드백을 검색합니다.', icon: 'feature_3' },
    { title: '담당 매니저 배정', desc: '해당 도메인을 가장 잘 아는\n담당 매니저를 1:1 배정합니다.', icon: 'feature_4' },
    { title: '리서치 설계 추천', desc: '테스트 종류와\n프로덕트 타입에 맞추어\n문항과 조건 등을 추천합니다.', icon: 'feature_5' },
    { title: '패널 표집', desc: '팀에서 원하는 조건에 부합하는 패널만을\n표집하고, 응답의 품질을 검수합니다.', icon: 'feature_6' },
    { title: '피드백 분석', desc: 'Diby 자체 개발 자연어 처리 솔루션을\n활용하여, 정성데이터를 정량화합니다.', icon: 'feature_7' },
    { title: '스마트 리포트', desc: '유사 산업군에서 수행한 다른 리서치의 응답을\n익명화하여 비교합니다.', icon: 'feature_8' },
    { title: '리포트 다운로드', desc: '리포트를 공유하여 팀에게 인사이트를\n전달하고 협업할 수 있습니다.', icon: 'feature_9' },
  ];

  return (
    <Section>
      <GridContainer container spacing={16} style={{ width: '100%', maxWidth: '1920px', margin: '0 auto' }}>
        <Grid item sm={12} md={12} lg={12}>
          <Header data-aos="fade-up">CX 팀을 위한 핵심 기능</Header>
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
