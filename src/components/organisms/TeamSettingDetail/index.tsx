import React, { Fragment, useCallback } from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import SettingCard from '../../atoms/SettingCard';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';
import { css } from '@emotion/react';
import { fetchProductListApi } from '../../../api/teamApi';
import Icon from '../../atoms/Icon';
import { useRouter } from 'next/router';
import { updateSelectProductList } from '../../../store/reducers/teamReducer';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { fetchRefreshToken } from '../../../api/authApi';

const TeamSettingDetail = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const router = useRouter();
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);

  const showModalFun = useCallback((name, item) => {
    dispatch(isShow({ isShow: true, type: name }));
    if (item) {
      dispatch(updateSelectProductList(item));
    }
  }, []);

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

  return (
    <>
      <PageTitle title={'설정'} />
      <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0 40px 20px 40px' }}>
        <FlexBox style={teamNameBoxStyle} justify={'flex-start'} align={'center'}>
          <Icon name={'NAVIGATION_ARROW_LEFT'} onClick={() => router.push('/admin/setting')} style={{ cursor: 'pointer' }} />
          <span css={[heading3_bold, { marginLeft: '10px' }]}>{selectTeamList ? selectTeamList?.teamNm : ''}</span>
        </FlexBox>
        {productData?.data.map((el, index) => {
          const { planetType, productNm, productSeq, revenueModelType, serviceType, teamSeq } = el;
          return (
            <Fragment key={index}>
              <SettingCard
                title={`프로덕트${index + 1}`}
                content={productNm}
                btnText={'프로덕트 수정하기'}
                showBtn={true}
                onClick={name => showModalFun(name, el)}
                name={'modifyTeamProduct'}
              />
            </Fragment>
          );
        })}
        {/*<SettingCard*/}
        {/*  title={'프로덕트'}*/}
        {/*  content={productList?.data?.data.length === 0 ? '프러덕트 없음' : productList?.data?.data[0].productSeq}*/}
        {/*  btnText={'프로턱트 관리하기'}*/}
        {/*  showBtn={true}*/}
        {/*  onClick={productList?.data?.data.length === 0 ? showModalFun : () => console.log('이동할듯?')}*/}
        {/*  name={'createTeamProduct'}*/}
        {/*/>*/}
      </FlexBox>
    </>
  );
};

export default TeamSettingDetail;
const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;
