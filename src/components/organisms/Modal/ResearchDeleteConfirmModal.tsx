import React, { useCallback } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { isShow } from '../../../store/reducers/modalReducer';
import { fetchResearchDelete, fetchResearchModifyInfo } from '../../../store/reducers/researchCreateReducer';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';

const ResearchDeleteConfirmModal = () => {
  const dispatch = useDispatch();
  const deleteInfo = useSelector<ReducerType, any>(state => state.researchCreate.researchDeleteInfo);
  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);
  const handleChange = () => {
    dispatch(fetchResearchDelete({ teamSeq: deleteInfo.teamSeq, researchSeq: deleteInfo.researchSeq }));
  };
  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle closed={false} style={{ height: 'auto', padding: '24px 32px' }} whiteSpace={'pre-wrap'} title={<>리서치를 삭제하시겠습니까?</>} />
        <ModalSubTitle subTitle={[<>정말 리서치를 삭제하시겠습니까?</>, <> 지금까지 진행했던 모든 이력을 잃게됩니다.</>]} />

        <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
          <BasicButton onClick={handleChange} theme={'dark'} text={'예'} style={{ width: '160px', padding: '16px 52px' }} />
          <BasicButton onClick={closeModal} designBgColor={colors.red} text={'아니오'} style={{ width: '160px', padding: '16px 52px' }} />
        </FlexBox>
      </PopupBox>
    </FlexBox>
  );
};

export default ResearchDeleteConfirmModal;
