import React from 'react';
import Head from 'next/head';

interface PropsType {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  url?: string;
  props?: any;
  path?: string;
}

const Seo = ({
  path,
  title = 'Diby | 일 잘하는 당신을 위한 유저리서치 솔루션',
  description = '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
  ogTitle = '일 잘하는 당신을 위한 유저리서치 솔루션, Diby',
  ogDescription = '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
  url = 'https://diby.io/',
  props,
}: PropsType) => {
  const seoAttr = () => {
    const url = `https://diby.io${path}`;
    switch (path) {
      case '/usecases/ui':
        return {
          title: 'Diby | 사용성 테스트',
          description: '사용성 테스트 (usabiltiy test)로 서비스내 문제점 파악',
          ogTitle: '사용성 테스트 | Diby',
          ogDescription: '사용성 테스트 (usabiltiy test)로 서비스내 문제점 파악',
          url,
        };
      case '/usecases/ux':
        return {
          title: 'Diby | UX 포지션 분석',
          description: '실사용자 대상 UX 평가 및 전략 수립',
          ogTitle: 'UX 포지션 분석 | Diby',
          ogDescription: '실사용자 대상 UX 평가 및 전략 수립',
          url,
        };
      case '/usecases/scenario':
        return {
          title: 'Diby | 시나리오 검증',
          description: 'UX UI 가설 수립 및 검증',
          ogTitle: '시나리오 검증 | Diby',
          ogDescription: 'UX UI 가설 수립 및 검증',
          url,
        };
      case '/usecases/customer':
        return {
          title: 'Diby | 퍼소나 분석',
          description: '시장조사, 핵심 고객 정의',
          ogTitle: '퍼소나 분석 | Diby',
          ogDescription: '시장조사, 핵심 고객 정의',
          url,
        };
      case '/feature':
        return {
          title: 'Diby | 솔루션소개',
          description: '유저리서치에서 단순반복 작업을 80% 단축하세요.',
          ogTitle: '솔루션소개 | Diby',
          ogDescription: '유저리서치에서 단순반복 작업을 80% 단축하세요.',
          url,
        };
      case '/pricing':
        return {
          title: 'Diby | 가격안내',
          description: '',
          ogTitle: '가격안내 | Diby',
          ogDescription: '',
          url,
        };
      case '/tri':
        return {
          title: 'Diby | 설계하기',
          description: '1분안에 간략한 비용과 소요시간 확인하기',
          ogTitle: '설계하기 | Diby',
          ogDescription: '1분안에 간략한 비용과 소요시간 확인하기',
          url,
        };
      default:
        return {
          title: 'Diby | 일 잘하는 당신을 위한 유저리서치 솔루션',
          description:
            '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
          ogTitle: '유저리서치 솔루션, Diby',
          ogDescription:
            '유저리서치로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
          url,
        };
    }
  };
  return (
    <Head>
      <title>{seoAttr().title}</title>
      <meta name="description" content={seoAttr().description} />
      <meta property="og:title" content={seoAttr().ogTitle} />
      <meta property="og:description" content={seoAttr().ogDescription} />
      <meta property="og:site_name" content={seoAttr().ogTitle} />
      <meta property="og:url" content={seoAttr().url} />
    </Head>
  );
};

export default Seo;
