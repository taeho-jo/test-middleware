import React, { useEffect, useState } from 'react';
import ReportHeader from '../../../components/molecules/ReportHeader';
import ReportSideBar from '../../../components/molecules/ReportSideBar';
import FlexBox from '../../../components/atoms/FlexBox';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { updateIndicatorStatus, updateInitIndicator } from '../../../store/reducers/commonReducer';
// const useScroll = () => {
//   const [state, setState] = useState({
//     x: 0,
//     y: 0,
//   });
//   const onScroll = () => {
//     console.log(window.scrollY, '~~~~~~~~~~~~~~~~~~~');
//   };
//   useEffect(() => {
//     window.addEventListener('scroll', onScroll);
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);
//   return state;
// };
const ReportLayout = ({ children }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const userIndicator = localStorage.getItem(userInfo?.userId);
  // const { y } = useScroll();
  useEffect(() => {
    if (userIndicator === null) {
      const objName = userInfo?.userId === '' ? 'fakeUser' : userInfo?.userId;
      const saveObject = {
        indicator: {
          share: 'N',
          graph: 'N',
          originData: 'N',
        },
      };
      dispatch(updateInitIndicator({ share: 'N', graph: 'N', originData: 'N' }));
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
        },
      };
      const string = JSON.stringify(saveObject);
      localStorage.setItem(objName, string);
    }
  }, [userIndicator]);

  return (
    <FlexBox style={{ width: '100%' }} justify={'flex-start'} align={'flex-start'}>
      <ReportSideBar />
      <div
        css={{
          width: 'calc(100% - 296px)',
          marginLeft: '296px',
          minWidth: '900px',
        }}
      >
        <ReportHeader />
        <div id={'reportBoxArea'} className={'scrollType1'} css={{ marginTop: '72px' }}>
          {children}
        </div>
      </div>
    </FlexBox>
  );
};

export default ReportLayout;
