import React from 'react';
import Head from 'next/head';

interface PropsType {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  url?: string;
  props?: any;
}

const Seo = ({
  title = 'Diby | 일잘하는 당신을 위한 CX 리서치 솔루션',
  description = '유저테스트로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 UX 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
  ogTitle = 'Diby | 일잘하는 당신을 위한 CX 리서치 솔루션',
  ogDescription = '유저테스트로 서비스를 사용한 잠재고객의 피드백을 수집합니다. Diby 에서 UX 리서치 설계부터 응답자 보상 지급, 문장형 데이터를 분석하고 업무 효율성을 높이세요.',
  url = 'https://diby.io/',
  props,
}: PropsType) => {
  console.log(props, 'SERVER CONTEXT');
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:site_name" content={ogTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-diby.png" />
      <meta property="og:locale" content="ko_KR" />
      <meta property="og:image:width" content="2420" />
      <meta property="og:image:height" content="1210" />
      <meta property="author" content="DBDLAB" />
    </Head>
  );
};

export default Seo;
