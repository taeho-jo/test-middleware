import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import FlexBox from '../../atoms/FlexBox';
import Form from '../../atoms/Form';
import { useForm } from 'react-hook-form';
import { InputType } from '../../../common/types/commonTypes';
import Select from '../../atoms/Select';
import { heading5_regular } from '../../../styles/FontStyles';
import AnnouncementBox from '../AnnouncementBox';

const selectBoxArr = [
  { value: '디자인', label: '디자인' },
  { value: '기획', label: '기획' },
  { value: '유저리서치', label: '유저리서치' },
  { value: 'PO/PM', label: 'PO/PM' },
  { value: '마케팅', label: '마케팅' },
];

const ReportHeader = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => console.log('success', data);
  const onError = errors => console.log('fail', errors);

  const [selected, setSelected] = useState({
    funnelsCd: '',
    cpPosition: '',
    cpSize: '',
  });

  const onClickValue = useCallback(
    (value, label) => {
      setSelected({
        ...selected,
        [label]: value,
      });
    },
    [selected],
  );

  return (
    <div css={headerStyle}>
      <span css={[heading5_regular, { marginRight: '12px' }]}>필터</span>
      <div css={{ width: '264px', marginRight: '12px' }}>
        <Select
          // title={'[닉네임]님이 맡고 계신 직무'}
          options={selectBoxArr}
          placeholder={'전체 응답자'}
          padding={'4px 16px'}
          fontSize={heading5_regular}
          selectBoxHeight={'auto'}
          selectBoxMargin={'0'}
          // value={selected.funnelsCd}
          selected={selected}
          setSelected={setSelected}
          name="cpPosition"
          onClick={onClickValue}
        />
      </div>
      <div css={{ width: '264px', marginRight: '16px' }}>
        <Select
          // title={'[닉네임]님이 맡고 계신 직무'}
          options={selectBoxArr}
          placeholder={'조건을 선택해주세요'}
          padding={'4px 16px'}
          fontSize={heading5_regular}
          selectBoxHeight={'auto'}
          selectBoxMargin={'0'}
          // value={selected.funnelsCd}
          selected={selected}
          setSelected={setSelected}
          name="cpPosition"
          onClick={onClickValue}
        />
      </div>
      <AnnouncementBox content={'필터를 이용하여, 응답자 조건별로 데이터를 확인해보세요!'} />
    </div>
  );
};

export default ReportHeader;

const headerStyle = css`
  height: 72px;
  width: calc(100vw - 296px);
  border-bottom: 1px solid #dcdcdc;
  padding: 17px 24px;
  display: flex;
  align-items: center;
`;
