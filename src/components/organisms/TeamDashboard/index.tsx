import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { css } from '@emotion/react';
import FlexBox from '../../../components/atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold } from '../../../styles/FontStyles';

import icon1_inActive from '../../../../public/assets/images/admin/team/uitest_inactive.png';
import icon2_inActive from '../../../../public/assets/images/admin/team/scenario_inactive.png';
import icon3_inActive from '../../../../public/assets/images/admin/team/uxposition_inactive.png';
import icon4_inActive from '../../../../public/assets/images/admin/team/customer_inactive.png';
import icon1 from '../../../../public/assets/images/admin/team/uitest_hover.png';
import icon2 from '../../../../public/assets/images/admin/team/scenario_hover.png';
import icon3 from '../../../../public/assets/images/admin/team/uxposition_hover.png';
import icon4 from '../../../../public/assets/images/admin/team/customer_hover.png';
import GridBox from '../../atoms/GridBox';
import { updateTeamInfo } from '../../../store/reducers/teamReducer';
import ResearchModuleButton from '../../atoms/ResearchModuleButton';
import { isShow } from '../../../store/reducers/modalReducer';

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

const TeamDashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 최초로그인
    // dispatch(isShow({ isShow: true, type: 'firstCreateTeam' }));

    // 걍 로그인
    dispatch(
      updateTeamInfo([
        {
          teamName: 'DBDLAB의 팀',
          memberList: ['A', 'K', 'P'],
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
          <span css={[heading5_bold, titleStyle]}>리서치 종류 (모듈)</span>
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
        <GridBox gridType={'list'} cardBoxSize={256} gutter={16}>
          {/*<ListReport*/}
          {/*  img={reportCardImage.src}*/}
          {/*  testType={'UI 진단 테스트'}*/}
          {/*  testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}*/}
          {/*  testDate={'2022.02.10'}*/}
          {/*/>*/}
          {/*<ListReport*/}
          {/*  img={reportCardImage.src}*/}
          {/*  testType={'UI 진단 테스트'}*/}
          {/*  testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}*/}
          {/*  testDate={'2022.02.10'}*/}
          {/*/>*/}
          {/*<ListReport*/}
          {/*  img={reportCardImage.src}*/}
          {/*  testType={'UI 진단 테스트'}*/}
          {/*  testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}*/}
          {/*  testDate={'2022.02.10'}*/}
          {/*/>*/}
          {/*<ListReport*/}
          {/*  img={reportCardImage.src}*/}
          {/*  testType={'UI 진단 테스트'}*/}
          {/*  testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}*/}
          {/*  testDate={'2022.02.10'}*/}
          {/*/>*/}
        </GridBox>
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
  margin-bottom: 26px;
  display: block;
`;
