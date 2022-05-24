import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import FlexBox from '../../../components/atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { body2_bold } from '../../../styles/FontStyles';

import icon1_inActive from '../../../../public/assets/images/admin/team/uitest_inactive.png';
import icon2_inActive from '../../../../public/assets/images/admin/team/scenario_inactive.png';
import icon3_inActive from '../../../../public/assets/images/admin/team/uxposition_inactive.png';
import icon4_inActive from '../../../../public/assets/images/admin/team/customer_inactive.png';
import icon1 from '../../../../public/assets/images/admin/team/uitest_hover.png';
import icon2 from '../../../../public/assets/images/admin/team/scenario_hover.png';
import icon3 from '../../../../public/assets/images/admin/team/uxposition_hover.png';
import icon4 from '../../../../public/assets/images/admin/team/customer_hover.png';
import backgroundImg1 from '../../../../public/assets/images/admin/reportList/uiTestReport.png';
import { updateTeamInfo } from '../../../store/reducers/teamReducer';
import ResearchModuleButton from '../../atoms/ResearchModuleButton';
import { isShow } from '../../../store/reducers/modalReducer';
import ResearchList from '../ResearchList';

const ResearchType = [
  {
    title: '어떤 리서치를 해야할 지 모르겠어요.',
    link: 'https://naver.com',
    backgroundColor: `${colors.grey._3c}`,
    color: `${colors.white}`,
    hoverImage: null,
    image: null,
  },
  {
    title: 'UI 진단',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon1,
    image: icon1_inActive,
    modalType: 'uiResearchModule',
  },
  {
    title: '시나리오 검증',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon3,
    image: icon3_inActive,
    modalType: 'scenarioResearchModule',
  },
  {
    title: 'UX 포지션 분석',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon2,
    image: icon2_inActive,
    modalType: 'uxResearchModule',
  },
  {
    title: '잠재 고객 검증',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    hoverImage: icon4,
    image: icon4_inActive,
    modalType: 'customerResearchModule',
  },
];

const selectBoxArr = [
  { value: '옵션 A', label: '옵션 A' },
  { value: '옵션 B', label: '옵션 B' },
  { value: '옵션 C', label: '옵션 C' },
  { value: '옵션 D', label: '옵션 D' },
  { value: '옵션 E', label: '옵션 E' },
];
const DummyListData = [
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
  { img: backgroundImg1.src, testTitle: '우쥬테스트 UI 진단 v0.1', testType: 'UI 진단 테스트', testDate: '2022. 03. 15' },
];

const TeamDashboard = () => {
  const dispatch = useDispatch();

  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // 최초로그인
    // dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));

    // 걍 로그인
    dispatch(
      updateTeamInfo([
        {
          teamName: 'DBDLAB의 팀',
          memberList: ['A', 'K', 'P', 'A', 'K', 'P', 'A', 'K', 'P'],
        },
        {
          teamName: 'DBDLAB의 팀2',
          memberList: ['B', 'D', 'J'],
        },
        {
          teamName: 'DBDLAB의 팀2',
          memberList: ['Y', 'M', 'O'],
        },
      ]),
    );
  }, []);

  const showResearchModuleModal = useCallback(modalType => {
    dispatch(isShow({ isShow: true, type: modalType }));
  }, []);

  return (
    <>
      <div css={teamMainContainer}>
        <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={researchKinds}>
          <span css={[body2_bold, titleStyle]}>리서치 종류 (모듈)</span>
          <FlexBox justify={'flex-start'} align={'flex-start'}>
            {ResearchType.map((item, index) => {
              return (
                <ResearchModuleButton
                  onClick={showResearchModuleModal}
                  key={index}
                  title={item.title}
                  link={item.link}
                  backgroundColor={item.backgroundColor}
                  color={item.color}
                  image={item.image}
                  hoverImage={item.hoverImage}
                  modalType={item.modalType}
                  index={index}
                />
              );
            })}
          </FlexBox>
        </FlexBox>
        <FlexBox style={{ padding: '24px 32px 32px' }} direction={'column'} align={'flex-start'} justify={'flex-start'}>
          <span css={[body2_bold, titleStyle]}>모든 리서치</span>
          <ResearchList listData={DummyListData} />
        </FlexBox>
      </div>
    </>
  );
};

export default TeamDashboard;

const teamMainContainer = css``;

const researchKinds = css`
  background-color: ${colors.grey._ec};
  padding: 25px 31px 33px 31px;
  margin-right: 16px;
`;
const titleStyle = css`
  margin-bottom: 24px;
  display: block;
`;
