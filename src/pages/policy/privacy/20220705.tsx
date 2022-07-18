import React, { useCallback, useState } from 'react';
import PolicyHeader from '../../../components/atoms/PolicyHeader';
import { POLICY_PRIVACY_DATE_OPTION } from '../../../common/util/commonVar';
import { body2_bold, body2_regular } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import withTokenAuth from '../../../hoc/withTokenAuth';

const Privacy20220705 = () => {
  const router = useRouter();
  const [selected, setSelected] = useState({
    date: '20220705',
  });

  const changeDate = useCallback(date => {
    router.push(`/policy/privacy/${date}`);
  }, []);

  return (
    <div css={mainContainer}>
      <div css={contentsContainer}>
        <PolicyHeader DATE_OPTION={POLICY_PRIVACY_DATE_OPTION} selected={selected} title={'개인 정보 처리 방침'} onClick={changeDate} />
        <div>
          <p css={body2_bold}>디비디랩 주식회사(이하 ‘회사’)는 Diby 웹페이지에서 아래와 같이 귀하의 개인정보를 수집 및 이용합니다.</p>

          <p css={[body2_bold, titleStyle]}>1. 개인정보의 수집 및 이용 목적</p>

          <p css={body2_regular}>① 회원가입 및 회원관리, 개인식별, 상담 및 서비스 제공 및 유료서비스 이용 및 포인트 환급</p>

          <p css={body2_regular}>
            a. 회원제 서비스 이용에 따른 본인 확인, 불량 회원의 부정 이용 방지와 비인가 사용 방지, 가입 의사 확인, 가입 시 입력한 정보에 따른 맞춤
            서비스 제공
          </p>

          <p css={body2_regular}>② 맞춤형 서비스 제공</p>

          <p css={body2_regular}>a. 이용자의 선호도 분석 및 이에 따른 맞춤형 서비스의 제공</p>

          <p css={body2_regular}>③테스트의 컨텐츠 및 상품 개발</p>

          <p css={body2_regular}>
            a. 신규 테스트의 컨텐츠, 범위 및 상품 개발 및 맞춤 서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재, 서비스의 유효성 확인,
            접속빈도 파악, 회원의 서비스이용에 대한 통계
          </p>

          <p css={[body2_bold, titleStyle]}>2. 수집하는 개인정보의 항목</p>

          <p css={body2_regular}>① 이메일주소, 비밀번호, 닉네임등 계정 관련 정보</p>

          <p css={body2_regular}>② (이용자 입력 시) 회사명, 산업군, 회사규모, 근무부서 등 직업 관련 정보,</p>

          <p css={body2_regular}>③ 서비스 이용 기록, 접속 로그, 결제 기록, 기기 고유번호(디바이스 아이디, IMEI 등)</p>

          <p css={body2_regular}>④ 신용카드 결제시: 카드사명, 카드번호 등</p>

          <p css={body2_regular}>⑤ 계좌이체 결제시: 은행명, 계좌번호 등</p>

          <p css={[body2_bold, titleStyle]}>3. 개인정보의 처리 및 보유 기간</p>

          <p css={body2_regular}>
            관계 법령의 규정에 따라 귀하의 개인정보를 보존하여야 하는 경우가 아닌 한, 귀하의 개인정보는 동의 철회시 또는 상기 목적 달성 시까지 보유 및
            이용됩니다.
          </p>

          <p css={body2_regular}>귀하는 위와 같은 내용에 동의하지 아니할 권리가 있습니다만, 이를 거부하는 경우 서비스 이용이 제한될 수 있습니다.</p>

          <p css={[body2_bold, titleStyle]}>[부칙]</p>

          <p css={body2_regular}>이 약관은 2022년 7월 6일부터 시행됩니다.</p>
        </div>
      </div>
    </div>
  );
};

export default withTokenAuth(Privacy20220705, true);
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
