import React, { Fragment, useCallback, useEffect, useState } from 'react';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_medium, caption1_bold, heading5_bold } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const TestResults = ({ dataList, missionList, changeClicked, clicked }) => {
  const [intentList, setIntentList] = useState([]);
  const [selectIntent, setSelectIntent] = useState<number | null>(null);
  const [detailSelectIntent, setDetailSelectIntent] = useState(null);
  const [text, setText] = useState('');

  const handleSelectIntent = useCallback(
    (e, index) => {
      console.log(index);

      setDetailSelectIntent(null);
      setSelectIntent(index);
      changeClicked('');
    },
    [changeClicked, clicked],
  );

  useEffect(() => {
    if (clicked === 'one') {
      setSelectIntent(null);
      setDetailSelectIntent(null);
    }
  }, [clicked]);

  const handleDetailSelectIntent = useCallback(index => {
    setSelectIntent(null);
    setDetailSelectIntent(index);
  }, []);

  useEffect(() => {
    if (dataList) {
      const newArr = [{ name: '리포트 전체 요약' }, ...dataList];
      setIntentList(newArr);
    }
  }, [dataList, missionList]);
  console.log(intentList, ':::::intentList');
  return (
    <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={testInfoBoxStyle}>
      <span css={heading5_bold}>테스트 결과</span>
      {intentList?.map((el, index) => {
        return (
          <>
            <Fragment key={index}>
              <a
                style={{ width: '100%', textDecoration: 'none' }}
                href={el.detail ? `#${el.name}` : el.code ? `#${el.code}` : `#${el.name}`}
                // href={'#리포트 전체 요약'}
              >
                <FlexBox
                  direction={'column'}
                  align={'flex-start'}
                  justify={'flex-start'}
                  style={selectIntent === index ? infoBox : infoBox2}
                  // setSelectIntent={setSelectIntent}
                  onClick={e => handleSelectIntent(e, index)}
                >
                  <div css={[body3_medium, { height: 'auto', cursor: 'pointer' }]}>
                    {el.detail ? (
                      <>
                        <span>Task {index}</span>
                        <br />
                      </>
                    ) : null}
                    <span css={{ color: colors.grey._3c, wordBreak: 'keep-all' }}>{el.name}</span>
                  </div>
                </FlexBox>
              </a>
            </Fragment>
            {el.detail?.map((item, idx) => {
              const splitData = item.name.split('-');
              const id = splitData[1].trim();
              return (
                <Fragment key={idx}>
                  <a style={{ width: '100%', textDecoration: 'none' }} href={`#기능-${id}`}>
                    <FlexBox
                      direction={'column'}
                      align={'flex-start'}
                      justify={'flex-start'}
                      style={detailSelectIntent === `${index}-${idx}` ? infoBox : infoBox2}
                      setSelectIntent={setSelectIntent}
                      onClick={() => handleDetailSelectIntent(`${index}-${idx}`)}
                    >
                      <div css={[body3_medium, { height: 'auto', cursor: 'pointer' }]}>
                        {item.title ? (
                          <>
                            <span>{item.title}</span>
                            <br />
                          </>
                        ) : null}
                        <span css={{ color: colors.grey._3c, wordBreak: 'keep-all' }}>{item.name}</span>
                      </div>
                    </FlexBox>
                  </a>
                </Fragment>
              );
            })}
          </>
        );
      })}
    </FlexBox>
  );
};

export default TestResults;

const testInfoBoxStyle = css`
  padding: 32px 24px 16px 24px;
`;
const infoBox = css`
  background: ${colors.white};
  border: 2px solid ${colors.blue._500};
  border-radius: 16px;
  margin: 8px 0;
  padding: 16px;
  height: auto;
`;
const infoBox2 = css`
  background: ${colors.white};
  border: 1px solid ${colors.grey._3c};
  border-radius: 16px;
  margin: 8px 0;
  padding: 16px;
  height: auto;
`;
