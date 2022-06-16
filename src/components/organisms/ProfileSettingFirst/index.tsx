import React, { useCallback, useState } from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import Form from '../../atoms/Form';
import Input from '../../atoms/Input';
import FlexBox from '../../atoms/FlexBox';
import BasicButton from '../../atoms/Button/BasicButton';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { colors } from '../../../styles/Common.styles';
import TextButton from '../../atoms/Button/TextButton';
import { body3_medium } from '../../../styles/FontStyles';
import { showToast } from '../../../store/reducers/toastReducer';
import { isShow } from '../../../store/reducers/modalReducer';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import AnnouncementBox from '../../molecules/AnnouncementBox';
import SelectBox from '../../atoms/SelectBox';
import { useUpdateUserInfo } from '../../../api/userApi';
import withTokenAuth from '../../../hoc/withTokenAuth';
import { InputType } from '../../../common/types/commonTypes';
import Select from '../../atoms/Select';

const selectBoxArr = [
  { value: '디자인', label: '디자인' },
  { value: '기획', label: '기획' },
  { value: '유저리서치', label: '유저리서치' },
  { value: 'PO/PM', label: 'PO/PM' },
  { value: '마케팅', label: '마케팅' },
];

const selectBoxCompanyArr = [
  { value: '프리랜서(1인)', label: '프리랜서(1인)' },
  { value: '1~10인', label: '1~10인' },
  { value: '11~50인', label: '11~50인' },
  { value: '51~100인', label: '51~100인' },
  { value: '101인 이상', label: '101인 이상' },
];
const selectBoxInflowPathArr = [
  { value: '스타트업 지원프로그램 참가', label: '스타트업 지원프로그램 참가' },
  { value: '보육기관/액셀러레이터 추천 및 홍보', label: '보육기관/액셀러레이터 추천 및 홍보' },
  { value: '검색', label: '검색' },
  { value: 'Diby & 디비디랩 UX 콘텐츠', label: 'Diby & 디비디랩 UX 콘텐츠' },
  { value: '보도자료/기사', label: '보도자료/기사' },
  { value: '지인추천', label: '지인추천' },
  { value: '기타', label: '기타' },
];

const ProfileSettingFirst = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const modalShow = useSelector<ReducerType, boolean>(state => state.modal.isShow);
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);

  // hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InputType>({});
  const onSubmit = data => handleUpdateUserInfo('success', data);
  const onError = errors => handleProcessingError('fail', errors);
  const [selected, setSelected] = useState({
    funnelsCd: '',
    cpPosition: '',
    cpSize: '',
  });
  const updateUserInfo = useUpdateUserInfo();

  const handleUpdateUserInfo = useCallback(
    (status, data) => {
      // loginResponse.mutate(data);
      const sendObject = {
        ...selected,
        userName: data.userName ? data.userName : userInfo.userName,
        firstTimeYn: 'N',
      };
      // console.log(sendObject);
      updateUserInfo.mutate(sendObject);
    },
    [selected],
  );
  const onClickValue = useCallback(
    (value, label) => {
      setSelected({
        ...selected,
        [label]: value,
      });
    },
    [selected],
  );

  // 로그인 시도 실패
  const handleProcessingError = useCallback((status, errors) => {
    console.log(errors, 'ERRORS');
  }, []);

  return (
    <FlexBox style={{ marginTop: '160px', height: '100%' }} justify={'flex-start'} direction={'column'}>
      <PopupBox padding={'0'} width={'434px'} height={'auto'}>
        <ModalTitle style={{ padding: '24px 32px 0' }} closed={false} title={`반가워요. ${userInfo.userName} 님!`} titlePosition={'center'} />
        <ModalTitle style={{ padding: '5px 32px 24px' }} closed={false} title={`계정과 관련해서 몇 가지 질문드릴게요.`} titlePosition={'center'} />
        <Form onSubmit={handleSubmit(onSubmit, onError)} style={{ padding: '16px 40px 32px', boxSizing: 'border-box' }}>
          <Input
            title={'닉네임'}
            register={register}
            label={'userName'}
            errors={errors}
            // errorMsg={'필수 항목입니다.'}
            defaultValue={userInfo.userName}
            placeholder={userInfo.userName}
            style={{ marginBottom: '16px' }}
          />

          <AnnouncementBox
            content={
              <div>
                닉네임을 입력하지 않을 경우, <br />
                회원님의 이메일 계정으로 닉네임이 생성돼요.
              </div>
            }
          />

          <Select
            title={'[닉네임]님이 맡고 계신 직무 (선택)'}
            options={commonCode?.CpPositionType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="cpPosition"
            onClick={onClickValue}
          />
          <Select
            title={'[닉네임]님의 회사 규모 (선택)'}
            options={commonCode?.CpSizeType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="cpSize"
            onClick={onClickValue}
          />
          <Select
            title={'유입 경로 (선택)'}
            options={commonCode?.FunnelsType}
            // value={selected.funnelsCd}
            selected={selected}
            setSelected={setSelected}
            name="funnelsCd"
            onClick={onClickValue}
          />

          <FlexBox style={{ marginTop: '32px' }} direction={'column'} align={'center'} justify={'space-between'}>
            <BasicButton theme={'dark'} type={'submit'} text={'완료하기'} style={{ marginBottom: '18px' }} />
          </FlexBox>
        </Form>
        {/*<FlexBox justify={'center'} align={'center'}>*/}
        {/*  <TextButton onClick={handleSkip} textStyle={body3_medium} text={'다음에 할게요.'} />*/}
        {/*</FlexBox>*/}
      </PopupBox>
    </FlexBox>
  );
};

export default withTokenAuth(ProfileSettingFirst, false);
