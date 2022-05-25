import React, { Fragment } from 'react';
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import FlexBox from '../../atoms/FlexBox';
import Icon from '../../atoms/Icon';
import { caption1_bold, caption1_regular } from '../../../styles/FontStyles';
import IconTextButtonStories from '../../../stories/atoms/Button/IconTextButton.stories';
import IconTextButton from '../../atoms/Button/IconTextButton';

interface PropsType {
  textArr: string[];
}

const MoreTeamInfoPopup = ({ textArr }: PropsType) => {
  return (
    <FlexBox direction={'column'} justify={'flex-start'} align={'flex-start'} style={mainContainer}>
      <FlexBox justify={'space-between'} align={'center'} style={{ marginBottom: '8px' }}>
        <span css={[caption1_bold, { color: '#666666' }]}>팀에 대해 더 알려주세요.</span>
        <Icon name={'NAVIGATION_CLOSE_SM'} size={24} style={{ cursor: 'pointer' }} />
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
      <div css={{ marginTop: '50px' }}>
        <IconTextButton name={'NAVIGATION_CHEVRON_RIGHT'} textStyle={'custom'} text={'팀 정보 입력하기'} />
      </div>
    </FlexBox>
  );
};

export default MoreTeamInfoPopup;

const mainContainer = css`
  width: 208px;
  border-radius: 16px;
  background: ${colors.grey._f7};
  padding: 16px 8px 16px 16px;
`;
