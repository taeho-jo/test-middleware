import React from 'react';
import { css } from '@emotion/react';
import LogoIcon from '../../../assets/logoIcon.png';
import LogoText from '../../../assets/DibyLogo_black.png';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { heading4_bold } from '../../../styles/FontStyles';
import { RespondentAttributes, TestInfoBox, TestResults } from '../../atoms/ReportSideInfoBox';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';

const ReportSideBar = () => {
  const reportData = useSelector<ReducerType, any>(state => state.report.data);

  const missionList = reportData?.S1?.uiSummerySection?.missionSuccess?.reduce(
    (acc, cur, index) =>
      acc.concat({
        title: `Task${index + 1}`,
        name: cur.name,
      }),
    [],
  );
  console.log(missionList, 'MISW');
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div css={sidebarStyle}>
      <FlexBox
        onClick={() => router.push('/admin/team')}
        style={{ height: '72px', borderBottom: '1px solid #dcdcdc', cursor: 'pointer' }}
        align={'center'}
        justify={'flex-start'}
      >
        <img style={{ width: '53px', marginLeft: '24px' }} src={LogoText.src} alt="DibyLogo" />
      </FlexBox>
      <FlexBox style={shareBoxStyle} justify={'space-between'} align={'center'}>
        <FlexBox justify={'flex-start'}>
          <Icon name={'MEMBER'} style={{ marginRight: '12px' }} size={24} />
          <span css={heading4_bold}>1</span>
        </FlexBox>
        <div css={{ cursor: 'pointer' }}>
          <Icon name={'ACTION_SHARE'} onClick={() => dispatch(isShow({ isShow: true, type: 'shareReportModal' }))} />
        </div>
      </FlexBox>
      <div css={{ height: 'calc(100vh - 136px)', overflow: 'scroll' }}>
        <TestInfoBox reportData={reportData} />
        <RespondentAttributes />
        <TestResults missionList={missionList} dataList={reportData?.indexList} />
      </div>
    </div>
  );
};

export default ReportSideBar;

const sidebarStyle = css`
  width: 296px;
  min-width: 296px;
  height: 100vh;
  border-right: 1px solid #dcdcdc;
`;

const logoBoxStyle = css`
  height: 72px;
  //background: lightcoral;
`;
const shareBoxStyle = css`
  height: 64px;
  border-bottom: 1px solid #dcdcdc;
  padding: 0 24px;
`;
const marginStyle = css`
  margin-right: 12px;
  background-color: transparent;
`;
