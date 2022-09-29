import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Thumb1 from '../../../public/assets/images/feature/img_segment.png';
import Thumb2 from '../../../public/assets/images/feature/img_scenario.png';
import Thumb3 from '../../../public/assets/images/feature/img_testing.png';
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
      title: '응답자의 정보를 기준으로\n답변을 분류합니다.',
      desc: `리서치에서 가장 중요한 것은 데이터 수집입니다.
기준 문항을 통해 응답자를 분류하여
누가 어떠한 응답을 했는지 분석할 수 있습니다.

세그먼트별 응답 분석으로 더 섬세하게 고객을 이해하세요.
      `,
      icon1: 'feature_icon_1',
      iconDesc1: '코드삽입 없이 가볍게 진행',
      icon2: 'feature_icon_2',
      iconDesc2: '세분화된 UX 전략 도출',
      thumb: Thumb1.src,
      useBorder: true,
    },
    {
      title: '다양한 리서치 종류를 제공하여\n리서치의 목적 달성에 집중합니다.',
      desc: `시간과 비용을 들여 리서치를 수행했지만
막상 리서치 결과가 비즈니스 의사결정에 반영되지 않는
표면적인 리서치는 이제 하지마세요.

테스트 방법론부터 문항 선정까지, 오직 의사결정을 위해서 설계됩니다.
      `,
      icon1: 'feature_icon_3',
      iconDesc1: '프로덕트 커스텀 문항 설계',
      icon2: 'feature_icon_4',
      iconDesc2: '의사결정을 위한 요약 제공',
      thumb: Thumb2.src,
      useBorder: true,
    },
    {
      title: '유저리서치 업무 시간을 단축합니다. ',
      desc: `Diby의 응답자 리쿠르팅 플랫폼에서 응답자를 선별합니다.
테스트 수행 및 데이터 수집 업무를
시스템으로 관리하고, 실시간으로 그 결과를 확인하세요.
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
    <Section style={{ width: '100%', maxWidth: '1920px', margin: '0 auto' }}>
      {featureCards.map((card, index) => (
        <FeatureCard {...card} key={`fc${index}`} style={{ marginBottom: index === featureCards.length - 1 ? '100px' : marginBottom }} />
      ))}
    </Section>
  );
}

export default Section2;
