import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { isShow } from '../../../store/reducers/modalReducer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResearchModifyInfo } from '../../../store/reducers/researchCreateReducer';
import { ReducerType } from '../../../store/reducers';
import { useRouter } from 'next/router';

const ResearchStatusChangeModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const DETAIL_INFO = useSelector<ReducerType, any>(state => state.researchCreate.detailData);
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const handleChange = () => {
    const sendObject = {
      ...DETAIL_INFO,
      statusType: 'RESEARCH_REQUEST_DESIGN_COMPLETE',
    };
    dispatch(fetchResearchModifyInfo({ sendObject: sendObject, step: 'last', callback: router }));
  };
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle
          closed={false}
          style={{ height: 'auto', padding: '24px 32px' }}
          whiteSpace={'pre-wrap'}
          title={
            <>
              {/*{teamMemberInfo?.userName}님을*/}
              입력하신 정보를 바탕으로
              <br />
              리서치 설계를 받아보시겠습니까?
            </>
          }
        />
        <ModalSubTitle subTitle={[<>리서치 설계 과정은 모두 무료로 진행됩니다.</>]} />

        <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
          <BasicButton onClick={closeModal} designBgColor={colors.red} text={'취소하기'} style={{ width: '160px', padding: '16px 52px' }} />
          <BasicButton onClick={handleChange} theme={'dark'} text={'받아보기'} style={{ width: '160px', padding: '16px 52px' }} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ResearchStatusChangeModal;
