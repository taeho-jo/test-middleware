import React, { useCallback, useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { body3_bold, caption1_bold, caption1_regular, caption2_bold, heading5_bold } from '../../../styles/FontStyles';
import moment from 'moment';
import uiBackground from '/public/assets/png/image_thumbnail_uitest.png';
import customerBackground from '/public/assets/png/image_thumbnail_customer.png';
import scenarioBackground from '/public/assets/png/image_thumbnail_scenario.png';
import uxBackground from '/public/assets/png/image_thumbnail_uxposition.png';
import Icon from '../../atoms/Icon';
import FlexBox from '../../atoms/FlexBox';
import ProfileIcon from '../../atoms/ProfileIcon';
import Button from '../../atoms/Button';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { useRouter } from 'next/router';
import LayerPopup from '../../atoms/LayerPopup';
import { isShow } from '../../../store/reducers/modalReducer';
import { showToast } from '../../../store/reducers/toastReducer';
import { fetchResearchDelete, updateDeleteResearchInfo } from '../../../store/reducers/researchCreateReducer';
import { profileColor } from '../../../common/util/commonVar';
import { getBackgroundColor, handleChoiceResearchStatusTooltip, handleChoiceStatusNmColor } from '../../../common/util/commonFunc';
import ResearchDetailTooltipModal from '../../organisms/Modal/ResearchDetailTooltipModal';
import { closeTooltip, showTooltip } from '../../../store/reducers/commonReducer';

interface PropsType {
  createDt: string;
  researchTypeNm: string;
  researchNm: string;
  researchSeq: number;
  reportViewId: string;
  statusType: string;
  statusTypeNm: string;
  reportType: string;
  downloadLink: string;
  webLink: string;
  createId: string;
  createName: string;
  onClick?: (e: any, id: string, type: string, name: string, downloadLink: string, webLink: string) => void;
}

const ListReport = ({
  createDt,
  researchTypeNm,
  researchNm,
  researchSeq,
  reportViewId,
  statusType,
  statusTypeNm,
  reportType,
  downloadLink,
  webLink,
  createId,
  createName,
  onClick,
}: PropsType) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const SELECTED_TEAM_SEQ = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const STATUS_CODE = useSelector<ReducerType, { key: string; value: string; displayName: string }[]>(
    state => state.common.commonCode.ResearchStatusType,
  );

  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);

  // LayerPopup state
  const [focusProfile, setFocusProfile] = useState(false);
  // ??????
  const [myRole, setMyRole] = useState<string | null>(null);

  const statusRef = useRef(null);

  useEffect(() => {
    if (userInfo && selectTeamList) {
      const memberArr = selectTeamList?.teamMember;
      const myRole = memberArr?.filter(el => el.userId === userInfo.userId)?.[0]?.teamRoleType;
      setMyRole(myRole);
    }
  }, [userInfo, selectTeamList]);

  const findIndexFun = () => {
    const index = selectTeamList?.teamMember?.findIndex(el => el.userId === createId);
    return index;
  };

  const getResearchStatusIcon = useCallback(
    statusType => {
      switch (statusType) {
        case 'RESEARCH_COMPLETED':
          return 'STATUS_COMPLETE';
        case 'RESEARCH_INFO_ENTERING':
        case 'RESEARCH_REQUEST_DESIGN_COMPLETE':
        case 'RESEARCH_DESIGN':
        case 'RESEARCH_DESIGN_COMPLETE':
        case 'RESEARCH_START_REQUEST_COMPLETE':
          return 'STATUS_BEFORE';
        case 'RESPONSE_RECRUITING':
        case 'RESEARCH_ANALYZING':
          return 'STATUS_ING';
        default:
          return 'STATUS_BEFORE';
      }
    },
    [statusType],
  );

  const handleMovePage = (statusType, researchSeq, createId) => {
    if (statusType == 'RESEARCH_INFO_ENTERING') {
      if (myRole === '?????????') {
        router.push(`/admin/research/${researchSeq}`);
      }
      if (myRole === '??????') {
        if (createId !== userInfo?.userId) {
          dispatch(
            showToast({ message: '?????????????????? ???????????? ????????? ???????????? ????????? ??? ????????????.', isShow: true, status: 'warning', duration: 5000 }),
          );
        } else {
          router.push(`/admin/research/${researchSeq}`);
        }
      }
    } else {
      router.push(`/admin/research/${researchSeq}/detail`);
    }
  };
  const handleShowLayerPopup = e => {
    e.stopPropagation();
    setFocusProfile(true);
  };

  const handleRemoveResearch = (researchSeq, createId) => {
    if (statusType === 'RESEARCH_INFO_ENTERING') {
      if (myRole === '?????????') {
        dispatch(updateDeleteResearchInfo({ teamSeq: SELECTED_TEAM_SEQ, researchSeq: researchSeq }));
        dispatch(isShow({ isShow: true, type: 'researchDeleteConfirmModal' }));
      }
      if (myRole === '??????') {
        if (userInfo.userId === createId) {
          dispatch(updateDeleteResearchInfo({ teamSeq: SELECTED_TEAM_SEQ, researchSeq: researchSeq }));
          dispatch(isShow({ isShow: true, type: 'researchDeleteConfirmModal' }));
        } else {
          dispatch(showToast({ message: `???????????? ?????? ??? ????????? ????????????.`, isShow: true, status: 'warning', duration: 5000 }));
        }
      }
    } else {
      dispatch(showToast({ message: `????????? ?????? ?????? ?????? ????????? ????????? ??????????????????.`, isShow: true, status: 'warning', duration: 5000 }));
    }
  };

  const handleShowTooltip = (statusTypeNm, statusType) => {
    const positionObject = statusRef?.current?.getBoundingClientRect();

    const top = positionObject.top + 60;
    const left = statusRef?.current?.offsetLeft - 100;
    dispatch(
      showTooltip({
        show: true,
        title: statusTypeNm,
        content: handleChoiceResearchStatusTooltip(statusType),
        top,
        left,
        backgroundColor: colors.grey._3c,
      }),
    );
  };

  useEffect(() => {
    return () => {
      dispatch(closeTooltip());
    };
  }, []);

  return (
    <div css={mainContainer} onClick={() => handleMovePage(statusType, researchSeq, createId)}>
      <FlexBox direction={'row'} justify={'space-between'} align={'center'}>
        <span css={[caption1_bold, blockStyle]}>
          ({researchSeq}) {researchTypeNm}
        </span>
        {(myRole === '?????????' || (myRole === '??????' && createId === userInfo?.userId)) && (
          <div
            css={css`
              position: relative;
            `}
            onClick={e => handleShowLayerPopup(e)}
          >
            <Icon name={'ACTION_MORE'} />
            <LayerPopup
              display={focusProfile}
              top={-5}
              right={-160}
              setFocusProfile={setFocusProfile}
              normalText={[{ text: '????????? ??????', onClick: () => handleRemoveResearch(researchSeq, createId) }]}
            />
          </div>
        )}
      </FlexBox>
      <span css={[heading5_bold, titleStyle]}>{researchNm}</span>
      <FlexBox style={dateBox} direction={'row'} justify={'flex-start'} align={'center'}>
        <ProfileIcon
          name={createName?.slice(0, 1)}
          size={'20px'}
          margin={'0 8px 0 0'}
          fontStyle={caption2_bold}
          backgroundColor={createId === userInfo.userId ? profileColor : getBackgroundColor(findIndexFun())}
        />
        <span css={[caption1_regular, dateStyle]}>{moment(createDt).format('YYYY. MM. DD')}</span>
      </FlexBox>
      <FlexBox forwardRef={statusRef} style={statusBox} direction={'row'} justify={'flex-start'} align={'center'}>
        <Icon name={getResearchStatusIcon(statusType)} size={24} />
        <span
          onMouseOver={() => handleShowTooltip(statusTypeNm, statusType)}
          onMouseOut={() => dispatch(closeTooltip())}
          css={[body3_bold, { marginLeft: '8px', color: handleChoiceStatusNmColor(statusType) }]}
        >
          {statusTypeNm}
        </span>
      </FlexBox>
      {statusType === 'RESEARCH_COMPLETED' && (
        <FlexBox>
          <Button
            onClick={(e: any) => onClick(e, reportViewId, reportType, researchNm, downloadLink, webLink)}
            backgroundColor={colors.grey._3c}
            btnText={'????????? ????????????'}
            btnTextColor={'white'}
          />
        </FlexBox>
      )}
    </div>
  );
};

export default ListReport;

const blockStyle = css`
  display: block;
  color: ${colors.grey._3c};
`;
const titleStyle = [
  blockStyle,
  css`
    margin-top: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
];
const dateStyle = [
  blockStyle,
  css`
    color: ${colors.grey._99};
  `,
];

const mainContainer = css`
  width: 256px;
  height: 236px;
  border-radius: 8px;
  border: 1px solid ${colors.grey._ec};
  padding: 25px 20px 0 20px;
  margin-bottom: 20px;
  margin-right: 16px;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
  }
`;
const dateBox = css`
  margin-top: 8px;
  margin-left: 3px;
`;
const statusBox = css`
  padding: 20px 0;
`;
