import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import ModalTitle from '../../molecules/ModalTitle';
import { heading4_bold, heading4_regular } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import Button from '../../atoms/Button';
import { colors } from '../../../styles/Common.styles';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';

const ResetPwSuccess = () => {
  const router = useRouter();
  const handleMoveLogin = useCallback(() => {
    router.push('/admin/re-login');
  }, [router]);

  return (
    <div css={mainBox}>
      <div css={contentsBox}>
        <ModalTitle title={'비밀번호가 성공적으로 변경되었습니다!'} closed={false} titlePosition={'center'} />

        <div css={subTitle}>
          <span css={[heading4_regular]}>로그인을 원하시면 아래 버튼을 클릭해주세요.</span>
        </div>

        <FlexBox style={{ margin: '32px 0 40px', padding: '0 12.5px' }} direction={'column'} align={'center'} justify={'space-between'}>
          <BasicButton onClick={handleMoveLogin} theme={'dark'} isLoading={false} type={'submit'} text={'로그인 다시하기'} />
        </FlexBox>
      </div>
    </div>
  );
};

export default ResetPwSuccess;

const mainBox = css`
  width: 100%;
  height: calc(100vh - 48px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const contentsBox = css`
  width: 450px;
  //height: 408px;
  margin-top: 112px;
  //padding-bottom: 40px;
  background: white;
`;
const subTitle = css`
  padding: 32px 40px 16px;
  text-align: center;
`;
