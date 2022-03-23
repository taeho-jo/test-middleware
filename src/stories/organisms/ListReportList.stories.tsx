import React from 'react';
import { ComponentMeta } from '@storybook/react';
// Components
import ListReport from '../../components/molecules/ListReport';
// Styles
import GridBox from '../../components/atoms/GridBox';
// Images
const ReportCardImage = require('../../../src/assets/list_report_bg.png');

const list = [
  { testType: 'UI 진단 테스트', testTitle: '둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트2', testTitle: '둠칫 둠칫 뚜루뚜두 UI 스트 51스트', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트3', testTitle: '두 UI 진단 테스트테스트 테에에에스트테스트 테에에에스트', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트', testTitle: '둠칫 둠칫 둠칫 둠테에에에스트', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트5', testTitle: '흠칫 따라따다 UI 진단테스트', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트6', testTitle: '흠칫 따라따다 UI 진단테스트6', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트7', testTitle: '흠칫 따라따다 UI 진단테스트7', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트8', testTitle: '흠칫 따라따다 UI 진단테스트8', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트9', testTitle: '흠칫 따라따다 UI 진단테스트9', testDate: '2022.02.10', img: ReportCardImage },
  { testType: 'UI 진단 테스트10', testTitle: '흠칫 따라따다 UI 진단테스트10', testDate: '2022.02.10', img: ReportCardImage },
];

export default {
  title: 'ORGANISMS/ListReportCard',
  component: ListReport,
} as ComponentMeta<typeof ListReport>;

export const ReportCardList = () => {
  return (
    <div>
      <GridBox gridType={'list'} cardBoxSize={256} lg={6} md={6} sm={6} gutter={20}>
        {list.map((el, index) => {
          return <ListReport key={index} img={el.img} testType={el.testType} testTitle={el.testTitle} testDate={el.testDate} />;
        })}
      </GridBox>
    </div>
  );
};
