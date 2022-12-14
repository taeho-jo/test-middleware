import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';
import PageTitle from '../../../components/atoms/PageTitle';
import FlexBox from '../../../components/atoms/FlexBox';
import SettingCard from '../../../components/atoms/SettingCard';
import { css } from '@emotion/react';
import { heading3_bold } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';

const ProfileUpdate = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const commonCode = useSelector<ReducerType, any>(state => state.common.commonCode);

  const cpPositionType = commonCode?.CpPositionType;
  const cpSize = commonCode?.CpSizeType;

  const showModalFun = useCallback(name => {
    dispatch(isShow({ isShow: true, type: name }));
  }, []);

  const handleWithdrawal = useCallback(() => {
    dispatch(isShow({ isShow: true, type: 'withdrawalModal' }));
  }, []);

  return (
    <>
      <PageTitle title={'프로필 설정'} />
      <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0 40px 20px 40px' }}>
        <div css={teamNameBoxStyle}>
          <span css={heading3_bold}>{userInfo ? userInfo?.userName : ''}</span>
        </div>
        <SettingCard
          onClick={showModalFun}
          name={'profileNickName'}
          title={'닉네임'}
          content={userInfo ? userInfo?.userName : ''}
          btnText={'닉네임 수정하기'}
          showBtn={true}
        />
        <SettingCard
          // onClick={showModalFun}
          name={'email'}
          title={'이메일'}
          content={userInfo ? userInfo?.userId : ''}
          showBtn={false}
        />
        <SettingCard
          onClick={() => router.push('/admin/profile/credit')}
          name={'credit'}
          title={'보유 크레딧'}
          content={userInfo?.remainingCredit ? `${userInfo?.remainingCredit?.toLocaleString()}원` : '0원'}
          btnText={'크레딧 내역보기'}
          showBtn={true}
        />
        <SettingCard
          onClick={showModalFun}
          name={'profileCpPosition'}
          title={'직무'}
          content={userInfo?.cpPositionType ? cpPositionType.filter(el => el.key === userInfo?.cpPositionType)[0].displayName : ''}
          btnText={'직무 수정하기'}
          showBtn={true}
        />
        <SettingCard
          onClick={showModalFun}
          name={'profileCpSize'}
          title={'회사규모'}
          content={userInfo?.cpSizeType ? cpSize.filter(el => el.key === userInfo?.cpSizeType)[0].displayName : ''}
          btnText={'회사 규모 수정하기'}
          showBtn={true}
        />
        <SettingCard
          onClick={showModalFun}
          name={'consentToUseMarketingAgreeModal'}
          title={'마케팅 수신동의'}
          content={
            userInfo?.consentToUseMarketingYn === 'Y'
              ? `${userInfo?.consentToUseMarketingDt}에 수신 동의하셨습니다.`
              : `${userInfo?.consentToUseMarketingDt}에 수신 거부하셨습니다.`
          }
          btnText={'수신 동의 수정하기'}
          showBtn={true}
        />
        <SettingCard
          // onClick={handleWithdrawal}
          name={'teamNameModify'}
          title={'계정 삭제'}
          content={`${userInfo?.userId} 삭제하기`}
          contentColor={colors.red}
          contentEvent={handleWithdrawal}
          // btnText={'계정 삭제하기'}
          showBtn={false}
        />
      </FlexBox>
    </>
  );
};

const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;

export default ProfileUpdate;
