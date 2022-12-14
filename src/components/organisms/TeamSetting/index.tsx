import React, { useCallback, useEffect, useState } from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import SettingCard from '../../atoms/SettingCard';
import { css } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';
import { useRouter } from 'next/router';
import { getProductList } from '../../../store/reducers/teamReducer';

const TeamSetting = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const showModalFun = useCallback(name => {
    dispatch(isShow({ isShow: true, type: name }));
  }, []);

  const userInfo = useSelector<ReducerType, any>(state => state.user.userInfo);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const localSelectTeamSeq = localStorage.getItem('teamSeq');
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const productList = useSelector<ReducerType, any>(state => state.team.teamProductList);
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

  useEffect(() => {
    if (selectTeamSeq) {
      dispatch(getProductList({ teamSeq: String(selectTeamSeq) }));
    }
  }, [selectTeamSeq]);

  return (
    <>
      <PageTitle title={'??????'} />
      <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0 40px 20px 40px' }}>
        <div css={teamNameBoxStyle}>
          <span css={heading3_bold}>{teamList ? teamList?.teamNm : ''}</span>
        </div>
        <SettingCard
          onClick={showModalFun}
          name={'teamNameModify'}
          title={'??? ??????'}
          content={teamList ? teamList?.teamNm : ''}
          btnText={'??? ??? ????????????'}
          showBtn={myRole === '??????' ? false : true}
        />
        <SettingCard
          title={'????????????'}
          content={
            productList?.list?.length === 0
              ? '???????????? ??????'
              : productList?.list?.length > 1
              ? `${productList?.list?.[0]?.productNm} ??? ${productList?.list?.length - 1}???`
              : productList?.list?.[0]?.productNm
          }
          btnText={'???????????? ????????????'}
          showBtn={myRole === '??????' ? false : true}
          // style={{ marginTop: '100px' }}
          onClick={productList?.list?.length === 0 ? showModalFun : () => router.push('/admin/setting/detail')}
          name={'createTeamProduct'}
        />
        <SettingCard title={'??? ?????????'} content={teamList ? teamList?.createDt : '----.--.--'} />
      </FlexBox>
    </>
  );
};

export default TeamSetting;

const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;
