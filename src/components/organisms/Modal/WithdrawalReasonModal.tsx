import React, { Fragment, useCallback, useEffect, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import ModalSubTitle from '../../atoms/ModalSubTitle';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import { colors } from '../../../styles/Common.styles';
import { useDispatch, useSelector } from 'react-redux';
import { isShow } from '../../../store/reducers/modalReducer';
import CheckBox from '../../atoms/CheckBox';
import { useForm } from 'react-hook-form';
import { ReducerType } from '../../../store/reducers';
import Input from '../../atoms/Input';
import Form from '../../atoms/Form';
import { useRouter } from 'next/router';
import { showToast } from '../../../store/reducers/toastReducer';
import { withdrawalUser } from '../../../store/reducers/userReducer';

const WithdrawalReasonModal = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const withdrawalType = useSelector<ReducerType, any>(state => state.common?.commonCode?.WithdrawalType);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    formState: { errors },
  } = useForm({});
  const onSubmit = data => handleOnSubmit('success', data);
  const onError = errors => console.log('fail', errors);

  const [inputStatus, setInputStatus] = useState(true);

  const closeModal = useCallback(() => {
    dispatch(isShow({ isShow: false, type: '' }));
  }, []);

  const handleOnSubmit = useCallback((status, data) => {
    const typeList = [];
    for (const i in data) {
      if (i !== 'etcReason') {
        if (data[i]) {
          typeList.push(i);
        }
      }
    }

    if (typeList.length === 0 && !data.etcReason) {
      dispatch(showToast({ message: '탈퇴 사유를 선택해주세요.', isShow: true, status: 'warning', duration: 5000 }));
    } else {
      const sendObject = {
        withdrawalTypeList: typeList,
        withdrawalReason: data.etcReason,
      };
      for (const key in sendObject) {
        if (sendObject[key] === undefined || sendObject[key] === '') {
          delete sendObject[key];
        }
      }
      dispatch(withdrawalUser({ sendObject, callback: router }));
    }
  }, []);

  useEffect(() => {
    if (watch('ETC')) {
      setInputStatus(false);
    } else if (!watch('ETC')) {
      setInputStatus(true);
      reset({ etcReason: '' });
    }
  }, [watch('ETC')]);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0px'} width={'392px'} height={'auto'}>
        <ModalTitle closed={false} style={{ height: 'auto', padding: '24px 32px' }} title={<>사유를 알려주세요</>} />
        <ModalSubTitle subTitle={[<>Diby를 사용하면서</>, <>어떤 점이 마음에 들지 않았는지 알려주시면,</>, <>경청하여 개선하겠습니다.</>]} />

        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={{ padding: '16px 40px' }}>
            {withdrawalType?.map((el, index) => {
              return (
                <Fragment key={index}>
                  <CheckBox style={{ marginBottom: '12px' }} inputName={el.key} label={el.displayName} register={register} errors={errors} />
                </Fragment>
              );
            })}
            <Input
              title={''}
              register={register}
              disabled={inputStatus}
              label={'etcReason'}
              errors={errors}
              errorMsg={'필수 항목입니다.'}
              placeholder={'텍스트를 입력해주세요'}
              value={getValues('eteReason')}
              registerOptions={{
                required: !inputStatus,
              }}
            />
          </FlexBox>

          <FlexBox justify={'space-around'} style={{ padding: '32px 20px 40px' }}>
            <BasicButton type={'submit'} theme={'dark'} text={'제출하기'} style={{ width: '160px', padding: '16px 52px' }} />
            <BasicButton onClick={closeModal} designBgColor={colors.red} text={'취소'} style={{ width: '160px', padding: '16px 52px' }} />
          </FlexBox>
        </Form>
      </PopupBox>
    </FlexBox>
  );
};

export default WithdrawalReasonModal;
