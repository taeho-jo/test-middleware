import React from 'react';
import Page from '../../components/Page';
import AppBar from '../../components/AppBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from '../../components/Footer';

import SolutionImage1_1 from '../../assets/images/company/companylogo_ui1.png';
import SolutionImage1_2 from '../../assets/images/company/companylogo_ui2.png';
import SolutionImage1_3 from '../../assets/images/company/companylogo_ui3.png';
import SolutionImage1_4 from '../../assets/images/company/companylogo_ui4.png';
import SolutionChart1 from '../../assets/images/usecase_UI/img_ui_top_chart.png';
import SolutionChartBG1 from '../../assets/images/usecase_UI/img_ui_top_bg.png';
import SolutionThumb1_1 from '../../assets/images/usecase_UI/img_ui_ratio.png';
import SolutionThumb1_2 from '../../assets/images/usecase_UI/img_ui_cause.png';
import SolutionThumb1_3 from '../../assets/images/usecase_UI/img_ui_align.png';
import SolutionTopSlide1_1 from '../../assets/images/usecase_UI/img_usecase_mision.png';
import SolutionTopSlide1_2 from '../../assets/images/usecase_UI/img_usecase_qs.png';
import SolutionTopSlide1_3 from '../../assets/images/usecase_UI/img_usecase_addq.png';
import SolutionBottomSlide1_1 from '../../assets/images/usecase_UI/img_usecase_bottom_panelset.png';
import SolutionBottomSlide1_2 from '../../assets/images/usecase_UI/img_usecase_bottom_mission.png';
import SolutionBottomSlide1_3 from '../../assets/images/usecase_UI/img_usecase_bottom_addq.png';

import SolutionImage2_1 from '../../assets/images/company/companylogo_ux1.png';
import SolutionImage2_2 from '../../assets/images/company/companylogo_ux2.png';
import SolutionImage2_3 from '../../assets/images/company/companylogo_ux3.png';
import SolutionChart2 from '../../assets/images/usecase_UX/img_ux_top_chart.png';
import SolutionChartBG2 from '../../assets/images/usecase_UX/img_ux_top_bg.png';
import SolutionThumb2_1 from '../../assets/images/usecase_UX/img_ux_reason.png';
import SolutionThumb2_2 from '../../assets/images/usecase_UX/img_ux_usecase.png';
import SolutionThumb2_3 from '../../assets/images/usecase_UX/img_ux_cognition.png';
import SolutionTopSlide2_1 from '../../assets/images/usecase_UX/img_ux_recruit.png';
import SolutionTopSlide2_2 from '../../assets/images/usecase_UX/img_usecase_qs.png';
import SolutionBottomSlide2_1 from '../../assets/images/usecase_UX/img_ux_bottom_purpose.png';
import SolutionBottomSlide2_2 from '../../assets/images/usecase_UX/img_usecase_bottom_panelset.png';

import SolutionImage3_1 from '../../assets/images/company/companylogo_scenario1.png';
import SolutionImage3_2 from '../../assets/images/company/companylogo_scenario2.png';
import SolutionImage3_3 from '../../assets/images/company/companylogo_scenario3.png';
import SolutionImage3_4 from '../../assets/images/company/companylogo_scenario4.png';
import SolutionChart3 from '../../assets/images/usecase_scenario/img_scenario_top_chart.png';
import SolutionChartBG3 from '../../assets/images/usecase_scenario/img_scenario_top_bg.png';
import SolutionThumb3_1 from '../../assets/images/usecase_scenario/img_scenario_hypothesis.png';
import SolutionThumb3_2 from '../../assets/images/usecase_scenario/img_scenario_action.png';
import SolutionThumb3_3 from '../../assets/images/usecase_scenario/img_usecase_align.png';
import SolutionTopSlide3_1 from '../../assets/images/usecase_scenario/img_usecase_mision.png';
import SolutionTopSlide3_2 from '../../assets/images/usecase_scenario/img_usecase_qs.png';
import SolutionTopSlide3_3 from '../../assets/images/usecase_scenario/img_usecase_addq.png';
import SolutionBottomSlide3_1 from '../../assets/images/usecase_scenario/img_usecase_bottom_panelset.png';
import SolutionBottomSlide3_2 from '../../assets/images/usecase_scenario/img_usecase_bottom_mission.png';
import SolutionBottomSlide3_3 from '../../assets/images/usecase_scenario/img_usecase_bottom_addq.png';

import SolutionImage4_1 from '../../assets/images/company/companylogo_customer1.png';
import SolutionImage4_2 from '../../assets/images/company/companylogo_customer2.png';
import SolutionImage4_3 from '../../assets/images/company/companylogo_customer3.png';
import SolutionImage4_4 from '../../assets/images/company/companylogo_customer4.png';
import SolutionChart4 from '../../assets/images/usecase_customer/img_customer_top_chart.png';
import SolutionChartBG4 from '../../assets/images/usecase_customer/img_customer_top_bg.png';
import SolutionThumb4_1 from '../../assets/images/usecase_customer/img_customer_template.png';
import SolutionThumb4_2 from '../../assets/images/usecase_customer/img_customer_similar.png';
import SolutionThumb4_3 from '../../assets/images/usecase_customer/img_usecase_align.png';
import SolutionTopSlide4_1 from '../../assets/images/usecase_customer/img_customer_recruit.png';
import SolutionTopSlide4_2 from '../../assets/images/usecase_customer/img_customer_stq.png';
import SolutionTopSlide4_3 from '../../assets/images/usecase_customer/img_usecase_addq.png';
import SolutionBottomSlide4_1 from '../../assets/images/usecase_customer/img_usecase_bottom_panelset.png';
import SolutionBottomSlide4_2 from '../../assets/images/usecase_customer/img_usecase_bottom_addq.png';

function Solution1() {
  const data = {
    section1: {
      chart: SolutionChart1,
      bg: SolutionChartBG1,
      header: '사용성 개선 우선순위 선정',
      title: '문장형 응답을 통한\n사용성 저하의 원인 파악',
      labs: [
        { name: 'SolutionImage1_1', image: SolutionImage1_1 },
        { name: 'SolutionImage1_2', image: SolutionImage1_2 },
        { name: 'SolutionImage1_3', image: SolutionImage1_3 },
        { name: 'SolutionImage1_4', image: SolutionImage1_4 },
      ],
    },
    section2: {
      title: '피드백 수집 과정',
      slides: [
        { title: '미션 수행', desc: '조건에 맞는 응답자에게\n서비스의 핵심 기능을 경험하는\n미션을 지시합니다.', image: SolutionTopSlide1_1 },
        {
          title: '공통 질문',
          desc: '미션을 완료한 응답자는\n공통 질문에 응답합니다.\n공통 질문은 피드백 수집의 목적달성을 위해\n구성된 질문입니다.\n모든 서비스에 공통으로 적용되며,\n바뀌지 않습니다.',
          image: SolutionTopSlide1_2,
        },
        {
          title: '추가 질문',
          desc: '각 서비스별로 담당자가\n추가로 궁금한 사항을\n응답자에게 물어볼 수 있습니다.\n추가질문은 선택사항이며,\nDiby의 추천을 받거나\n담당자가 직접 입력할 수 있습니다.',
          image: SolutionTopSlide1_3,
        },
      ],
    },
    section3: {
      title: '응답자가 서비스의 핵심기능을 경험한 후,\n기능별 ‘불편사항’ 위주의 피드백을 분석합니다.',
      cards: [
        {
          title: '핵심 불편사항과 비율 확인',
          desc: '응답자의 제출한 불편사항 피드백을 카테고라이징 하여 표시합니다.\n응답 빈도를 기준으로 우선순위를 확인하세요.',
          thumb: SolutionThumb1_1.src,
        },
        {
          title: '불편사항의 원인 파악하기',
          desc: '불편요소가 왜 발생했는지 컴포넌트 기준으로 분석합니다.\n가장 많은 비율을 차지한 원인과 상세 피드백을 확인하세요.\nDiby에서 간략한 TDL을 제시합니다.',
          thumb: SolutionThumb1_2.src,
        },
        {
          title: '원하는 기준으로 정렬하기',
          desc: "응답자가 본인이 제출한 ‘불편사항’이 어느정도로 불편했는지 평가한 결과를 ‘치명도' 확인합니다.\n자주 발생하지는 않더라도 치명도가 높다면 이탈의 원인이 됩니다.\n치명도, 성별, 연령대, 기기 별로 어떤 불편사항이 주로 발생했는지 확인하세요.",
          thumb: SolutionThumb1_3.src,
        },
      ],
    },
    section4: {
      slides: [
        {
          title: '응답자 조건 설정',
          desc: '응답자의 인구통계학 조건을 설정하세요.\n설정한 조건과 일치하는 패널을\nDiby의 테스트 플랫폼에서 리쿠르팅합니다.',
          image: SolutionBottomSlide1_1,
        },
        {
          title: '응답자 미션 설정',
          desc: '응답자가 경험할 미션을 설정하세요.\n목표 달성여부, 경험과정에서의 불편사항을\n파악할 수 있습니다.',
          image: SolutionBottomSlide1_2,
        },
        {
          title: '추가 질문 선택',
          desc: 'Diby에서 제공하는 Question Set에서,\n추가로 확인하고 싶은 문항을 선택하세요.\n서비스 카테고리별로 가장 많이 사용하는\n검증된 문항 중 원하는 문항을 선택할 수 있습니다.',
          image: SolutionBottomSlide1_3,
        },
      ],
    },
  };

  return (
    <Page>
      <AppBar />
      <Section1 data={data.section1} />
      <Section2 data={data.section2} />
      <Section3 data={data.section3} />
      <Section4 data={data.section4} />
      <Footer />
    </Page>
  );
}

function Solution2() {
  const data = {
    section1: {
      chart: SolutionChart2,
      bg: SolutionChartBG2,
      header: 'UX 전략 수립',
      title: '고객의 인식과\n팀의 기획의도의 차이를 비교',
      labs: [
        { name: 'SolutionImage2_1', image: SolutionImage2_1 },
        { name: 'SolutionImage2_2', image: SolutionImage2_2 },
        { name: 'SolutionImage2_3', image: SolutionImage2_3 },
      ],
    },
    section2: {
      title: '피드백 수집 과정',
      slides: [
        {
          title: '기사용자 모집',
          desc: 'UX 포지션 분석은\n기존 고객에게 응답을 수집하는 것이\n가장 좋습니다.\n\n*신규 서비스일 경우, 응답자 모집 가능',
          image: SolutionTopSlide2_1,
        },
        {
          title: '공통 질문',
          desc: '응답자는 서비스 인식을 파악하기 위한\n핵심 질문에 응답합니다.\n핵심 질문은 피드백 수집의 목적달성을 위해\n구성된 질문입니다.\n모든 서비스에 공통으로 적용되며,\n바뀌지 않습니다.',
          image: SolutionTopSlide2_2,
        },
      ],
    },
    section3: {
      title: '프로덕트를 사용한 경험이 있는 응답자를 선별하여\n고객이 프로덕트를 어떻게 인식하는지 파악하고\n기획의도와 비교합니다.',
      cards: [
        {
          title: '고객의 프로덕트 사용 이유 \n(Motivation)',
          desc: '고객은 어떤 UX 요인으로 프로덕트를 즐겁다,\n혹은 유용하다고 인식하는지 파악합니다.\n고객이 서비스를 사용하는 이유가 프로덕트 기획의도와 일치하는지 확인하세요.',
          thumb: SolutionThumb2_1.src,
        },
        {
          title: '고객의 프로덕트 사용 방식 \n(Degree of Autonomy)',
          desc: '프로덕트를 사용하는 과정에서 의사결정 권한이 고객에게 있는지,\n시스템에게 있는지를 파악합니다.\n권한 경험이 프로덕트 기획의도와 일치하는지 확인하세요.',
          thumb: SolutionThumb2_2.src,
        },
        {
          title: '고객의 프로덕트 인식 \n(Locus of Control)',
          desc: '고객이 전반적으로 프로덕트를 어떻게 인식하는지 파악합니다.\n고객은 인식에 따라 프로덕트 사용여부를 판단할 수 있습니다.',
          thumb: SolutionThumb2_3.src,
        },
      ],
    },
    section4: {
      slides: [
        {
          title: '팀 내부 설계 의도 확인',
          desc: '디비디랩의 UX 포지션 분석 문항에 응답하세요.\n팀의 UX 설계 의도와 고객의 실제 인식을\n비교합니다.',
          image: SolutionBottomSlide2_1,
        },
        {
          title: '응답자 조건 설정',
          desc: '서비스의 운영 규모에 따라,\n실제 사용자 혹은 신규 사용자를 선택하여\n응답자 조건을 설정합니다.\nDiby의 테스트 플랫폼을 통해\n응답자를 리쿠르팅합니다.',
          image: SolutionBottomSlide2_2,
        },
      ],
    },
  };

  return (
    <Page>
      <AppBar />
      <Section1 data={data.section1} />
      <Section2 data={data.section2} />
      <Section3 data={data.section3} />
      <Section4 data={data.section4} />
      <Footer />
    </Page>
  );
}

function Solution3() {
  const data = {
    section1: {
      chart: SolutionChart3,
      bg: SolutionChartBG3,
      header: '가설 검정 및 의사결정',
      title: '고객의 행동과 선호,\n그 이유를 바탕으로\n프로덕트 개선을 위한 \n의사 결정',
      labs: [
        { name: 'SolutionImage3_1', image: SolutionImage3_1 },
        { name: 'SolutionImage3_2', image: SolutionImage3_2 },
        { name: 'SolutionImage3_3', image: SolutionImage3_3 },
        { name: 'SolutionImage3_4', image: SolutionImage3_4 },
      ],
    },
    section2: {
      title: '피드백 수집 과정',
      slides: [
        {
          title: '미션 수행',
          desc: '조건에 맞는 응답자에게\n서비스의 핵심 기능을 경험하는\n미션을 지시합니다.\n\n*일부 시나리오 테스트에서는\n프로토타입 혹은 프로덕트 설명으로\n대신합니다.',
          image: SolutionTopSlide3_1,
        },
        {
          title: '가설검정 질문',
          desc: '미션을 완료한 응답자는\n가설검정 질문에 응답합니다.\n피드백 수집 설계 시 수립한 가설을 바탕으로\n가설 검정 질문을 만들 수 있습니다.',
          image: SolutionTopSlide3_2,
        },
        {
          title: '추가 질문',
          desc: '각 서비스별로 담당자가\n추가로 궁금한 사항을\n응답자에게 물어볼 수 있습니다.\n추가질문은 선택사항이며,\nDiby의 추천을 받거나\n담당자가 직접 입력할 수 있습니다.',
          image: SolutionTopSlide3_3,
        },
      ],
    },
    section3: {
      title: '응답자가 주어진 시나리오에서\n어떻게 행동하는지를 관찰하고\n프로덕트 의사결정에 고객의 의견을 반영하세요.',
      cards: [
        {
          title: '핵심 가설과 검정 여부 확인',
          desc: '응답자의 제출한 불편사항 피드백을 카테고라이징 하여 표시합니다.\n응답 빈도를 기준으로 우선순위를 확인할 수 있습니다.',
          thumb: SolutionThumb3_1.src,
        },
        {
          title: '시나리오별 응답자 행동 확인',
          desc: '응답자가 지시받은 미션을 달성할 수 있었는지를 확인하고, 성공비율을 계산합니다. \n미션을 수행하는 과정에서 응답자의 인식,\n선호를 분석합니다.',
          thumb: SolutionThumb3_2.src,
        },
        {
          title: '원하는 기준으로 정렬',
          desc: '성별, 연령대, 기기 별로 어떤 응답이 분포되었는지 확인하세요.',
          thumb: SolutionThumb3_3.src,
        },
      ],
    },
    section4: {
      slides: [
        {
          title: '응답자 조건 설정',
          desc: '응답자의 인구통계학 조건을 설정하세요.\n설정한 조건과 일치하는 패널을\nDiby의 테스트 플랫폼에서 리쿠르팅합니다.',
          image: SolutionBottomSlide3_1,
        },
        {
          title: '응답자 미션 설정',
          desc: '응답자가 경험할 미션을 설정하세요.\n목표 달성여부, 경험과정에서의 불편사항을\n파악할 수 있습니다.',
          image: SolutionBottomSlide3_2,
        },
        {
          title: '추가 질문 선택',
          desc: 'Diby에서 제공하는 Question Set에서,\n추가로 확인하고 싶은 문항을 선택하세요.\n서비스 카테고리별로 가장 많이 사용하는\n검증된 문항 중 원하는 문항을 선택할 수 있습니다.',
          image: SolutionBottomSlide3_3,
        },
      ],
    },
  };

  return (
    <Page>
      <AppBar />
      <Section1 data={data.section1} />
      <Section2 data={data.section2} />
      <Section3 data={data.section3} />
      <Section4 data={data.section4} />
      <Footer />
    </Page>
  );
}

function Solution4() {
  const data = {
    section1: {
      chart: SolutionChart4,
      bg: SolutionChartBG4,
      header: '목표 고객군 선별',
      title: '다양한 기준별로\n분류한 고객집단 중,\n어떤 집단이 프로덕트 \n호감도가 높은지 확인',
      labs: [
        { name: 'SolutionImage4_1', image: SolutionImage4_1 },
        { name: 'SolutionImage4_2', image: SolutionImage4_2 },
        { name: 'SolutionImage4_3', image: SolutionImage4_3 },
        { name: 'SolutionImage4_4', image: SolutionImage4_4 },
      ],
    },
    section2: {
      title: '피드백 수집 과정',
      slides: [
        {
          title: '사용자 모집',
          desc: '별도의 프로덕트 경험 없이\n응답자 조건에 해당하는 응답자를 선별하여\n설문만으로 피드백을 수집합니다.',
          image: SolutionTopSlide4_1,
        },
        {
          title: '가설검정 질문',
          desc: '미션을 완료한 응답자는\n가설검정 질문에 응답합니다.\n피드백 수집 설계 시 수립한 가설을 바탕으로\n가설 검정 질문을 만들 수 있습니다.',
          image: SolutionTopSlide4_2,
        },
        {
          title: '분석 질문',
          desc: '각 서비스별로 담당자가\n추가로 궁금한 사항을\n응답자에게 물어볼 수 있습니다.\n추가질문은 선택사항이며,\nDiby의 추천을 받거나\n담당자가 직접 입력할 수 있습니다.',
          image: SolutionTopSlide4_3,
        },
      ],
    },
    section3: {
      title: '각 조건별로 응답자를 분류하여\n고객의 니즈를 파악하거나,\n가장 프로덕트 선호도가 높은 집단을 찾으세요.',
      cards: [
        {
          title: '문항별 분석 템플릿 활용',
          desc: '객관식 응답을 기준으로 주관식 응답을 분류해서 요약할 수 있습니다.',
          thumb: SolutionThumb4_1.src,
        },
        {
          title: '유사 산업군 평균 확인',
          desc: 'Diby에서 추천한 문항으로 피드백을 수집할 경우,\n다른 팀에서는 어떤 응답을 받았는지 익명화된 데이터로 확인할 수 있습니다.',
          thumb: SolutionThumb4_2.src,
        },
        {
          title: '원하는 기준으로 정렬',
          desc: '성별, 연령대, 기기 별로 어떤 응답이 분포되었는지 확인하세요.',
          thumb: SolutionThumb4_3.src,
        },
      ],
    },
    section4: {
      slides: [
        {
          title: '응답자 조건 설정',
          desc: '응답자의 인구통계학 조건을 설정하세요.\n설정한 조건과 일치하는 패널을\nDiby의 테스트 플랫폼에서 리쿠르팅합니다.',
          image: SolutionBottomSlide4_1,
        },
        {
          title: '추가 질문 선택',
          desc: 'Diby에서 제공하는 Question Set에서,\n추가로 확인하고 싶은 문항을 선택하세요.\n서비스 카테고리별로 가장 많이 사용하는\n검증된 문항 중 원하는 문항을 선택할 수 있습니다.',
          image: SolutionBottomSlide4_2,
        },
      ],
    },
  };

  return (
    <Page>
      <AppBar />
      <Section1 data={data.section1} />
      <Section2 data={data.section2} />
      <Section3 data={data.section3} />
      <Section4 data={data.section4} />
      <Footer />
    </Page>
  );
}

export { Solution1, Solution2, Solution3, Solution4 };
