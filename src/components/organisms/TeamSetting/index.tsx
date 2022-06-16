import React, { useCallback, useEffect } from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import SettingCard from '../../atoms/SettingCard';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { showModal } from '../../../common/util/commonFunc';
import { isShow } from '../../../store/reducers/modalReducer';
import { useGetTeamList } from '../../../api/teamApi';
import { useGetProductsListApi } from '../../../api/teamApi';
import { useRouter } from 'next/router';
import queryStatus, { updateQueryStatus } from '../../../store/reducers/useQueryControlReducer';
import { useQueryClient } from 'react-query';

const TeamSetting = () => {
  const selectTeamList = JSON.parse(localStorage.getItem('selectTeamList'));
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const showModalFun = useCallback(name => {
    dispatch(isShow({ isShow: true, type: name }));
  }, []);

  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.teamSeq);

  // const teamListQuery = useSelector<ReducerType, boolean>(state => state.queryStatus.teamListQuery);
  //
  // // ============ API 호출 ============ //
  // const teamList = useGetTeamList(teamListQuery);
  const productList = useGetProductsListApi();
  // ============ API 호출 ============ //

  useEffect(() => {
    dispatch(updateQueryStatus({ name: 'teamListQuery', status: true }));
    queryClient.invalidateQueries(['getProductsList']);
    // productList.refetch();
    console.log(selectTeamSeq, 'TEAM SEQ');
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
          content={productList?.data?.data.length === 0 ? '프러덕트 없음' : productList?.data?.data[0].productNm}
          btnText={'프로덕트 관리하기'}
          showBtn={true}
          // style={{ marginTop: '100px' }}
          onClick={productList?.data?.data.length === 0 ? showModalFun : () => router.push('/admin/setting/detail')}
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
