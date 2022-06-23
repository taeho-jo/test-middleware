import React, { useCallback, useEffect } from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import SettingCard from '../../atoms/SettingCard';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';
import { fetchProductListApi } from '../../../api/teamApi';
import { useRouter } from 'next/router';
import { useQuery, useQueryClient } from 'react-query';
import { fetchRefreshToken } from '../../../api/authApi';

const TeamSetting = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const showModalFun = useCallback(name => {
    dispatch(isShow({ isShow: true, type: name }));
  }, []);

  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);

  // ============ React Query ============ //
  const { data: productData, refetch } = useQuery(['fetchProductList', selectTeamSeq], () => fetchProductListApi(selectTeamSeq), {
    enabled: !!selectTeamSeq,
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        queryClient.invalidateQueries(['fetchProductList', selectTeamSeq]);
      }
      if (errorData.code === 'E0007') {
        localStorage.clear();
        router.push('/');
      }
    },
  });
  // ============ React Query ============ //

  useEffect(() => {
    if (selectTeamSeq) {
      refetch();
    }
  }, [selectTeamSeq]);

  return (
    <>
      <PageTitle title={'설정'} />
      <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0 40px 20px 40px' }}>
        <div css={teamNameBoxStyle}>
          <span css={heading3_bold}>{selectTeamList ? selectTeamList?.teamNm : ''}</span>
        </div>
        <SettingCard
          onClick={showModalFun}
          name={'teamNameModify'}
          title={'팀 이름'}
          content={selectTeamList ? selectTeamList?.teamNm : ''}
          btnText={'팀 명 수정하기'}
          showBtn={true}
        />
        <SettingCard
          title={'프로덕트'}
          content={
            productData?.data?.length === 0
              ? '프러덕트 없음'
              : productData?.data?.length > 1
              ? `${productData?.data[0]?.productNm} 외 ${productData?.data?.length - 1}개`
              : productData?.data[0]?.productNm
          }
          btnText={'프로덕트 관리하기'}
          showBtn={true}
          // style={{ marginTop: '100px' }}
          onClick={productData?.data?.length === 0 ? showModalFun : () => router.push('/admin/setting/detail')}
          name={'createTeamProduct'}
        />
        <SettingCard title={'팀 생성일'} content={selectTeamList ? selectTeamList?.createDt : '----.--.--'} />
      </FlexBox>
    </>
  );
};

export default TeamSetting;

const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;
