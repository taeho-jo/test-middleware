import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import LogoIcon from '../../../assets/logoIcon.png';
import LogoText from '../../../assets/DibyLogo_black.png';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { heading3_bold, heading4_bold } from '../../../styles/FontStyles';
import { RespondentAttributes, TestInfoBox, TestResults } from '../../atoms/ReportSideInfoBox';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';
import { useQuery, useQueryClient } from 'react-query';
import { fetchReportShareIdApi } from '../../../api/reportApi';
import { updateIndexId, updateReportViewId } from '../../../store/reducers/reportReducer';
import TutorialIndicator from '../../atoms/TutorialIndicator/TutorialIndicator';

const ReportSideBar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id, isShare } = router.query;
  const reportData = useSelector<ReducerType, any>(state => state.report.data);
  const projectName = useSelector<ReducerType, string>(state => state.report.projectName);
  const projectNm = useSelector<ReducerType, string>(state => state.report?.data?.projectNm);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const indicatorStatus = useSelector<ReducerType, any>(state => state.common.indicator);
  // console.log(dataaa, 'NM NM');

  const [clicked, setClicked] = useState('');

  const [shareIndicator, setShareIndicator] = useState('N');

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
    dispatch(updateReportViewId(id));
    dispatch(isShow({ isShow: true, type: 'shareReportModal' }));
  }, []);

  const changeClicked = useCallback(text => {
    setClicked(text);
  }, []);

  const indexBoxRef = useRef();
  const showingSectionId = useSelector<ReducerType, any>(state => state.report?.indexId);
  const showingClickSectionId = useSelector<ReducerType, any>(state => state.report?.clickIndexId);

  useEffect(() => {
    const indexBoxOffsetTop = document.getElementById(`${showingSectionId}-index`)?.offsetTop; // 각 버튼 offsetTop
    const div = document.getElementById('testBox');
    const divHeight = document.getElementById('testBox')?.clientHeight; // 박스 높이

    const offestY = indexBoxOffsetTop - divHeight / 2;

    // div.scrollTo(0, offestY ? offestY : 0);
    div.scrollTo({ top: offestY ? offestY : 0, left: 0, behavior: 'smooth' });
  }, [showingSectionId]);

  useEffect(() => {
    const userId = userInfo?.userId;
    const shareIndicatorValue = JSON.parse(localStorage.getItem(userId));
    setShareIndicator(shareIndicatorValue?.save?.share);
  }, [userInfo, localStorage]);

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
        <span css={[heading3_bold, projectNameStyle]}>{projectNm ? projectNm : projectName ? projectName : '@'}</span>

        {isShare ? null : (
          <div css={{ cursor: 'pointer', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {indicatorStatus?.isShare === 'N' && (
              <TutorialIndicator
                share={isShare}
                name={'isShare'}
                left={'-9px'}
                top={'-10px'}
                modalTitle={'리포트 공유'}
                modalSubTitle={`링크를 복사하여 팀에게 리포트를 공유해보세요.\n로그인 없이도 확인할 수 있어요.`}
                modalTop={'-20px'}
                modalLeft={'50px'}
              />
            )}

            <Icon name={'ACTION_SHARE'} onClick={reportShare} style={{ cursor: 'pointer' }} />
          </div>
        )}
        {/*{isShare ? null : <Icon name={'ACTION_SHARE'} onClick={reportShare} style={{ cursor: 'pointer' }} />}*/}
      </FlexBox>

      <div className={'scrollType1'} css={{ height: 'calc(100vh - 136px)' }} id={'testBox'} ref={indexBoxRef}>
        <TestInfoBox reportData={reportData} />
        <RespondentAttributes changeClicked={changeClicked} clicked={clicked} />
        <TestResults clicked={clicked} changeClicked={changeClicked} missionList={missionList} dataList={reportData?.indexList} />
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

const projectNameStyle = css`
  margin-right: 16px;
  //white-space: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  height: auto;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: nowrap;
`;
const shareBoxStyle = css`
  position: relative;
  //height: 64px;
  border-bottom: 1px solid #dcdcdc;
  padding: 19.5px 24px;
`;
const marginStyle = css`
  margin-right: 12px;
  background-color: transparent;
`;
