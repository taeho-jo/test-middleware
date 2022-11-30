import React, { Fragment, useCallback, useEffect } from 'react';
import PageTitle from '../../atoms/PageTitle';
import FlexBox from '../../atoms/FlexBox';
import { heading3_bold } from '../../../styles/FontStyles';
import SettingCard from '../../atoms/SettingCard';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';
import { css } from '@emotion/react';
import Icon from '../../atoms/Icon';
import { useRouter } from 'next/router';
import { getProductList, TeamProductType, updateSelectProductList } from '../../../store/reducers/teamReducer';
import IconTextButton from '../../atoms/Button/IconTextButton';

const TeamSettingDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const selectTeamList = useSelector<ReducerType, any>(state => state.team.selectTeamList);
  const selectTeamSeq = useSelector<ReducerType, number>(state => state.team.selectTeamSeq);
  const productList = useSelector<ReducerType, TeamProductType[]>(state => state.team.teamProductList.list);

  const showModalFun = useCallback((name, item) => {
    dispatch(isShow({ isShow: true, type: name }));
    if (item) {
      dispatch(updateSelectProductList(item));
    }
  }, []);

  useEffect(() => {
    dispatch(getProductList({ teamSeq: String(selectTeamSeq) }));
  }, []);

  return (
    <>
      <PageTitle title={'설정'} />
      <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={{ maxWidth: '800px', padding: '0 40px 20px 40px' }}>
        <FlexBox style={teamNameBoxStyle} justify={'flex-start'} align={'center'}>
          <Icon name={'NAVIGATION_ARROW_LEFT'} onClick={() => router.push('/admin/setting')} style={{ cursor: 'pointer' }} />
          <span css={[heading3_bold, { marginLeft: '10px' }]}>{selectTeamList ? selectTeamList?.teamNm : ''}</span>
        </FlexBox>
        {productList?.map((el, index) => {
          const { planetType, productNm, productSeq, revenueModelType, serviceType, teamSeq } = el;
          return (
            <Fragment key={index}>
              <SettingCard
                title={`프로덕트 ${index + 1}`}
                content={productNm}
                btnText={'프로덕트 수정하기'}
                showBtn={true}
                onClick={name => showModalFun(name, el)}
                name={'modifyTeamProduct'}
              />
            </Fragment>
          );
        })}
        <div css={addProductContainer}>
          <IconTextButton
            onClick={() => dispatch(isShow({ isShow: true, type: 'createTeamProduct' }))}
            name={'ACTION_ADD_SMALL'}
            iconPosition={'left'}
            textStyle={'custom'}
            text={'프로덕트 생성하기'}
          />
        </div>
      </FlexBox>
    </>
  );
};

export default TeamSettingDetail;
const teamNameBoxStyle = css`
  padding: 32px 0 20px 16px;
  width: 100%;
`;
const addProductContainer = css`
  margin-top: 24px;
`;
