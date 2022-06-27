import React from 'react';
import PopupBox from '../../atoms/PopupBox';
import ModalTitle from '../../molecules/ModalTitle';
import FlexBox from '../../atoms/FlexBox';
import { body2_regular, body3_regular } from '../../../styles/FontStyles';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../store/reducers';
import { colors } from '../../../styles/Common.styles';

const OriginDataModal = () => {
  const rawData = useSelector<ReducerType, any>(state => state.report.rawData);

  return (
    <FlexBox style={{ marginTop: '160px' }} justify={'center'} direction={'column'}>
      <PopupBox padding={'0 0 24px 0'} width={'900px'} height={'auto'}>
        <ModalTitle title={rawData.title} titleStyle={{ fontSize: '18px', fontWeight: 700 }} />
        <ul css={{ height: '522px', overflow: 'scroll', background: colors.grey._f7, padding: '32px 32px 0' }}>
          {rawData?.data?.length === 0 ? (
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
            >
              원본 데이터가 없습니다.
            </li>
          ) : (
            rawData?.data?.map((el, index) => {
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
