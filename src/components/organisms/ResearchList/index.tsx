import React, { Fragment } from 'react';
import FlexBox from '../../atoms/FlexBox';
import ListReport from '../../molecules/ListReport';

interface PropsType {
  listData: {
    img: string;
    testTitle: string;
    testType: string;
    testDate: string;
  }[];
}

const ResearchList = ({ listData = [] }: PropsType) => {
  return (
    <FlexBox justify={'flex-start'} align={'flex-start'} wrap={'wrap'}>
      {listData?.map((el, index) => {
        return (
          <Fragment key={index}>
            <ListReport testType={el.testType} testTitle={el.testTitle} testDate={el.testDate} img={el.img} />
          </Fragment>
        );
      })}
    </FlexBox>
  );
};

export default ResearchList;
