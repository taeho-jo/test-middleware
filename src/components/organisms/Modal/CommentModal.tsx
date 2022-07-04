import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { body2_regular, body3_regular, heading3_bold } from '../../../styles/FontStyles';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { colors } from '../../../styles/Common.styles';

const OriginDataModal = () => {
  const commentData = useSelector<ReducerType, any>(state => state.report.commentData);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0 0 24px 0'} width={'900px'} height={'auto'}>
        <ModalTitle title={'리서치 코멘트'} titleStyle={{ fontSize: '18px', fontWeight: 700 }} />
        <ul css={{ height: '522px', overflowY: 'scroll', background: colors.grey._f7, padding: '32px 32px 0' }}>
          {commentData?.list === null || commentData?.list?.length === 0 ? (
            <li
              css={[
                heading3_bold,
                {
                  marginBottom: '16px',
                  height: 'auto',
                  listStyle: 'inside',
                  textIndent: '-20px',
                  paddingLeft: '20px',
                },
              ]}
            >
              리서치 코멘트가 없습니다.
            </li>
          ) : (
            commentData?.list?.map((el, index) => {
              return (
                <li
                  css={[
                    body3_regular,
                    {
                      marginBottom: '16px',
                      height: 'auto',
                      listStyle: 'inside',
                      textIndent: '-20px',
                      paddingLeft: '20px',
                    },
                  ]}
                  key={`rawData-${index}`}
                >
                  {el}
                </li>
              );
            })
          )}
        </ul>
      </PopupBox>
    </FlexBox>
  );
};

export default OriginDataModal;
