import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
// Components
import ListReport from '../../components/molecules/ListReport';
// Styles
import reportCardImage from '../../../src/assets/list_report_bg.png';

export default {
  title: 'MOLECULES/ListReportCard',
  component: ListReport,
} as ComponentMeta<typeof ListReport>;

const Template: ComponentStory<typeof ListReport> = args => <ListReport {...args} />;

export const ReportCardComponent = Template.bind({});
ReportCardComponent.args = {
  testType: 'UI 진단',
  testTitle: '둠칫 둠칫 뚜루뚜두 UI 진단',
  testDate: '2022.02.10',
  img: reportCardImage,
  width: '256px',
};
