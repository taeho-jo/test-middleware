import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import PolicyHeader from '../../../components/atoms/PolicyHeader';
import { RULES_SERVICE_DATE_OPTION } from '../../../common/util/commonVar';
import { useRouter } from 'next/router';
import withTokenAuth from '../../../hoc/withTokenAuth';

const Service20220712 = () => {
  const router = useRouter();
  const [selected, setSelected] = useState({
    date: '20220715',
  });

  const changeDate = useCallback(date => {
    router.push(`/rules/service/${date}`);
  }, []);

  return (
    <div css={mainContainer}>
      <div css={contentsContainer}>
        <PolicyHeader DATE_OPTION={RULES_SERVICE_DATE_OPTION} selected={selected} onClick={changeDate} title={'이용 약관'} />
        <div>20220715</div>
      </div>
    </div>
  );
};

export default withTokenAuth(Service20220712, true);

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
