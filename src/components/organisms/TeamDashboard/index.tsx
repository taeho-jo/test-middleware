import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/react';
import FlexBox from '../../../components/atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { heading5_bold } from '../../../styles/FontStyles';

// import icon1 from '../../public/assets/images/icon_uitest1.png';
import icon2_unActive from '../../../../public/assets/images/admin/team/icon_uxposition_unActive.png';
import icon3_unActive from '../../../../public/assets/images/admin/team/icon_scenario_unActive.png';
import icon4_unActive from '../../../../public/assets/images/admin/team/icon_customer_unActive.png';
import icon1 from '../../../../public/assets/images/icon_uitest1.png';
import icon2 from '../../../../public/assets/images/icon_uxposition1.png';
import icon3 from '../../../../public/assets/images/icon_scenario1.png';
import icon4 from '../../../../public/assets/images/icon_customer1.png';
import Image from 'next/image';
import withTokenAuth from '../../../hoc/withTokenAuth';
import withoutTokenAuth from '../../../hoc/withoutTokenAuth';
import TeamCreatePopup from '../../../components/molecules/TeamCreatePopup';
import { ReducerType } from '../../../store/reducers';
import TeamInviteMemberPopup from '../TeamInviteMemberPopup';
import ListReport from '../../molecules/ListReport';
import reportCardImage from '../../../assets/list_report_bg.png';
import GridBox from '../../atoms/GridBox';

const ResearchType = [
  {
    title: '어떤 리서치를 해야할 지 모르겠어요.',
    link: 'https://naver.com',
    backgroundColor: `${colors.cyan._500}`,
    color: `${colors.white}`,
    image: null,
  },
  {
    title: 'UI 진단',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    image: icon1,
  },
  {
    title: '시나리오 검증',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    image: icon3,
  },
  {
    title: 'UX 포지션 분석',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    image: icon2,
  },
  {
    title: '잠재 고객 검증',
    link: 'https://naver.com',
    backgroundColor: `${colors.white}`,
    color: null,
    image: icon4,
  },
];

const TeamDashboard = () => {
  const isFirstCreateTeam = useSelector<ReducerType, boolean>(state => state.team.isFirstCreate);
  const isInviteModal = useSelector<ReducerType, boolean>(state => state.team.isInviteModal);
  // console.log(isFirstCreateTeam, 'is First');
  return (
    <>
      {/*<div css={firtTeamCreateBoxStyle} />*/}
      <div css={teamMainContainer}>
        <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={researchKinds}>
          <span css={[heading5_bold, titleStyle]}>리서치 종류 (모듈)</span>
          <FlexBox justify={'flex-start'} align={'flex-start'}>
            {ResearchType.map((item, index) => {
              return (
                <div key={index} css={researchBox(item.backgroundColor, item.color, item.image)}>
                  <span css={[heading5_bold, { color: item.color }]}>{item.title}</span>
                  {/*<Image src={item.image} alt={'diby1'} width={24} height={24} priority={true} quality={100} />*/}
                  {item.image ? <img css={imageStyle} src={item.image.src} alt="123123" /> : null}
                </div>
              );
            })}
          </FlexBox>
        </FlexBox>
        <GridBox gridType={'list'} cardBoxSize={256} gutter={16}>
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
          <ListReport
            img={reportCardImage.src}
            testType={'UI 진단 테스트'}
            testTitle={'둠칫 둠칫 뚜루뚜두 UI 진단 테스트테스트 테에에에스트'}
            testDate={'2022.02.10'}
          />
        </GridBox>
        {isFirstCreateTeam && <TeamCreatePopup />}
        {isInviteModal && <TeamInviteMemberPopup />}
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
const researchBox = (backgroundColor, color, image) => css`
  width: 260px;
  padding: ${image ? '16px 30px' : '26.5px 30px'};
  background-color: ${backgroundColor};
  margin-right: 16px;
  border-radius: 8px;
  ${image
    ? `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
    : ``}
`;
const imageStyle = css`
  width: 40px;
  height: 40px;
`;
const firtTeamCreateBoxStyle = css`
  width: 100%;
  height: 100vh;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0ㅇㅇㅇ4);
`;
