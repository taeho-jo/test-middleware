import React, { useCallback } from 'react';
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
import { useQuery, useQueryClient } from 'react-query';
import { fetchReportShareIdApi } from '../../../api/reportApi';
import { updateReportViewId } from '../../../store/reducers/reportReducer';

const ReportSideBar = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  const reportData = useSelector<ReducerType, any>(state => state.report.data);

  const { data, refetch } = useQuery(['fetchReportShareId', id], () => fetchReportShareIdApi(id), {
    enabled: false,
    onSuccess: data => {
      const reportViewId = data?.data?.reportViewId;
      dispatch(updateReportViewId(reportViewId));
      dispatch(isShow({ isShow: true, type: 'shareReportModal' }));
    },
  });

  const missionList = reportData?.S1?.uiSummerySection?.missionSuccess?.reduce(
    (acc, cur, index) =>
      acc.concat({
        title: `Task${index + 1}`,
        name: cur.name,
      }),
    [],
  );

  const reportShare = useCallback(() => {
    refetch();
  }, []);

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
          <Icon name={'ACTION_SHARE'} onClick={reportShare} />
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
  background: white;
  // 주석
  position: fixed;
  z-index: 501;
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
