import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { caption1_bold, caption1_regular } from '../../../styles/FontStyles';
import IconTextButtonStories from '../../../stories/atoms/Button/IconTextButton.stories';
import IconTextButton from '../../atoms/Button/IconTextButton';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { isShow } from '../../../store/reducers/modalReducer';

interface PropsType {
  textArr: string[];
  handleOffInfoBox?: () => void;
}

const MoreTeamInfoPopup = ({ textArr, handleOffInfoBox }: PropsType) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedTeamInfo = useSelector<ReducerType, any>(state => state.team.selectTeamList);

  const createProduct = () => {
    if (router.pathname === '/admin/setting') {
      dispatch(isShow({ isShow: true, type: 'createTeamProduct' }));
    } else {
      router.push('/admin/setting?create=createTeamProduct');
    }

    // dispatch(isShow({ isShow: true, type: 'createTeamProduct' }));
  };

  return (
    <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={mainContainer}>
      <FlexBox direction={'column'} justify={'space-between'} align={'flex-start'} style={{ marginBottom: '8px' }}>
        <span css={[caption1_bold, { color: '#666666', height: 'auto', whiteSpace: 'pre-line' }]}>{selectedTeamInfo?.teamNm}팀의</span>
        <span css={[caption1_bold, { color: '#666666', height: 'auto', whiteSpace: 'pre-line' }]}>프로덕트 정보를 알려주세요.</span>
      </FlexBox>
      <div css={caption1_regular}>
        {textArr?.map((el, index) => {
          return (
            <Fragment key={index}>
              <div css={{ marginBottom: textArr.length === index + 1 ? '0' : '10px' }}>{el}</div>
            </Fragment>
          );
        })}
      </div>
      <div css={{ marginTop: '60px' }}>
        <IconTextButton
          whiteSpace={'unset'}
          onClick={createProduct}
          name={'NAVIGATION_CHEVRON_RIGHT'}
          fontSize={'12px'}
          textStyle={'custom'}
          text={'프로덕트 정보 입력하기'}
        />
      </div>
    </FlexBox>
  );
};

export default MoreTeamInfoPopup;

const mainContainer = css`
  width: 208px;
  border-radius: 16px;
  background: ${colors.grey._f7};
  padding: 16px;
`;
