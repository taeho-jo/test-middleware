import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Thumb1 from '../../assets/images/feature/img_segment.png';
import Thumb2 from '../../assets/images/feature/img_scenario.png';
import Thumb3 from '../../assets/images/feature/img_testing.png';
import FeatureCard from '../../components/FeatureCard';
import { breakpoints } from '../../Theme';

const Section = styled('div')(({ theme }) => ({
  width: '100%',
  overflowX: 'hidden',
  [theme.breakpoints.down('md')]: {
    paddingTop: '92px',
  },
  [theme.breakpoints.up('md')]: {
    paddingTop: '200px',
  },
  [theme.breakpoints.up('lg')]: {
    paddingTop: '256px',
  },
}));

function Section2() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoints.md);

  const handleResize = () => {
    setIsMobile(window.innerWidth < breakpoints.md);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const featureCards = [
    {
      title: '고객의 행동 로그를 파악하여\n자동으로 세그먼트를 분류합니다.',
      desc: `고객의 행동 로그를 기반으로 핵심 지표를 수립하고, 피드백을 수집하세요.
프로덕트 카테고리에 따라, 세그먼트별 적절한 핵심 지표를 추천합니다.

핵심지표의 이상을 실시간으로 감지하여 빠르게 대응할 수 있습니다.
      `,
      icon1: 'feature_icon_1',
      iconDesc1: '코드 삽입으로 빠른 설치',
      icon2: 'feature_icon_2',
      iconDesc2: '고객 행동 예측',
      thumb: Thumb1.src,
      useBorder: true,
    },
    {
      title: '고객의 피드백을 기반으로\n적합한 테스트 시나리오를 설계합니다. ',
      desc: `고객 행동 모니터링 결과, 이상이 감지/예측될 때
고객에게 피드백 요청 메시지를 보냅니다.
고객의 피드백과 로그를 바탕으로 가장 적합한 테스트를 추천해줍니다.

세그먼트별 고객의 생생한 피드백을 확인하고 문제를 정의하세요.
      `,
      icon1: 'feature_icon_3',
      iconDesc1: '고객 개인화 메시지 표시',
      icon2: 'feature_icon_4',
      iconDesc2: '세그먼트 타게팅',
      thumb: Thumb2.src,
      useBorder: true,
    },
    {
      title: 'CX 리서치를 위한 테스트의\n모든 과정을 자동으로 진행합니다.',
      desc: `Diby의 테스트 리쿠르팅 플랫폼에서 기업의 잠재고객을 선별합니다.
테스트 수행 및 데이터 수집 과정은 자동으로 진행되며,
실시간으로 그 결과를 확인할 수 있습니다.
      `,
      icon1: 'feature_icon_5',
      iconDesc1: '불량응답 정제',
      icon2: 'feature_icon_6',
      iconDesc2: '자연어 분석',
      thumb: Thumb3.src,
      useBorder: true,
    },
  ];

  const marginBottom = isMobile ? '150px' : '200px';

  return (
    <Section>
      {featureCards.map((card, index) => (
        <FeatureCard {...card} key={`fc${index}`} style={{ marginBottom: index === featureCards.length - 1 ? '100px' : marginBottom }} />
      ))}
    </Section>
  );
}

export default Section2;
