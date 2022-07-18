import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import { body2_bold, body2_regular } from '../../../styles/FontStyles';
import PolicyHeader from '../../../components/atoms/PolicyHeader';
import { RULES_SERVICE_DATE_OPTION } from '../../../common/util/commonVar';
import { useRouter } from 'next/router';
import withTokenAuth from '../../../hoc/withTokenAuth';

const Service20220705 = () => {
  const router = useRouter();
  const [selected, setSelected] = useState({
    date: '20220705',
  });

  const changeDate = useCallback(date => {
    router.push(`/rules/service/${date}`);
  }, []);

  return (
    <div css={mainContainer}>
      <div css={contentsContainer}>
        <PolicyHeader DATE_OPTION={RULES_SERVICE_DATE_OPTION} selected={selected} title={'이용 약관'} onClick={changeDate} />
        <div>
          <p css={body2_bold}>제 1 장 총칙</p>

          <p css={[body2_bold]}> 제 1 조 (목적)</p>

          <p css={body2_regular}>
            이 약관은 디비디랩 주식회사(이하 "회사")가 제공하는 Diby 및 Diby 관련 제반 서비스(이하 "서비스")의 이용과 관련하여 회사와 회원과의 권리,
            의무 및 책임사항을 규정함을 목적으로 합니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 2 조 (정의)</p>

          <p css={body2_regular}>이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>

          <p css={body2_regular}>
            1. "서비스"라 함은 구현되는 단말기(PC, TV, 휴대형단말기 등의 각종 유무선 장치를 포함)와 상관없이 "회원"이 이용할 수 있는 Diby 및 Diby 관련
            제반 서비스를 의미합니다.
          </p>

          <p css={body2_regular}>
            2. "데이터 수집 및 조사 서비스"라 함은 "회사"가 제공하는 "서비스" 가운데, "회원"의 요청 및 별도 용역계약 체결에 따라 "회사"가 "패널" 등을
            대상으로 수행하는 테스트 프로그래밍, 응답자 선정, 설문조사 진행 및 응답 수집, 결과물 작성 등을 포함하는 조사활동에 관한 일체의 "서비스"를
            의미합니다."
          </p>

          <p css={body2_regular}>
            3. "플랫폼 이용 서비스"라 함은 "회사"가 제공하는 "서비스" 가운데, "회원"의 요청에 따라 "회사"의 리서치 설계 및 데이터 분석 솔루션을
            활용하여 "회원"이 제공한 데이터를 바탕으로 리서치를 설계하거나 수집한 데이터에 대한 분석 진행 및 분석 결과를 제공하는 "서비스"를
            의미합니다.
          </p>

          <p css={body2_regular}>
            4. "회원"이라 함은 회사의 "서비스"에 접속하여 이 약관에 따라 "회사"와 이용계약을 체결하고 "회사"가 제공하는 "서비스"를 이용하는 이용자를
            말합니다.
          </p>

          <p css={body2_regular}>5. "비회원"이라 함은 회원에 가입하지 않고 "회사"가 제공하는 "서비스"를 이용하는 자를 말합니다.</p>

          <p css={body2_regular}>
            6. "애플리케이션"이라 함은 iOS, Android, Window, Rim 등의 모바일 운영체제에 탑재되어 있는 앱스토어를 통해 단말기에 설치하여 이용할 수
            있도록 구성된 프로그램을 말합니다.
          </p>

          <p css={body2_regular}>7. "패널"은 "회원"이 "서비스"를 이용하여 의뢰한 테스트의 응답자를 의미합니다.</p>

          <p css={body2_regular}>
            8. "아이디"라 함은 "회원"의 식별과 "서비스"이용을 위하여 "회원"이 정하고 "회사"가 승인하는 이메일 주소(전자우편)를 의미합니다.
          </p>

          <p css={body2_regular}>
            9. "비밀번호"라 함은 "회원"이 부여 받은 "아이디"와 일치되는 "회원"임을 확인하고 비밀보호를 위해 "회원" 자신이 정한 문자, 숫자, 특수문자 중
            2가지 이상의 조합을 의미합니다.
          </p>

          <p css={body2_regular}>
            10. "유료서비스"라 함은 "데이터 수집 및 조사 서비스" 및 "플랫폼 이용 서비스"를 포함하여 "회사"가 유료로 제공하는 각종 콘텐츠 (각종
            정보콘텐츠, VOD, 아이템 기타 유료 콘텐츠를 포함), 통계 자료 및 제반 "서비스" 등을 의미합니다.
          </p>

          <p css={body2_regular}>
            11. "응답데이터"라 함은 "회원"의 "데이터 수집 및 조사 서비스" 요청에 따라 "회사"가 "패널" 및 / 또는 기타 대상자를 대상으로 "데이터 수집 및
            조사 서비스"를 수행하는 과정에서 생성 또는 작성한 일체의 데이터를 의미합니다.
          </p>

          <p css={body2_regular}>
            12. "결과물"이라 함은 "회사"의 "데이터 수집 및 조사 서비스" 수행에 따라 얻은 "응답데이터"를 토대로 분석, 작성한 결과보고서 등 최종 형태의
            결과물을 의미합니다.
          </p>

          <p css={body2_regular}>
            13. "게시물"이라 함은 "회원"이 "서비스"를 이용함에 있어 "회원"이 "서비스"에 게시한 문자, 문서, 그림, 음성, 링크, 파일 혹은 이들의 조합으로
            이루어진 정보 등 모든 정보나 자료를 의미합니다.
          </p>

          <p css={body2_regular}>
            14. "환불"이라 함은 "유료서비스"를 이용하기 위해 "회사"가 정하는 결제 수단을 통하여 결제한 금액을 현금으로 돌려받거나, 당해 금액에 대해
            승인취소를 하는 것을 말합니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 3 조 (약관의 명시와 개정)</p>

          <p css={body2_regular}>1. "회사"는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면(전면)에 게시합니다.</p>

          <p css={body2_regular}>
            2. "회사"는 이용자가 약관에 동의하기에 앞서 약관에 정하여져 있는 내용 중 "유료서비스" 가격, 결제조건과 같은 중요한 내용을 이용자가 이해할
            수 있도록 별도의 연결화면 또는 팝업화면 등을 제공하여 이용자의 확인을 구하여야 합니다.
          </p>

          <p css={body2_regular}>
            3. "회사"는 "약관의 규제에 관한 법률", "정보통신망 이용촉진 및 정보보호 등에 관한 법률(이하 "정보통신망법")" 등 관련법을 위배하지 않는
            범위에서 이 약관을 개정할 수 있습니다.
          </p>

          <p css={body2_regular}>
            4. "회사"는 약관을 개정할 경우, 적용일자 및 개정사유를 명시하여 현행약관과 함께 사이트의 초기화면에 그 적용일 7일 이전부터 적용일자
            전일까지 공지합니다. 다만, 회원에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우
            "회사"는 개정 전 내용과 개정 후 내용을 명확하게 비교하여 회원이 알기 쉽도록 표시합니다.
          </p>

          <p css={body2_regular}>
            5. 변경된 약관 조항 중 상품 또는 용역의 구매계약에 관한 조항은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 이미 체결된 계약에
            대해서는 변경 전의 조항이 그대로 적용됩니다. 다만, 이미 계약을 체결한 회원이 변경된 조항의 적용을 받기를 원하는 뜻을 상기 제 4항에 의한
            변경약관의 공지기간 내에 "회사에 송신하여 "회사"의 동의를 받은 경우에는 변경된 조항이 적용됩니다.
          </p>

          <p css={body2_regular}>
            6. "회사"가 개정약관을 공지 또는 통지하면서 "회원"에게 30일 기간 내에 의사표시를 하지 않으면 의사표시가 표명된 것으로 본다는 뜻을 명확하게
            공지 또는 고지하였음에도 "회원"이 명시적으로 거부의 의사표시를 하지 아니한 경우, "회원"이 개정약관에 동의한 것으로 봅니다.
          </p>

          <p css={body2_regular}>
            7. "회원"이 개정약관의 적용에 동의하지 않는 경우 "회사"는 개정 약관의 내용을 적용할 수 없으며, 이 경우 회원은 이용계약을 해지할 수
            있습니다. 다만, 기존 약관을 적용할 수 없는 특별한 사정이 있는 경우에는 "회사"는 이용계약을 해지할 수 있습니다.
          </p>

          <p css={body2_regular}>8. 본 약관에서 명시하지 않은 사항과 본 약관의 해석에 관하여는 관계법령 또는 상관례에 따릅니다.</p>

          <p css={[body2_bold, titleStyle]}>제 2 장 서비스 계약의 체결</p>

          <p css={[body2_bold]}>제 4 조 (서비스 이용계약 체결)</p>

          <p css={body2_regular}>1. "서비스" 이용계약은 아래의 방법으로 체결이 가능합니다.</p>

          <p css={body2_regular}>
            ① "회원"이 되고자 하는 자(이하 "가입신청자")가 이용약관에 동의를 하고 "회사"에서 요구하는 정보를 입력한 경우 "회사"가 이러한 신청에 대하여
            승낙함으로써 체결됩니다.
          </p>

          <p css={body2_regular}>
            2. "회사"는 다음 각 호에 해당하는 신청에 대하여 승낙을 하지 않거나, 사후에 통보 없이 이용계약을 해지할 수 있습니다.
          </p>

          <p css={body2_regular}>
            ① 가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우 (다만, 회원자격 상실 후 1년이 경과한 자로서 "회사"의 회원 재가입
            승낙을 얻은 경우에는 예외로 함)
          </p>

          <p css={body2_regular}>② 실명이 아니거나 타인의 명의를 이용한 경우</p>

          <p css={body2_regular}>③ 허위의 정보를 기재하거나, "서비스"에서 제시하는 내용을 기재하지 않은 경우</p>

          <p css={body2_regular}>④ 가입신청자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하며 신청하는 경우</p>

          <p css={body2_regular}>
            3. 제1항에 따른 신청에 있어 "회사"는 "회원"의 종류에 따라 전문기관을 통한 실명확인 및 본인인증을 요청할 수 있습니다.
          </p>

          <p css={body2_regular}>4. "회사"는 "서비스" 관련설비의 여유가 없거나, 기술상 또는 업무상 문제가 있는 경우에는 승낙을 유보할 수 있습니다.</p>

          <p css={body2_regular}>
            5. 제2항과 제4항에 따라 회원가입신청의 승낙을 하지 아니하거나 유보한 경우, "회사"는 원칙적으로 이를 가입신청자에게 알리도록 합니다.
          </p>

          <p css={body2_regular}>6. 이용계약의 성립 시기는 "회사"가 가입완료를 신청절차 상에서 표시한 시점으로 합니다.</p>

          <p css={body2_regular}>
            7. "회사"는 "회원"에 대해 회사정책에 따라 등급별로 구분하여 이용시간, 이용횟수, 서비스 메뉴 등을 세분하여 이용에 차등을 둘 수 있습니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 5 조 (회원정보의 변경 및 탈퇴)</p>

          <p css={body2_regular}>
            1. "회원"은 내 정보 관리 화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다. 다만, "서비스" 관리를 위해 필요한
            "아이디"는 고객센터를 통해 본인 확인 후 변경할 수 있습니다.
          </p>

          <p css={body2_regular}>
            2. "회원"은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 "회사"에 대하여 그 변경사항을
            알려야 합니다.
          </p>

          <p css={body2_regular}>3. 제2항의 변경사항을 "회사"에 알리지 않아 발생한 불이익에 대하여 "회사"는 책임지지 않습니다.</p>

          <p css={body2_regular}>
            4. "회원"은 언제든지 서비스초기화면의 고객센터 또는 내 정보 관리 메뉴 등을 통하여 이용계약 해지 신청(회원탈퇴)을 할 수 있습니다. "회원"이
            회원탈퇴를 신청한 경우 "회사"는 회원 본인 여부를 확인할 수 있으며, 관계법규 등이 정하는 바에 따라 이를 즉시 처리합니다. 단, "회사"는
            서비스 운영 원칙에 따라 30일 동안 재가입을 제한할 수 있습니다.
          </p>

          <p css={body2_regular}>
            5. "회원"이 계약을 해지할 경우, 관련법 및 개인정보처리방침에 따라 "회사"가 회원정보를 보유하는 경우를 제외하고는 해지 즉시 "회원"의 모든
            데이터는 소멸됩니다.
          </p>

          <p css={body2_regular}>6. "회원"이 연속하여 일 년 동안 서비스에 log-in한 기록이 없는 경우 회원 자격을 상실할 수 있습니다.</p>

          <p css={[body2_bold, titleStyle]}>제 6 조 (개인정보보호 의무)</p>

          <p css={body2_regular}>
            "회사"는 "개인정보보호법" 등 관계 법령이 정하는 바에 따라 "회원"의 개인정보를 보호하기 위해 노력합니다. 개인정보의 보호 및 사용에 대해서는
            관련법 및 "회사"의 개인정보처리방침이 적용됩니다. 다만, "회사"의 공식 사이트 이외의 링크된 사이트에서는 "회사"의 개인정보처리방침이
            적용되지 않습니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 7 조 ("회원"의 "아이디" 및 "비밀번호"의 관리에 대한 의무)</p>

          <p css={body2_regular}>1. "회원"의 "아이디"와 "비밀번호"에 관한 관리책임은 "회원"에게 있으며, 이를 제3자가 이용하도록 하여서는 안됩니다.</p>

          <p css={body2_regular}>
            2. "회사"는 "회원"의 "아이디"가 개인정보 유출 우려가 있거나, 반사회적 또는 미풍양속에 어긋나거나, "회사" 및 "회사"의 운영자로 오인한
            우려가 있는 경우, 해당 "아이디"의 이용을 제한할 수 있습니다.
          </p>

          <p css={body2_regular}>
            3. "회원"은 "아이디" 및 "비밀번호"가 도용되거나 제3자가 사용하고 있음을 인지한 경우에는 이를 즉시 "회사"에 통지하고 "회사"의 안내에 따라야
            합니다.
          </p>

          <p css={body2_regular}>
            4. 제3항의 경우에 해당 "회원"이 "회사"에 그 사실을 통지하지 않거나, 통지한 경우에도 "회사"의 안내에 따르지 않아 발생한 불이익에 대하여
            "회사"는 책임지지 않습니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 8 조 ("회사"의 의무)</p>

          <p css={body2_regular}>
            1. "회사"는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 "서비스"를
            제공하는 데 최선을 다하여야 합니다.
          </p>

          <p css={body2_regular}>
            2. "회사"는 이용자가 안전하게 "서비스"를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어 이용자의
            개인정보보호에 최선을 다하여야 합니다.
          </p>

          <p css={body2_regular}>
            3. "회사"는 판매하는 "서비스"에 대하여 "표시.광고의 공정화에 관한 법률" 제3조의 규정에 위반하는 표시 및 광고행위를 함으로써 이용자가
            손해를 입은 때에는 이를 배상할 책임을 부담합니다.
          </p>

          <p css={body2_regular}>
            4. "회사"는 수신거절의 의사를 명확히 표시한 회원에 대해서는 영리목적의 광고성 문자메시지 및 전자우편을 발송하지 않습니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 9 조 ("회원"의 의무)</p>

          <p css={body2_regular}>
            1. "회원"은 다음 행위를 하여서는 안 됩니다."회원"은 관계법, 이 약관의 규정, 이용안내 및 "서비스"와 관련하여 공지한 주의사항, "회사"가
            통지하는 사항 등을 준수하여야 하며, 기타 "회사"의 업무에 방해되는 행위를 하여서는 안 됩니다. 만약 이를 위반할 경우 회원자격이 박탈될 수
            있습니다. 개인정보의 등록(변경의 경우 포함함)시 허위내용을 등록하는 행위
          </p>

          <p css={body2_regular}>① "회사"에 게시된 정보를 임의로 변경하는 행위</p>

          <p css={body2_regular}>② "회사"가 허락하지 않은 정보(컴퓨터 프로그램 등)를 송신 또는 게시하는 행위</p>

          <p css={body2_regular}>③ "회사" 기타 제3자의 저작권 등 지식재산권에 대한 침해행위</p>

          <p css={body2_regular}>④ "회사" 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</p>

          <p css={body2_regular}>⑤ 외설 또는 폭력적인 메시지, 화상, 음성 기타 공서양속에 반하는 정보를 화면에 공개 또는 게시하는 행위</p>

          <p css={body2_regular}>⑥불특정 다수의 자를 대상으로 "회사"의 "서비스"를 이용하여 영리목적으로 활동하는 행위</p>

          <p css={body2_regular}>⑦사실관계를 왜곡하는 정보제공 행위, 기타 "회사"가 부적절하다고 판단하는 행위</p>

          <p css={body2_regular}>⑧타인의 정보를 도용하는 행위</p>

          <p css={[body2_bold, titleStyle]}>제 3 장 서비스의 내용과 이용</p>

          <p css={[body2_bold]}>제 10 조 ("서비스"의 내용)</p>

          <p css={body2_regular}>1. "회사"는 "회원"에게 아래와 같은 서비스를 제공합니다.</p>

          <p css={body2_regular}>① 테스트 종류 추천 및 설계</p>

          <p css={body2_regular}>② 테스트에 대한 용역 계약 체결</p>

          <p css={body2_regular}>③ 문항 작성 도구 제공</p>

          <p css={body2_regular}>④ 설문조사 결과 분석 자료의 제공</p>

          <p css={body2_regular}>⑤ 설문조사 결과에 대한 "고객"의 추가적인 요청에 따른 분석 자료의 제공</p>

          <p css={body2_regular}>⑥ 기타 "회사"가 추가 개발하거나 다른 회사와의 제휴 계약 등을 통해 "회원"에게 제공하는 일체의 서비스</p>

          <p css={body2_regular}>⑦ 이외 제공하는 모든 부가 서비스</p>

          <p css={[body2_bold, titleStyle]}>제 11 조 ("서비스"의 이용)</p>

          <p css={body2_regular}>
            1. "회사"는 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수
            있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다. 단,
            "회사"가 합리적으로 예측할 수 없는 불가피한 여건이나 사정이 있는 경우, 위 공지기간을 단축할 수 있습니다.
          </p>

          <p css={body2_regular}>
            2. "회사"가 제공하기로 회원과 계약을 체결한 "서비스"의 내용을 재화 등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를
            회원에게 통지 가능한 주소로 즉시 통지합니다.
          </p>

          <p css={body2_regular}>
            3. 전항의 경우 "회사"는 이로 인하여 회원이 입은 손해를 배상합니다. 다만, "회사"가 고의 또는 과실이 없음을 입증하는 경우에는 아무런 책임을
            부담하지 않습니다. "회사"는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 또는 운영상 상당한 이유가 있는 경우 "서비스"의
            제공을 일시적으로 중단할 수 있습니다. 다만, "회사"가 사전에 통지할 수 없는 부득이한 사유가 있는 경우 사후에 통지할 수 있습니다.
          </p>

          <p css={body2_regular}>
            4. "회사"는 서비스의 제공에 필요한 경우 정기점검을 실시할 수 있으며, 정기점검시간은 서비스제공화면에 공지한 바에 따릅니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 12 조 ("서비스"의 변경)</p>

          <p css={body2_regular}>
            1. "회사"는 상당한 이유가 있는 경우에 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 "서비스"를 변경할 수 있습니다.
          </p>

          <p css={body2_regular}>
            2. "서비스"의 내용, 이용방법, 이용시간에 대하여 변경이 있는 경우에는 변경사유, 변경될 서비스의 내용 및 제공일자 등은 그 변경 전에 미리
            내용을 초기화면에 게시하여야 합니다.
          </p>

          <p css={body2_regular}>
            3. "회사"는 무료로 제공되는 "서비스"의 일부 또는 전부를 "회사"의 정책 및 운영의 필요상 수정, 중단, 변경할 수 있으며, 이에 대하여 관련법에
            특별한 규정이 없는 한 "회원"에게 별도의 보상을 하지 않습니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 13 조 (정보의 제공 및 광고의 게재)</p>

          <p css={body2_regular}>
            1. "회사"는 "회원"이 "서비스" 이용 중 필요하다고 인정되는 다양한 정보를 공지사항, 전자우편 등의 방법으로 "회원"에게 제공할 수 있습니다.
            다만, "회원"은 관련법에 따른 거래관련 정보 및 고객문의 등에 대한 답변 등을 제외하고는 언제든지 전자우편 등에 대해서 수신 거절을 할 수
            있습니다.
          </p>

          <p css={body2_regular}>
            2. 제1항의 정보를 전화 및 팩스전송기기에 의하여 전송하려고 하는 경우에는 "회원"의 사전 동의를 받아서 전송합니다. 다만, "회원"의 거래관련
            정보 및 고객문의 등에 대한 회신에 있어서는 제외됩니다.
          </p>

          <p css={body2_regular}>
            3. "회사"는 "서비스"의 운영과 관련하여 "서비스" 화면, 홈페이지, 전자우편 등에 광고를 게재할 수 있습니다. 광고가 게재된 전자우편 등을
            수신한 "회원"은 수신거절을 "회사"에게 할 수 있습니다.
          </p>

          <p css={body2_regular}>4. "패널"의 정보는 "회원"에게 아래와 같은 기준에 의해 제공됩니다.</p>

          <p css={body2_regular}>
            ① "회원"이 의뢰한 설문조사의 결과에 대한 통계 조사 자료로만 활용되며, 이 과정에서 개인을 식별할 수 있는 실명 등의 정보는 "패널"의 별도
            동의를 받거나 가명처리 또는 비식별처리되어 제공됩니다.
          </p>

          <p css={body2_regular}>② "회원"이 특정 "패널"과 인터뷰 또는 개별 연락을 원할 경우, "회사"와 "패널"의 동의 하에 모든 과정이 진행됩니다.</p>

          <p css={[body2_bold, titleStyle]}>제 14 조 ("회원"의 "유료서비스" 결제 및 환불 관련 정책)</p>

          <p css={body2_regular}>1. "회원"은 "유료서비스"에 대해서 결제의 의무와 환불의 권리를 가지고 있습니다.</p>

          <p css={body2_regular}>2. "유료서비스"의 환불</p>

          <p css={body2_regular}>
            ① "유료서비스"의 환불은 현금으로 지급함을 원칙으로 합니다. 단, 결제 승인취소가 가능할 경우 결제승인취소로 환불을 대신하고 동일
            결제수단으로 결제 금액을 재환원합니다.
          </p>

          <p css={body2_regular}>
            ② "회원"에게 "유료서비스"가 제공되기 전에 환불 요청을 한 경우 "회사"는 "고객"의 결제 금액을 환불합니다. 단, "유료서비스"가 일부 또는 전부
            제공된 이후에는 "회사"의 귀책사유가 없는 한 "회사"는 환불 해야 할 책임이 없습니다.
          </p>

          <p css={body2_regular}>
            ③ "회원"이 의뢰한 "유료서비스"가 "회사"의 귀책사유로 인해 "사용취소"가 된 경우 "회사"는 "회원"의 결제 금액을 환불합니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 15 조 ("서비스"에 관한 권리의 귀속 및 "게시물"의 이용)</p>

          <p css={body2_regular}>
            1. "데이터 수집 및 조사 서비스"에 따라 "회원"에게 제공된 "결과물"에 대한 저작권을 포함한 지식재산권은 "회원"에게 귀속되며, "회사"는 이
            정보를 보호할 의무가 있습니다.
          </p>

          <p css={body2_regular}>
            2. "데이터 수집 및 조사 서비스" 제공 과정에서 생성 또는 작성된 "응답데이터"에 대한 일체의 권리는 "회사"에 귀속됩니다. "회사"는 "데이터
            수집 및 조사 서비스" 용역계약에서 정한 바 및 필요한 경우 응답자로부터 개인정보보호법에 따른 개인정보 제공 동의 내용에 따라 "응답데이터"를
            "회원"에 제공할 수 있으며, "회원"은 "회사"로부터 제공받은 "응답데이터"를 제공받은 목적 한도 내에서 개인정보보호법 등 관련 법령을 준수하여
            이용할 수 있습니다. 단, 위 조항에도 불구하고 "응답데이터"의 귀속에 관하여 "회사"와 "회원"은 별도 약정을 통하여 달리 정할 수 있습니다.
          </p>

          <p css={body2_regular}>
            3. "회원"이 "서비스" 내에 등록하는 "게시물"은 "회사"가 개발ㆍ제공하는 별도의 부가 서비스 등에 "게시물"의 저작자(또는 저작권자)를 식별할 수
            있는 정보를 제외한 채 노출될 수 있으며, 이 과정에서 해당 "게시물"은 일부 수정, 복제 및 편집될 수 있습니다. 이 경우, 회사는 저작권법 규정을
            준수하며, "회원"은 언제든지 고객센터를 통해 해당 "게시물"에 대해 삭제, 부가서비스에 대한 사용 제외, 비공개 등의 조치를 취할 수 있습니다.
          </p>

          <p css={body2_regular}>
            4. "회사"는 제3항 이외의 방법으로 "회원"의 "게시물"을 이용하고자 하는 경우에는 전화, 팩스, 전자우편 등을 통해 사전에 "회원"의 동의를
            얻어야 합니다.
          </p>

          <p css={body2_regular}>
            5. "회원"의 "게시물"이 "정보통신망법" 및 "저작권법" 등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당
            "게시물"의 게시중단 및 삭제 등을 요청할 수 있으며, "회사"는 관련법에 따라 조치를 취하여야 합니다.
          </p>

          <p css={body2_regular}>
            6. "회사"는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는
            관련법에 따라 해당 "게시물"에 대해 임시조치 등을 취할 수 있습니다.
          </p>

          <p css={body2_regular}>
            7. "서비스"에 대한 저작권 및 지식재산권은 "회사"에 귀속됩니다. 단, "회원"의 "게시물" 및 제휴계약에 따라 제공된 결과물 등은 제외합니다.
          </p>

          <p css={body2_regular}>
            8. "회사"는 서비스와 관련하여 "회원"에게 "회사"가 정한 이용조건에 따라 "아이디", 콘텐츠, "캐시", "포인트" 등을 이용할 수 있는 이용권만을
            부여하며, "회원"은 이를 양도, 판매, 담보제공 등의 처분행위를 할 수 없습니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 16 조 ("회원"의 책임)</p>

          <p css={body2_regular}>
            "회원"은 "회사"가 제공하는 서비스를 이용하는 동안, "회원" 스스로의 행위, 응답데이터 및 타인과의 커뮤니케이션에 책임이 있습니다. "회사"는
            "회원"이 사용하는 설문조사의 양식 등 서비스의 내용이 아래에 해당하는 경우에는 해당 서비스의 제공을 중단하고 관련 콘텐츠를 삭제하는 등
            필요한 조치를 취할 수 있습니다.
          </p>

          <p css={body2_regular}>
            1. 불법적인 행위를 할 목적, 서비스의 이용 행위나 서비스의 실패가 물리적 손상, 사망, 정신적 피해 또는 개인 부상을 초래할 수 있는 행위를 할
            목적으로 서비스를 이용하는 행위
          </p>

          <p css={body2_regular}>2. 만 14세 미만인 사람에 대하여 서비스를 제공하는 행위</p>

          <p css={body2_regular}>3. "회사"와 경쟁관계에 있는 제품 또는 서비스를 구축하거나 기타 다른 경쟁적인 용도로 서비스 이용하는 행위</p>

          <p css={body2_regular}>
            4. 서비스의 정상적인 운영을 방해하거나 "회사"가 제공하는 방법이 아닌 다른 방법을 사용하여 서비스에 액세스하는 행위
          </p>

          <p css={body2_regular}>5. "회사"가 "회원"에 대하여 부과한 제한사항을 우회하기 위한 목적으로 서비스를 이용하는 행위</p>

          <p css={body2_regular}>6. "회사"의 시스템이나 네트워크의 취약점 또는 보안사항을 탐색 또는 스캔하는 등의 행위</p>

          <p css={body2_regular}>
            7. 웹 크롤링 프로그램 기타 자동화 프로그램을 사용하여 "회사" 웹페이지 등으로부터 데이터를 추출하거나 수집하는 행위
          </p>

          <p css={body2_regular}>8. 타인이 서비스에 엑세스하는 것을 거절하거나, 역엔지니어링을 시도하는 등의 행위</p>

          <p css={body2_regular}>9. 서비스를 이용하여 바이러스, 맬웨어 기타 악성 소프트웨어를 유포하거나 전송하는 행위</p>

          <p css={body2_regular}>10. 타인의 지식재산권을 침해하기 위하여 서비스를 이용하는 행위</p>

          <p css={[body2_bold, titleStyle]}>제 17 조 ("플랫폼 이용 서비스" 관련 책임)</p>

          <p css={body2_regular}>
            1. "회사"는 "회원"에게 "플랫폼 이용 서비스"를 제공하는 경우 "회원"으로부터 제공받는 데이터를 안전하게 처리하기 위하여 관련 법령에 따라
            최선의 보호조치를 이행합니다.
          </p>

          <p css={body2_regular}>
            2. "회사"는 "플랫폼 이용 서비스" 제공을 위하여 "회원"으로부터 제공받는 데이터에 대하여 "회원"으로부터 위탁받은 "플랫폼 이용 서비스" 제공에
            관련된 범위 내에서 수탁자로서의 책임을 부담하며, "회원"의 귀책사유로 인한 데이터 유출 등에 대하여는 일체의 책임을 부담하지 않습니다.
          </p>

          <p css={[body2_bold, titleStyle]}>제 4 장 기타</p>

          <p css={[body2_bold]}>제 18 조 (책임제한)</p>

          <p css={body2_regular}>
            1. "회사"는 천재지변 또는 이에 준하는 불가항력으로 인하여 "서비스"를 제공할 수 없는 경우에는 "서비스" 제공에 관한 책임이 면제됩니다.
          </p>

          <p css={body2_regular}>2. "회사"는 "회원"의 귀책사유로 인한 "서비스" 이용의 장애에 대하여는 책임을 지지 않습니다.</p>

          <p css={body2_regular}>3. "회사"는 무료로 제공되는 "서비스" 이용과 관련하여 관련법에 특별한 규정이 없는 한 책임을 지지 않습니다.</p>

          <p css={[body2_bold, titleStyle]}>제 19 조 (준거법 및 재판관할)</p>

          <p css={body2_regular}>1. "회사"와 "회원" 간 제기된 소송은 대한민국법을 준거법으로 합니다.</p>

          <p css={body2_regular}>2. "회사"와 "회원"간 발생한 분쟁에 관한 소송은 민사소송법 상의 관할법원에 제소합니다.</p>

          <p css={[body2_bold, titleStyle]}>제 20 조 (사업자 정보)</p>

          <p css={body2_regular}>1. 회사명: 디비디랩 주식회사</p>

          <p css={body2_regular}>2. 대표자: 강지수</p>

          <p css={body2_regular}>3. 개인정보관리 책임자: 김아람</p>

          <p css={body2_regular}>4. 주소: 서울특별시 성동구 성수일로 48 거영빌딩 602호</p>

          <p css={body2_regular}>5. 대표전화: 010-6649-0417</p>

          <p css={[body2_bold, titleStyle]}>[부칙]</p>

          <p css={body2_regular}>이 약관은 2022년 7월 5일부터 시행합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default withTokenAuth(Service20220705, true);

const mainContainer = css`
  width: 100%;
  overflow-y: scroll;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  * {
    box-sizing: border-box;
  }
  p {
    height: auto;
    line-height: 2;
  }
`;

const contentsContainer = css`
  width: 100%;
  max-width: 900px;
  min-width: 900px;
  background: white;
  padding: 80px 0 240px;
`;

const titleStyle = css`
  margin-top: 80px;
`;