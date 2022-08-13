import React, { useCallback, useEffect, useState } from 'react';
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

  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const localSelectTeamSeq = localStorage.getItem('teamSeq');
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const localSelectTeamList = JSON.parse(localStorage.getItem('selectTeamList'));

  const teamSeq = selectTeamSeq ? selectTeamSeq : localSelectTeamSeq;
  const teamList = selectTeamList ? selectTeamList : localSelectTeamList;

  const [myRole, setMyRole] = useState<string | null>(null);

  useEffect(() => {
    if (userInfo && selectTeamList) {
      const memberArr = selectTeamList?.teamMember;
      const myRole = memberArr?.filter(el => el.userId === userInfo.userId)?.[0]?.teamRoleType;
      setMyRole(myRole);
    }
  }, [userInfo, selectTeamList]);

  useEffect(() => {
    if (router.query?.create) {
      dispatch(isShow({ isShow: true, type: `${router.query?.create}` }));
    }
  }, [router.query.create]);

  // ============ React Query ============ //
  const { data: productData, refetch } = useQuery(['fetchProductList', teamSeq], () => fetchProductListApi(teamSeq), {
    enabled: !!teamSeq,
    onError: (e: any) => {
      const errorData = e.response.data;
      if (errorData.code === 'E0008') {
        queryClient.setQueryData(['fetchRefreshToken'], fetchRefreshToken);
        queryClient.invalidateQueries(['fetchProductList', teamSeq]);
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
          <span css={heading3_bold}>{teamList ? teamList?.teamNm : ''}</span>
        </div>
        <SettingCard
          onClick={showModalFun}
          name={'teamNameModify'}
          title={'팀 이름'}
          content={teamList ? teamList?.teamNm : ''}
          btnText={'팀 명 수정하기'}
          showBtn={myRole === '멤버' ? false : true}
        />
        <SettingCard
          title={'프로덕트'}
          content={
            productData?.data?.length === 0
              ? '프로덕트 없음'
              : productData?.data?.length > 1
              ? `${productData?.data[0]?.productNm} 외 ${productData?.data?.length - 1}개`
              : productData?.data[0]?.productNm
          }
          btnText={'프로덕트 관리하기'}
          showBtn={myRole === '멤버' ? false : true}
          // style={{ marginTop: '100px' }}
          onClick={productData?.data?.length === 0 ? showModalFun : () => router.push('/admin/setting/detail')}
          name={'createTeamProduct'}
        />
        <SettingCard title={'팀 생성일'} content={teamList ? teamList?.createDt : '----.--.--'} />
      </FlexBox>
    </>
  );
};

export default TeamSetting;

const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;
