import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import Icon from '../../atoms/Icon';
import InputFormBox from '../../molecules/InputFormBox';
import FlexBox from '../../atoms/FlexBox';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';

export interface InputType {
  label: string;
  placeholder: string;
  type: string;
  pattern?: RegExp;
  errorMsg?: string;
  line?: boolean;
}

interface PropsType {
  id: string;
}

const inputArr: InputType[] = [
  {
    label: 'nickname',
    placeholder: '별명을 적어주세요',
    errorMsg: '2글자 이상 작성해주세요',
    pattern: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
    type: 'text',
    line: true,
  },
];

const AddInfoPopup = ({ id }: PropsType) => {
  const router = useRouter();
  const handleMovePage = useCallback(path => {
    router.push(path);
  }, []);

  const handleSignUp = useCallback(data => {
    alert(data);
    handleMovePage('/pwInquiry/confirm');
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0'} width={'392px'} height={'auto'}>
        <div css={iconBoxStyle}>
          <Icon name={'NAVIGATION_CLOSE_LG'} />
        </div>

        <InputFormBox handleSignUp={handleSignUp} inputArr={inputArr} btnText={'확인'} padding={'64px 48px '} />
      </PopupBox>
    </FlexBox>
  );
};

export default AddInfoPopup;

const iconBoxStyle = css`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;
const centerTextStyle = css`
  cursor: pointer;
  padding: 16px 24px 24px 24px;
  text-align: center;
`;
