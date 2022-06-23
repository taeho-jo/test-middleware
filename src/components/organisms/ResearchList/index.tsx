import React, { Fragment, useCallback } from 'react';
import FlexBox from '../../atoms/FlexBox';
import ListReport from '../../molecules/ListReport';
import { heading1_bold } from '../../../styles/FontStyles';

interface PropsType {
  listData: {
    createDt: string;
    moduleType: string;
    projectNm: string;
    reportSeq: number;
  }[];
  handleMoveDetail?: (id) => void;
}

const ResearchList = ({ listData = [], handleMoveDetail }: PropsType) => {
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
              reportSeq={el.reportSeq}
              moduleType={el.moduleType}
              projectNm={el.projectNm}
              createDt={el.createDt}
            />
          </Fragment>
        );
      });
    }
  }, [listData]);

  return (
    <FlexBox justify={'flex-start'} align={'flex-start'} wrap={'wrap'}>
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
