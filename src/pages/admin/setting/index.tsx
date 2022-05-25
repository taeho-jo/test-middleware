import React from 'react';
import withTokenAuth from '../../../hoc/withTokenAuth';
import FlexBox from '../../../components/atoms/FlexBox';
import PageTitle from '../../../components/atoms/PageTitle';
import { heading1_bold, heading3_bold } from '../../../styles/FontStyles';
import IconTextButton from '../../../components/atoms/Button/IconTextButton';
import BasicButton from '../../../components/atoms/Button/BasicButton';
import Form from '../../../components/atoms/Form';
import SearchInput from '../../../components/atoms/SearchInput';

const Setting = () => {
  return (
    // <FlexBox justify={'flex-start'} align={'flex-start'} direction={'column'}>
    <>
      <PageTitle title={'설정'} />
      <div css={{ border: '1px solid k', padding: '0 40px 24px 40px', maxWidth: '568px' }}>
        <div css={[heading3_bold, { margin: '32px 16px 20px 16px' }]}>가나다라마바사</div>
        <div css={{ border: '1px solid hotpink' }}>
          <div style={{ padding: '8px 16px', background: 'yellow' }}>
            <div>티 이름</div>
            <div>가나다라마바사</div>
            <IconTextButton name={'GOOGLE'} iconPosition={'left'} text={'구글로 시작하기'} />
          </div>
          <div></div>
          <div>3</div>
        </div>
      </div>
    </>

    // </FlexBox>
  );
};

export default withTokenAuth(Setting, false);
