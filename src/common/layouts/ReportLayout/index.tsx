import React, { useEffect, useState } from 'react';
import ReportHeader from '../../../components/molecules/ReportHeader';
import ReportSideBar from '../../../components/molecules/ReportSideBar';
import FlexBox from '../../../components/atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { updateIndicatorStatus, updateInitIndicator } from '../../../store/reducers/commonReducer';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

const ReportLayout = ({ children }) => {
  const dispatch = useDispatch();
  const { share } = useRouter().query;
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const userIndicator = localStorage.getItem(userInfo?.userId);

  useEffect(() => {
    console.log(share, 'SHARE');
    if (share === undefined) {
      if (userIndicator === null) {
        const objName = userInfo?.userId === '' ? 'fakeUser' : userInfo?.userId;
        const saveObject = {
          indicator: {
            share: 'N',
            graph: 'N',
            originData: 'N',
            filter: 'N',
          },
        };
        dispatch(updateInitIndicator({ share: 'N', graph: 'N', originData: 'N', filter: 'N' }));
        const string = JSON.stringify(saveObject);
        localStorage.setItem(objName, string);
      } else {
        const indicator = JSON.parse(userIndicator);
        dispatch(updateInitIndicator(indicator.indicator));
        const objName = userInfo?.userId === '' ? 'fakeUser' : userInfo?.userId;
        const saveObject = {
          indicator: {
            share: indicator.indicator.share,
            graph: indicator.indicator.graph,
            originData: indicator.indicator.originData,
            filter: indicator.indicator.filter ? indicator.indicator.filter : 'N',
          },
        };
        const string = JSON.stringify(saveObject);
        localStorage.setItem(objName, string);
      }
    } else {
      const objName = 'fakeUser';
      const saveObject = {
        indicator: {
          share: 'N',
          graph: 'N',
          originData: 'N',
          filter: 'N',
        },
      };
      dispatch(updateInitIndicator({ share: 'N', graph: 'N', originData: 'N', filter: 'N' }));
      const string = JSON.stringify(saveObject);
      localStorage.setItem(objName, string);
    }
  }, [userIndicator, share]);

  return (
    <FlexBox className={'jotang'} style={{ width: '100%' }} justify={'flex-start'} align={'flex-start'}>
      <ReportSideBar />
      <div
        css={{
          width: 'calc(100% - 296px)',
          marginLeft: '296px',
          minWidth: '900px',
        }}
      >
        <ReportHeader />
        <div id={'reportBoxArea'} className={'scrollType2'} css={[reportContainer, { marginTop: '72px' }]}>
          {children}
        </div>
      </div>
    </FlexBox>
  );
};

export default ReportLayout;
const reportContainer = css`
  scroll-snap-type: y mandatory;
  //overflow-y: scroll;
  width: 100%;
  height: calc(100vh - 72px);
  //background: red;
`;
