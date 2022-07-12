import React, { useCallback, useState } from 'react';
import PolicyHeader from '../../../components/atoms/PolicyHeader';
import { POLICY_PRIVACY_DATE_OPTION } from '../../../common/util/commonVar';
import { body2_bold, body2_regular } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import withTokenAuth from '../../../hoc/withTokenAuth';

const Privacy20220712 = () => {
  const router = useRouter();
  const [selected, setSelected] = useState({
    date: '20220731',
  });

  const changeDate = useCallback(date => {
    router.push(`/policy/privacy/${date}`);
  }, []);

  return (
    <div css={mainContainer}>
      <div css={contentsContainer}>
        <PolicyHeader DATE_OPTION={POLICY_PRIVACY_DATE_OPTION} selected={selected} title={'개인 정보 처리 방침'} onClick={changeDate} />
        <div>20220731</div>
      </div>
    </div>
  );
};

export default withTokenAuth(Privacy20220712, true);
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
