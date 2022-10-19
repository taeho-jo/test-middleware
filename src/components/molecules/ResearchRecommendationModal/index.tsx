import React, { useEffect } from 'react';
import FlexBox from '../../atoms/FlexBox';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import { heading4_bold, heading4_regular } from '../../../styles/FontStyles';
import BasicButton from '../../atoms/Button/BasicButton';
import Image from 'next/image';
import Ux from '/public/assets/png/uxFrame.png';
import { css } from '@emotion/react';
import Portal from '../../atoms/Portal';
import Modal from '../../atoms/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import IconButton from '../../atoms/Button/IconButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { useRouter } from 'next/router';
import { Cookies } from 'react-cookie';
import { closeResearchRecommendationModal } from '../../../store/reducers/commonReducer';

const ResearchRecommendationModal = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const researchRecommendationModalInfo = useSelector<
    ReducerType,
    { show: boolean; title: string; content: string; tags: string; img: any; link: string; type: string }
  >(state => state.common.researchRecommendationModalInfo);

  const handleCreateResearch = () => {
    dispatch(closeResearchRecommendationModal());
    router.push('/admin/research/create');
  };

  useEffect(() => {
    if (researchRecommendationModalInfo?.show) {
      const cookies = new Cookies();
      const expires = new Date();
      expires.setDate(expires.getDate() + 1);
      console.log(researchRecommendationModalInfo?.type);
      cookies.set(`recommendResearchType`, researchRecommendationModalInfo?.type, { path: '/', expires });
    }
  }, [researchRecommendationModalInfo]);
  return (
    <Modal selector={'research-recommendation-modal-root'} show={researchRecommendationModalInfo?.show}>
      <FlexBox style={{ marginTop: '176px' }} justify={'center'} direction={'column'}>
        <PopupBox width={'720px'} height={'auto'}>
          <ModalTitle title="" />
          <FlexBox height={'420px'}>
            <FlexBox style={{ paddingLeft: '52px', paddingRight: '40px' }} height={'100%'} direction={'column'} justify={'space-between'}>
              <FlexBox direction={'column'} align={'flex-start'}>
                <span css={titleStyle}>{researchRecommendationModalInfo?.title}</span>
                <span css={[heading4_regular, marginStyle('24px')]}>{researchRecommendationModalInfo?.content}</span>
                <span css={[heading4_bold, marginStyle('24px')]}>{researchRecommendationModalInfo?.tags}</span>
                <IconTextButton
                  onClick={() => window.open(researchRecommendationModalInfo?.link)}
                  style={{ marginTop: '24px' }}
                  text={'더 알아보기'}
                  name={'CHEVRON_RIGHT_THIN'}
                />
              </FlexBox>
              <FlexBox style={{ marginBottom: '52px', padding: '8px 0' }}>
                <BasicButton onClick={() => handleCreateResearch()} theme={'dark'} text={'무료로 설계안 받기'} />
              </FlexBox>
            </FlexBox>
            <div
              css={css`
                width: 100%;
              `}
            >
              <img
                css={css`
                  width: 95%;
                  display: inline-block;
                `}
                src={researchRecommendationModalInfo?.img?.src}
                alt="researchRecommendationModalInfo?.img"
              />
              {/*<Image width={} src={researchRecommendationModalInfo?.img} alt={'Ux frame'} />*/}
            </div>
          </FlexBox>
        </PopupBox>
      </FlexBox>
    </Modal>
  );
};

export default ResearchRecommendationModal;
const titleStyle = css`
  font-size: 32px;
  line-height: 30px;
  font-weight: 700;
`;
const marginStyle = margin => css`
  display: inline-block;
  margin: ${margin} 0 4px 0;
  white-space: pre-line;
  word-break: keep-all;
`;
