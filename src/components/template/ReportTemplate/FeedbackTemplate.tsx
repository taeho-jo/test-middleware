import FlexBox from '../../atoms/FlexBox';
import { colors } from '../../../styles/Common.styles';
import { body3_regular, heading4_bold } from '../../../styles/FontStyles';
import React, { useCallback, useState } from 'react';
import { css } from '@emotion/react';

const FeedbackTemplate = ({ originDataList, type, title, register, errors, checked, handleChangeCheckBox, modalControl }) => {
  const [selectButton, setSelectButton] = useState<number>(0);

  const dataList = originDataList?.map(el => el[type]);

  const handleChangeIndex = useCallback(
    (name, index) => {
      setSelectButton(index);
    },
    [selectButton],
  );
  return (
    <FlexBox style={graphBosStyle} justify={'center'} align={'flex-start'}>
      <FlexBox style={graphAreaStyle} direction={'column'}>
        <div css={{ padding: '20px 0 12px 0', borderBottom: `1px solid ${colors.grey._3c}` }}>
          <div css={[heading4_bold]}>{originDataList?.[selectButton].name}</div>
        </div>

        <FlexBox justify={'space-between'} align={'flex-start'} style={graphContainerStyle}>
          <div css={{ flex: 1, marginRight: '16px' }}>
            {dataList?.map((el, index) => {
              return (
                <div
                  key={`missionBtn${index}`}
                  onClick={() => handleChangeIndex('complate', index)}
                  css={[{ opacity: selectButton === index ? 1 : 0.4 }, heading4_bold, buttonStyle]}
                >
                  미션 {index + 1}
                </div>
              );
            })}
          </div>
          <ul
            className={'scrollType1'}
            css={{
              background: colors.grey._f7,
              borderRadius: '8px',
              flex: 3,
              padding: '16px 24px',
              height: '400px',
              wordBreak: 'keep-all',
              // overflowY: 'scroll',
            }}
          >
            {dataList?.[selectButton]?.length === 0 ? (
              <li
                css={[
                  body3_regular,
                  {
                    // marginBottom: '16px',
                    height: 'auto',
                    listStyle: 'inside',
                    textIndent: '-20px',
                    paddingLeft: '20px',
                  },
                ]}
              >
                피드백이 없습니다.
              </li>
            ) : (
              dataList?.[selectButton].map((el, index) => {
                return (
                  <li
                    key={index}
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
                    {el}
                  </li>
                );
              })
            )}
          </ul>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
};

export default FeedbackTemplate;
const headerBosStyle = css`
  height: 64px;
  width: 100%;
  padding: 24px;
  background: white;
  border-bottom: 1px solid #dcdcdc;
  position: sticky;
  top: 0;
  z-index: 500;
`;
const graphBosStyle = css`
  width: 100%;
`;
const graphAreaStyle = css`
  //border-left: 1px solid #dcdcdc;
  //border-right: 1px solid #dcdcdc;
  min-width: 900px;
  max-width: 900px;
  height: auto;
  padding-top: 40px;
`;
const graphContainerStyle = css`
  padding: 36px 80px 80px;
  width: 100%;
  //border-bottom: 1px solid #dcdcdc;
`;
const buttonStyle = css`
  height: auto;
  color: white;
  text-align: center;
  background: #68a0f4;
  padding: 14px 55px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;
const sortationArea = css`
  width: 100%;
  height: 16px;
  background: #dcdcdc;
`;
const reportHeader = css`
  //background: pink;
  @media (max-width: 1440px) {
    //background: plum;
    flex-direction: column;
    align-items: flex-start;
    .title {
      margin-bottom: 10px;
    }
  }
`;
