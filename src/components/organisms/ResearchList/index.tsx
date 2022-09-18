import React, { Fragment, useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import ListReport from '../../molecules/ListReport';
import { heading1_bold, heading3_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import Icon from '../../atoms/Icon';
import { useRouter } from 'next/router';

interface PropsType {
  listData: any;
  handleMoveDetail?: (id, name) => void;
}

const ResearchList = ({ listData = [], handleMoveDetail }: PropsType) => {
  const router = useRouter();
  const getReportList = useCallback(() => {
    if (listData === null || listData.length === 0) {
      return (
        <FlexBox style={{ padding: '40px' }}>
          <span css={heading1_bold}>조회된 리서치 리포트 목록이 없습니다.</span>
        </FlexBox>
      );
    } else {
      return listData?.map((el, index) => {
        return (
          <Fragment key={index}>
            <ListReport
              onClick={handleMoveDetail}
              reportViewId={el.reportViewId}
              statusType={el.statusType}
              statusTypeNm={el.statusTypeNm}
              reportSeq={el.researchSeq}
              researchTypeNm={el.researchTypeNm}
              projectNm={el.researchNm}
              createDt={el.createDt}
            />
          </Fragment>
        );
      });
    }
  }, [listData]);

  return (
    <FlexBox justify={'flex-start'} align={'flex-start'} wrap={'wrap'}>
      <div css={mainContainer}>
        <FlexBox direction={'column'} onClick={() => router.push('/admin/research/create')}>
          <Icon name={'ACTION_CREATE'} />
          <span css={[heading3_bold, { marginTop: '8px' }]}>리서치 생성</span>
        </FlexBox>
      </div>
      {getReportList()}
      {/*{listData?.map((el, index) => {*/}
      {/*  return (*/}
      {/*    <Fragment key={index}>*/}
      {/*      <ListReport onClick={handleMoveDetail} testType={el.testType} testTitle={el.testTitle} testDate={el.testDate} img={el.img} />*/}
      {/*    </Fragment>*/}
      {/*  );*/}
      {/*})}*/}
    </FlexBox>
  );
};

export default ResearchList;

const mainContainer = css`
  width: 256px;
  height: 236px;
  border-radius: 8px;
  border: 1px solid ${colors.grey._ec};
  margin-right: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
