import React, { useCallback } from 'react';
import LogoText from '/public/assets/png/diby_black.png';
import FlexBox from '../FlexBox';
import { heading1_bold } from '../../../styles/FontStyles';
import Select from '../Select';
import { useRouter } from 'next/router';
import { isShow, updateReturnPage } from '../../../store/reducers/modalReducer';
import { useDispatch } from 'react-redux';

interface PropsType {
  DATE_OPTION: {
    value: string;
    displayName: string;
  }[];
  selected: {
    date: string;
  };
  title: string;
  onClick?: (date) => void;
}

const PolicyHeader = ({ DATE_OPTION, selected, title, onClick }: PropsType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleChange = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'signup' }));
    router.push('/');
  }, []);
  return (
    <div css={{ marginBottom: '80px' }}>
      <img onClick={handleChange} style={{ width: '140px', marginBottom: '27px', cursor: 'pointer' }} src={LogoText.src} alt="DibyLogo" />
      <FlexBox style={{ boxSizing: 'border-box', width: '100%' }} justify={'space-between'}>
        <span css={heading1_bold}>{title}</span>
        <div css={{ width: '320px' }}>
          <Select onClick={onClick} options={DATE_OPTION} name={'date'} selected={selected} />
        </div>
      </FlexBox>
    </div>
  );
};

export default PolicyHeader;
