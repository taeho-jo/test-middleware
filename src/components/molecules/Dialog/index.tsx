import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import Portal from '../../atoms/Portal';
import { css } from '@emotion/react';
import { closeDialog } from '../../../store/reducers/commonReducer';

const Dialog = () => {
  const dialog = useSelector<ReducerType, any>(state => state.common.dialog);
  const dispatch = useDispatch();

  const handleCloseDialog = () => {
    dialog?.okFunction();
    dispatch(closeDialog());
  };

  return (
    <Portal selector={'dialog-root'}>
      {dialog?.show && (
        <FlexBox className={'scrollType1'} style={{ marginTop: '160px', ...darkBackgroundStyle }} justify={'center'} direction={'column'}>
          <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
            <ModalTitle closed={false} style={{ height: 'auto', padding: '24px 32px' }} whiteSpace={'pre-wrap'} title={dialog?.title} />
            <ModalSubTitle text={dialog?.content} />

            <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
              <BasicButton
                theme={'dark'}
                onClick={() => dispatch(closeDialog())}
                designBgColor={dialog?.cancelButtonColor}
                text={dialog?.cancelButton}
                style={{ width: '160px', padding: '16px 52px' }}
              />
              <BasicButton
                onClick={handleCloseDialog}
                designBgColor={dialog?.okButtonColor}
                text={dialog?.okButton}
                style={{ width: '160px', padding: '16px 52px' }}
              />
            </FlexBox>
          </PopupBox>
        </FlexBox>
      )}
    </Portal>
  );
};

export default Dialog;

const darkBackgroundStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 502;
  background: rgba(0, 0, 0, 0.4);
`;
