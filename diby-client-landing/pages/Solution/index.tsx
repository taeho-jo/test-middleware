import React from 'react';
import Page from '../../components/Page';
import AppBar from '../../components/AppBar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Footer from '../../components/Footer';

import SolutionImage1_1 from '../../../public/assets/images/company/companylogo_ui1.png';
import SolutionImage1_2 from '../../../public/assets/images/company/companylogo_ui2.png';
import SolutionImage1_3 from '../../../public/assets/images/company/companylogo_ui3.png';
import SolutionImage1_4 from '../../../public/assets/images/company/companylogo_ui4.png';
import SolutionChart1 from '../../../public/assets/images/usecase_UI/img_ui_top_chart.png';
import SolutionChartBG1 from '../../../public/assets/images/usecase_UI/img_ui_top_bg.png';
import SolutionThumb1_1 from '../../../public/assets/images/usecase_UI/img_ui_ratio2.png';
import SolutionThumb1_2 from '../../../public/assets/images/usecase_UI/img_ui_cause.png';
import SolutionThumb1_3 from '../../../public/assets/images/usecase_UI/img_ui_align2.png';
import SolutionTopSlide1_1 from '../../../public/assets/images/usecase_UI/img_usecase_mision.png';
import SolutionTopSlide1_2 from '../../../public/assets/images/usecase_UI/img_usecase_qs.png';
import SolutionTopSlide1_3 from '../../../public/assets/images/usecase_UI/img_usecase_addq.png';
import SolutionBottomSlide1_1 from '../../../public/assets/images/usecase_UI/img_usecase_bottom_panelset.png';
import SolutionBottomSlide1_2 from '../../../public/assets/images/usecase_UI/img_usecase_bottom_mission.png';
import SolutionBottomSlide1_3 from '../../../public/assets/images/usecase_UI/img_usecase_bottom_addq2.png';

import SolutionImage2_1 from '../../../public/assets/images/company/companylogo_ux1.png';
import SolutionImage2_2 from '../../../public/assets/images/company/companylogo_ux2.png';
import SolutionImage2_3 from '../../../public/assets/images/company/companylogo_ux3.png';
import SolutionChart2 from '../../../public/assets/images/usecase_UX/img_ux_top_chart.png';
import SolutionChartBG2 from '../../../public/assets/images/usecase_UX/img_ux_top_bg.png';
import SolutionThumb2_1 from '../../../public/assets/images/usecase_UX/img_ux_reason.png';
import SolutionThumb2_2 from '../../../public/assets/images/usecase_UX/img_ux_usecase.png';
import SolutionThumb2_3 from '../../../public/assets/images/usecase_UX/img_ux_cognition.png';
import SolutionTopSlide2_1 from '../../../public/assets/images/usecase_UX/img_ux_recruit.png';
import SolutionTopSlide2_2 from '../../../public/assets/images/usecase_UX/img_usecase_qs.png';
import SolutionBottomSlide2_0 from '../../../public/assets/images/usecase_UX/img_ui_bottom_addq.png';
import SolutionBottomSlide2_1 from '../../../public/assets/images/usecase_UX/img_ux_bottom_purpose.png';
import SolutionBottomSlide2_2 from '../../../public/assets/images/usecase_UX/img_usecase_bottom_panelset.png';

import SolutionImage3_1 from '../../../public/assets/images/company/companylogo_scenario1.png';
import SolutionImage3_2 from '../../../public/assets/images/company/companylogo_scenario2.png';
import SolutionImage3_3 from '../../../public/assets/images/company/companylogo_scenario3.png';
import SolutionImage3_4 from '../../../public/assets/images/company/companylogo_scenario4.png';
import SolutionChart3 from '../../../public/assets/images/usecase_scenario/img_scenario_top_chart.png';
import SolutionChartBG3 from '../../../public/assets/images/usecase_scenario/img_scenario_top_bg.png';
import SolutionThumb3_1 from '../../../public/assets/images/usecase_scenario/img_scenario_hypothesis.png';
import SolutionThumb3_2 from '../../../public/assets/images/usecase_scenario/img_scenario_action.png';
import SolutionThumb3_3 from '../../../public/assets/images/usecase_scenario/img_usecase_align.png';
import SolutionTopSlide3_1 from '../../../public/assets/images/usecase_scenario/img_usecase_mision.png';
import SolutionTopSlide3_2 from '../../../public/assets/images/usecase_scenario/img_usecase_qs.png';
import SolutionTopSlide3_3 from '../../../public/assets/images/usecase_scenario/img_usecase_addq.png';
import SolutionBottomSlide3_1 from '../../../public/assets/images/usecase_scenario/img_usecase_bottom_panelset.png';
import SolutionBottomSlide3_2 from '../../../public/assets/images/usecase_scenario/img_usecase_bottom_mission.png';
import SolutionBottomSlide3_3 from '../../../public/assets/images/usecase_scenario/img_scenario_bottom_addq.png';

import SolutionImage4_1 from '../../../public/assets/images/company/companylogo_customer1.png';
import SolutionImage4_2 from '../../../public/assets/images/company/companylogo_customer2.png';
import SolutionImage4_3 from '../../../public/assets/images/company/companylogo_customer3.png';
import SolutionImage4_4 from '../../../public/assets/images/company/companylogo_customer4.png';
import SolutionChart4 from '../../../public/assets/images/usecase_customer/img_customer_top_chart.png';
import SolutionChartBG4 from '../../../public/assets/images/usecase_customer/img_customer_top_bg.png';
import SolutionThumb4_1 from '../../../public/assets/images/usecase_customer/img_customer_template.png';
import SolutionThumb4_2 from '../../../public/assets/images/usecase_customer/img_customer_similar.png';
import SolutionThumb4_3 from '../../../public/assets/images/usecase_customer/img_usecase_align.png';
import SolutionTopSlide4_1 from '../../../public/assets/images/usecase_customer/img_customer_recruit.png';
import SolutionTopSlide4_2 from '../../../public/assets/images/usecase_customer/img_customer_stq.png';
import SolutionTopSlide4_3 from '../../../public/assets/images/usecase_customer/img_usecase_addq.png';
import SolutionBottomSlide4_1 from '../../../public/assets/images/usecase_customer/img_persona_bottom_addq.png';
import SolutionBottomSlide4_2 from '../../../public/assets/images/usecase_customer/img_persona_bottom_panelset.png';
import SolutionBottomSlide4_3 from '../../../public/assets/images/usecase_customer/img_persona_bottom_qs.png';

function Solution1() {
  const data = {
    section1: {
      chart: SolutionChart1,
      bg: SolutionChartBG1,
      header: '사용성 테스트',
      title: '핵심 기능을 사용하는 과정에서\n사용자의 불편함을 파악하고\n개선 우선순위를 선정하세요.',
      labs: [
        { name: 'SolutionImage1_1', image: SolutionImage1_1 },
        { name: 'SolutionImage1_2', image: SolutionImage1_2 },
        { name: 'SolutionImage1_3', image: SolutionImage1_3 },
        { name: 'SolutionImage1_4', image: SolutionImage1_4 },
      ],
    },
    section2: {
      title: '응답자가 사용성 테스트에 참여하는 방법',
      slides: [
        {
          title: '1. 미션 수행',
          desc:
            'Diby 패널 중,\n' +
            '원하시는 조건에 맞는 응답자를 선별합니다.\n' +
            '선별된 응답자에게 프로덕트의 핵심 기능을\n' +
            '직접 경험하는 미션을 지시합니다.\n' +
            '미션 수행 여부를 인증화면 등으로 확인합니다. ',
          image: SolutionTopSlide1_1,
        },
        {
          title: '2. 설문 응답',
          desc: '사용성 테스트에서 필수로 포함해야하는 질문과\n' + '원하시는 질문을 추가한 질문 세트에 응답합니다. ',
          image: SolutionTopSlide1_2,
        },
        {
          title: '3. 피드백 정제',
          desc: 'Diby 의 불성실 피드백 알고리즘으로\n' + '성실한 피드백을 남긴 응답자에게만\n' + '보상을 지급합니다. ',
          image: SolutionTopSlide1_3,
        },
      ],
    },
    section3: {
      title: '응답자가 서비스의 핵심기능을 경험한 후,\n응답자의 불편사항 문장형 피드백을 모두 읽고,\n분류하는 시간을 절약해드립니다. ',
      cards: [
        {
          title: 'Diby 패널이\n사용상의 불편함을\n주관식으로 답변하기',
          desc: `Diby 패널 중 원하는 조건으로 표집하거나,
제공해드리는 외부 링크를 통해 실제 사용자 중에서
응답자를 모집할 수 있습니다. 

응답자는 주어진 미션을 수행하며 서비스를 경험하고
그 과정에서 겪은 불편사항을 주관식으로 응답합니다.
실제 미션을 잘 수행했는지는
인증사진(스크린샷)을 제출하여 확인합니다.`,
          thumb: SolutionThumb1_1.src,
        },
        // {
        //   title: '불편사항의 원인 파악하기',
        //   desc: '불편요소가 왜 발생했는지 컴포넌트 기준으로 분석합니다.\n가장 많은 비율을 차지한 원인과 상세 피드백을 확인하세요.\nDiby에서 간략한 TDL을 제시합니다.',
        //   thumb: SolutionThumb1_2.src,
        // },
        {
          title: '피드백의\n원인과 결과를 분석해서\n빈도별 우선순위 정하기',
          desc: `Diby 의 자연어처리 기술을 통해 
수집한 주관식 응답을 라벨링합니다.

라벨은 불편함의 대상, 시점, 이유 카테고리에서 진행되며,
제이콥 닐슨의 휴리스틱 10 요소와 Diby의 자체 기준으로 개발했습니다.

가장 많이 라벨링된 원인과 결과로
사용성 개선 우선순위를 선정해보세요.`,
          thumb: SolutionThumb1_3.src,
        },
      ],
    },
    section4: {
      slides: [
        {
          title: '1. 리서치 종류 선택',
          btnTitle: '1. 리서치 선택',
          desc:
            '어떻게 리서치를 시작하지?\n이제 고민하지 마세요.\nDiby에서 리서치를 통해 달성하고 싶은 목적별로\n리서치 종류를 제공하고 있습니다.\n각 리서치에서 제공하는 공통 질문 이외에도\n' +
            '원하시는 질문을 추가하거나,\n' +
            'Diby의 추천 질문을 선택하실 수 있습니다.',
          image: SolutionBottomSlide1_3,
        },
        {
          title: '2. 응답자 조건 설정',
          btnTitle: '2. 응답자 조건 설정',
          desc:
            '원하시는 응답자의 인구통계학 조건을 설정하세요.\n성별, 연령대, 사용 기기는 기본으로 제공하며,\n' +
            '추가로 조건을 커스텀할 수 있습니다.\n설정하신 조건으로 Diby 패널 중, 응답자를 선별합니다.',
          image: SolutionBottomSlide1_1,
        },
        {
          title: '3. 지시할 미션 입력',
          btnTitle: '3. 지시할 미션 입력',
          desc:
            '응답자가 수행할 미션을 설정하세요.\n미션 수행 여부는 인증 이미지 등으로 100% 검수하며,\n' +
            '미션 수행 성공비율을 파악할 수 있습니다.\n미션은 총 3개까지 입력할 수 있습니다.',
          image: SolutionBottomSlide1_2,
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
      header: 'UX 포지션 분석',
      title: '고객이 프로덕트를 어떻게 인식하고\n있는지를 파악하고,\n고객 만족도가 가장 높은 지점을 찾아\n팀의 기획의도와 일치시키세요. ',
      labs: [
        { name: 'SolutionImage2_1', image: SolutionImage2_1 },
        { name: 'SolutionImage2_2', image: SolutionImage2_2 },
        { name: 'SolutionImage2_3', image: SolutionImage2_3 },
      ],
    },
    section2: {
      title: '응답자가 UX 포지션 분석에 참여하는 방법',
      slides: [
        {
          title: '1. 실사용 고객 모집',
          desc:
            'Diby 패널 중,\n' +
            '테스트 대상 프로덕트의 최근 1년 이내\n' +
            '실사용자를 선별합니다.\n' +
            '초기 서비스이거나,\n' +
            '보다 구체적인 조건(활성사용자 기준 적용 등)을\n' +
            '원하시는 경우,\n' +
            '프로덕트 화면에서 띄우거나 자체 메시지 등으로\n' +
            '모집하실 수 있도록 외부 링크를 제공해드립니다. ',
          image: SolutionTopSlide2_1,
        },
        {
          title: '2. 설문 응답',
          desc: `UX 포지션 분석에서 인식 평가를 위해
제공하는 질문에 응답합니다.
질문을 통해 프로덕트 사용의 동기부여 요인
(즐거움 / 유용함)과 의사결정 권한의 정도를 파악하고,
두가지 축을 설명할 수 있는 경험 요소(UX Factor)를
측정합니다.
성실한 응답만을 선별하여 보상을 지급하고,
프로덕트의 UX 포지션을 계산합니다.

프로덕트의 UX 포지션을 분석할 때,
팀에도 유사한 설문을 진행하여 그 결과값을 비교합니다
          `,
          image: SolutionTopSlide2_2,
        },
      ],
    },
    section3: {
      title: '추상적인 프로덕트의 UX 전략을 정량화하세요.',
      cards: [
        {
          title: '동기부여 측정하기\n(Motivation)',
          desc:
            '고객이 어떤 경험 요소(UX Factor)로\n' +
            '프로덕트를 즐겁거나 유용하다고 인식하는지 파악합니다.\n' +
            '고객이 서비스를 사용하는 이유가\n' +
            '프로덕트 기획의도와 일치하는지 확인할 수 있습니다. \n' +
            '원하는 지점으로 이동하기 위해 고려해야할 경험 요소를 제안드립니다. ',
          thumb: SolutionThumb2_1.src,
        },
        {
          title: '사용방식 측정하기\n(Degree of Autonomy)',
          desc:
            '고객이 어떤 경험 요소(UX Factor)로\n' +
            '프로덕트 사용과정에서 의사결정 권한을 인식하는지 파악합니다.\n' +
            '의사결정 권한은 고객에게 있거나 시스템에게 있을 때,\n' +
            '만족도가 어떠한지 확인해보세요. \n' +
            '고객의 인식이 프로덕트 기획의도와 일치하는지 비교하고\n' +
            '원하는 지점으로 이동하기 위해 고려해야할 경험 요소를 제안드립니다. ',
          thumb: SolutionThumb2_2.src,
        },
        // {
        //   title: '고객의 프로덕트 인식 \n(Locus of Control)',
        //   desc: '고객이 전반적으로 프로덕트를 어떻게 인식하는지 파악합니다.\n고객은 인식에 따라 프로덕트 사용여부를 판단할 수 있습니다.',
        //   thumb: SolutionThumb2_3.src,
        // },
      ],
    },
    section4: {
      slides: [
        {
          title: '1. 리서치 종류 선택',
          btnTitle: '1. 리서치 선택',
          desc:
            '어떻게 리서치를 시작하지?\n' +
            '이제 고민하지 마세요. \n' +
            'Diby에서 리서치를 통해 달성하고 싶은 목적별로\n' +
            '리서치 종류하고 있습니다.' +
            '\n리서치에서 제공하는 공통 질문 이외에도\n' +
            '원하시는 질문을 추가하거나,\n' +
            'Diby의 추천 질문을 선택하실 수 있습니다.',
          image: SolutionBottomSlide2_0,
        },
        {
          title: '2. 내부 설계의도 확인',
          btnTitle: '2. 내부 설계의도 확인',
          desc:
            'Diby의 팀용 UX 포지션 분석 문항에 응답하세요.\n응답한 결과를 바탕으로\n' +
            '팀에서 프로덕트를 어떻게 인식하고 있는지 계산합니다.\n팀의 UX 설계 의도와 실사용 고객의 응답을 비교하고,\n' +
            '기획의도와 고객의 인식을 일치시키기 위해\n' +
            '무엇을 해야하는지 제안합니다. ',
          image: SolutionBottomSlide2_1,
        },
        {
          title: '3. 세그먼트 기준 설정',
          btnTitle: '3. 세그먼트 기준 설정',
          desc:
            '고객의 인식 결과를 확인할 때,\n' +
            '적용하고 싶은 기준을 설정해주세요.\n' +
            '성별, 연령대와 같은 일반적인 인구통계학 기준부터\n' +
            '활성사용의 정도, 서비스 만족도, BEI 등\n' +
            '다양한 기준으로 결과를 분류하여 비교할 수 있습니다. ',
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
      header: '시나리오 검증',
      title: '가설 검증과 AB 테스트를 통해\n팀의 커뮤니케이션 비용을 줄이세요.',
      labs: [
        { name: 'SolutionImage3_1', image: SolutionImage3_1 },
        { name: 'SolutionImage3_2', image: SolutionImage3_2 },
        { name: 'SolutionImage3_3', image: SolutionImage3_3 },
        { name: 'SolutionImage3_4', image: SolutionImage3_4 },
      ],
    },
    section2: {
      title: '응답자가 시나리오 검증에 참여하는 방법',
      slides: [
        {
          title: '1. 미션 수행',
          desc:
            'Diby 패널 중, 원하시는 조건에 맞는 응답자를 선별합니다.\n' +
            '선별된 응답자에게 프로덕트의 핵심 기능을\n' +
            '직접 경험하는 미션을 지시합니다.\n' +
            '미션 수행 여부를 인증화면 등으로 확인합니다. ',
          image: SolutionTopSlide3_1,
        },
        {
          title: '2. 설문 응답',
          desc: 'Diby가 추천한 가설과\n' + '원하시는 질문을 추가한 질문 세트에 응답합니다. ',
          image: SolutionTopSlide3_2,
        },
        {
          title: '3. 피드백 정제',
          desc: 'Diby의 불성실 피드백 알고리즘으로\n' + '성실한 피드백을 남긴 응답자에게만 보상을 지급합니다. ',
          image: SolutionTopSlide3_3,
        },
      ],
    },
    section3: {
      title: '주어진 시나리오에서 응답자가\n어떻게 행동하거나 느끼는지를\n확인하여 데이터 기반으로 의사결정하세요.',
      cards: [
        {
          title: '고객 피드백으로 가설 검증하기',
          desc:
            '직접 수립한 가설 혹은 목적에 맞게\n' +
            'Diby가 추천한 가설로 문항을 만듭니다.\n가설을 수립할 때 목표도 함께 설정하여\n고객의 행동 혹은 답변으로 가설이 검정되었는지 여부를 파악합니다.',
          thumb: SolutionThumb3_1.src,
        },
        {
          title: '시나리오별 응답자의 행동 확인하기',
          desc:
            "응답자가 미션을 도움말 없이 달성한 정도로 ‘미션 성공비율' 을 계산합니다.\n" +
            '미션을 수행하는 과정에서 응답자의 인식과 선호를 확인할 수 있습니다.',
          thumb: SolutionThumb3_2.src,
        },
        {
          title: '원하는 기준으로 정렬하기',
          desc: `성별, 연령대 혹은 최초 설계시 설정한 추가 기준
(중고차를 구매해본 자 / 한번도 구매한 적 없는 자, 
친구에게 돈을 빌려본 적 있는 자 / 빌려본 적 없는 자 등)으로
불편사항의 언급빈도와 치명도가 어떻게 달라지는지 확인해보세요.
프로덕트별로 가장 집중해야할 고객 집단이 느끼는 불편사항을 
우선적으로 개선할 수 있습니다.`,
          thumb: SolutionThumb3_3.src,
        },
      ],
    },
    section4: {
      slides: [
        {
          title: '1. 리서치 종류 선택',
          btnTitle: '1. 리서치 선택',
          desc:
            '어떻게 리서치를 시작하지?\n' +
            '이제 고민하지 마세요. \n' +
            'Diby에서 리서치를 통해 달성하고 싶은 목적별로\n' +
            '리서치 종류를 제공하고 있습니다.' +
            '\n리서치에서 제공하는 공통 질문 이외에도\n' +
            '원하시는 질문을 추가하거나,\n' +
            'Diby의 추천 질문을 선택하실 수 있습니다.',
          image: SolutionBottomSlide3_3,
        },
        {
          title: '2. 응답자 조건 설정',
          btnTitle: '2. 응답자 조건 설정',
          desc:
            '원하시는 응답자의 인구통계학 조건을 설정하세요.\n' +
            '성별, 연령대, 사용 기기는 기본으로 제공하며,\n' +
            '추가로 조건을 커스텀할 수 있습니다. \n' +
            '설정하신 조건으로 Diby 패널 중, 응답자를 선별합니다.',
          image: SolutionBottomSlide3_1,
        },
        {
          title: '3. 지시할 미션 입력',
          btnTitle: '3. 지시할 미션 입력',
          desc:
            '응답자가 수행할 미션을 설정하세요.\n미션 수행 여부는 인증이미지 등으로 100% 검수하며,\n' +
            '미션 수행 성공비율을 파악할 수 있습니다.\n미션은 총 3개까지 입력할 수 있습니다.',
          image: SolutionBottomSlide3_2,
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
      header: '퍼소나 분석',
      title: '프로덕트 사용 방식 혹은 호감도가\n높은 집단이 어떤 특징을 가졌는지\n확인하여 퍼소나를 정의하세요.',
      labs: [
        { name: 'SolutionImage4_1', image: SolutionImage4_1 },
        { name: 'SolutionImage4_2', image: SolutionImage4_2 },
        { name: 'SolutionImage4_3', image: SolutionImage4_3 },
        { name: 'SolutionImage4_4', image: SolutionImage4_4 },
      ],
    },
    section2: {
      title: '응답자가 퍼소나 분석에 참여하는 방법',
      slides: [
        {
          title: '1. 응답자 모집',
          desc:
            'Diby 패널 중,\n' +
            '테스트 대상 프로덕트의 최근 1년 이내\n' +
            '실사용자를 선별합니다.\n' +
            '구체적인 조건(활성사용자 기준 적용 등)을 원하시는 경우,\n' +
            '프로덕트 화면에서 띄우거나 자체 메시지 등으로\n' +
            '모집하실 수 있도록 외부 링크를 제공해드립니다. \n' +
            '초기서비스이거나 프로덕트가 없을 때는\n' +
            '프로덕트에 대한 상세한 설명을 첨부하거나\n' +
            '프로토타입을 경험하게 할 수 있습니다.',
          image: SolutionTopSlide4_1,
        },
        {
          title: '2. 설문 응답',
          desc:
            '퍼소나 분석 템플릿에서 퍼소나 분류를 위해\n' +
            '제공하는 질문에 응답합니다.\n그 이외에도 직접 추가하신 문항에 응답합니다.\n이후 퍼소나의 분포와 퍼소나별 만족도 등을\n' +
            '파악할 수 있습니다.',
          image: SolutionTopSlide4_2,
        },
        {
          title: '3. 피드백 정제',
          desc: 'Diby 의 불성실 피드백 알고리즘으로\n' + '성실한 피드백을 남긴 응답자에게만 보상을 지급합니다. ',
          image: SolutionTopSlide4_3,
        },
      ],
    },
    section3: {
      title: '실사용 고객 혹은 잠재고객의\n프로덕트 선호도별로 고객의 특징을\n파악하여 퍼소나를 정의하세요.',
      cards: [
        {
          title: '퍼소나 분류 문항 선택하기',
          desc: '퍼소나를 분류하기 위한 다양한 기준 문항을 제공합니다.\n라이프 스타일, 프로덕트 사용 패턴, 개인의 신념 혹은 가치관 등을 통해\n퍼소나를 분류하고 이후 응답을 교차분석할 수 있습니다.  ',
          thumb: SolutionThumb4_1.src,
        },
        {
          title: '응답별로 퍼소나 파악하기',
          desc: '특정 응답을 한 패널이 어떠한 퍼소나 기준으로 분포되어있는지 파악합니다.\n만족도, 추천의향, 추가 기능 등 핵심 의사결정을 위한 문항에서 응답별로\n퍼소나가 어떻게 분포되어있는지 확인해보세요.',
          thumb: SolutionThumb4_2.src,
        },
        {
          title: '원하는 기준으로 정렬하기',
          desc:
            '원하는 고객 세그먼트별로 응답을 재정렬할 수 있습니다.\n성별, 연령대 혹은 최초 설계시 설정한 추가 기준\n(중고차를 구매해본 자 / 한번도 구매한 적 없는 자,\n' +
            '친구에게 돈을 빌려본 적 있는 자 / 빌려본 적 없는 자 등)\n으로 불편사항의 언급빈도와 치명도가 어떻게 달라지는지 확인해보세요.\n' +
            '프로덕트별로 가장 집중해야할 고객 집단이 느끼는 불편사항을\n' +
            '우선적으로 개선할 수 있습니다.  ',
          thumb: SolutionThumb4_3.src,
        },
      ],
    },
    section4: {
      slides: [
        {
          title: '1. 리서치 종류 선택',
          btnTitle: '1. 리서치 선택',
          desc:
            '어떻게 리서치를 시작하지?\n' +
            '이제 고민하지 마세요. \n' +
            'Diby에서 리서치를 통해 달성하고 싶은 목적별로\n' +
            '리서치 종류를 제공하고 있습니다.' +
            '\n리서치에서 제공하는 공통 질문 이외에도\n' +
            '원하시는 질문을 추가하거나,\n' +
            'Diby의 추천 질문을 선택하실 수 있습니다.',
          image: SolutionBottomSlide4_1,
        },
        {
          title: '2. 퍼소나 조건 설정',
          btnTitle: '2. 퍼소나 조건 설정',
          desc:
            '원하시는 퍼소나의 조건을 설정하세요.\n' +
            '성별, 연령대, 사용 기기는 기본으로 제공하며,\n' +
            '추가로 조건을 커스텀할 수 있습니다. \n' +
            '설정하신 조건으로 Diby 패널 중, 응답자를 선별합니다.',
          image: SolutionBottomSlide4_2,
        },
        {
          title: '3. 문항선택 / 직접입력',
          btnTitle: '3. 문항선택 / 직접입력',
          desc: '리서치의 목적에 맞게 Diby 가 추천한 문항을\n선택하고 커스텀하세요.\n혹은 원하시는 문항을 직접 제작할 수 있습니다.',
          image: SolutionBottomSlide4_3,
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
