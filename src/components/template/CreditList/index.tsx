import React, { useCallback, useEffect, useRef, useState } from 'react';
import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold, heading5_regular } from '../../../styles/FontStyles';
import ProfileIcon from '../../atoms/ProfileIcon';
import Icon from '../../atoms/Icon';
import { profileColor } from '../../../common/util/commonVar';
import { css } from '@emotion/react';
import moment from 'moment';
import ClipLoader from 'react-spinners/ClipLoader';
import { useRouter } from 'next/router';
import useGetElementProperty from '../../../hooks/useGetElementProperty';
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { ReducerType } from '../../../store/reducers';
import { setSelectTeamMember } from '../../../store/reducers/userReducer';

interface PropsType {
  isLoading: boolean;
  data: {
    createDt: string;
    creditProcessContents: string;
    creditProcessType: string;
    creditProcessTypeNm: string;
    processCredit: number;
    remainingCredit: number;
  }[];
}

const CreditList = ({ isLoading, data }: PropsType) => {
  const getList = useCallback(() => {
    if (isLoading) {
      return <ClipLoader />;
    }
    if (data === null || data === undefined) {
      return <div>크레딧 내역이 없습니다.</div>;
    } else {
      return data.reverse().map((el, index) => {
        const { createDt, creditProcessContents, creditProcessType, creditProcessTypeNm, processCredit, remainingCredit } = el;

        return (
          <FlexBox key={index} style={{ borderTop: '1px solid #DCDCDC', position: 'relative' }}>
            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>{createDt}</span>
            </FlexBox>

            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>{creditProcessTypeNm}</span>
            </FlexBox>

            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>
                {creditProcessType === 'ADMIN_PAYMENTS' ? `+ ${processCredit.toLocaleString()}원` : `- ${processCredit.toLocaleString()}원`}
              </span>
            </FlexBox>
            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>{remainingCredit.toLocaleString()}원</span>
            </FlexBox>
            <FlexBox justify={'flex-start'} style={{ padding: '17px 0', flex: 2 }}>
              <span css={heading5_regular}>{creditProcessContents}</span>
            </FlexBox>
          </FlexBox>
        );
      });
    }
  }, [data, isLoading]);

  return (
    <FlexBox justify={'flex-start'} direction={'column'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0px 40px 24px 40px' }}>
      {/*테이블 제목*/}
      <FlexBox justify={'flex-start'} align={'center'} style={{ borderTop: '1px solid #DCDCDC', padding: '4px 8px' }}>
        <FlexBox justify={'flex-start'} style={{ flex: 2, color: colors.grey._99 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>일시</span>
        </FlexBox>
        <FlexBox justify={'flex-start'} style={{ flex: 2 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>분류</span>
        </FlexBox>
        <FlexBox justify={'flex-start'} style={{ flex: 2, color: colors.grey._99 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>액수</span>
        </FlexBox>
        <FlexBox justify={'flex-start'} style={{ flex: 2, color: colors.grey._99 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>잔액</span>
        </FlexBox>
        <FlexBox justify={'flex-start'} style={{ flex: 2, color: colors.grey._99 }}>
          <span css={[heading5_bold, { color: colors.grey._99 }]}>비고</span>
        </FlexBox>
      </FlexBox>

      {/*테이블 리스트*/}
      <div css={listBoxStyle}>{getList()}</div>
    </FlexBox>
  );
};

export default CreditList;

const listBoxStyle = css`
  width: 100%;
  height: 600px;
  //background: red;
  //overflow-y: scroll;
  overflow-y: overlay;
  overflow-x: hidden;
  padding-bottom: 100px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: rgba(0, 0, 0, 0.2);
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
  position: relative;
`;
