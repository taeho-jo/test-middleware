import React, { Fragment, useCallback, useEffect, useState } from 'react';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_medium, caption1_bold, heading5_bold } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const data = [
  { title: '1', name: '리포트 전체 요약' },
  { title: 'Task 2', name: '일자리 지원하기 (도움 받기)' },
  { title: 'Q1', name: 'UX 리서치와 관련해서 필요한 정보를 수집하는 채널을 비중이 높은 순으로 최대 3개까지 선택해주세요.' },
  { title: 'Q1', name: 'UX 리서치와 관련해서 필요한 정보를 수집하는 채널을 비중이 높은 순으로 최대 3개까지 선택해주세요.' },
];

const TestResults = ({ dataList, missionList }) => {
  const router = useRouter();
  console.log(router, 'RouTer');
  const [intentList, setIntentList] = useState([]);
  const [selectIntent, setSelectIntent] = useState<number | null>(null);

  const handleSelectIntent = useCallback((e, index) => {
    setSelectIntent(index);
  }, []);

  useEffect(() => {
    if (dataList) {
      const newArr = [{ name: '리포트 전체 요약' }, ...missionList, ...dataList];
      setIntentList(newArr);
    }
  }, [dataList, missionList]);

  console.log(intentList, 'INTENTLIST');

  return (
    <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={testInfoBoxStyle}>
      <span css={heading5_bold}>테스트 결과</span>
      {intentList?.map((el, index) => {
        return (
          <Fragment key={index}>
            <a style={{ width: '100%', textDecoration: 'none' }} href={el.title ? `#${el.name}` : el.code ? `#${el.code}` : '#top'}>
              <FlexBox
                direction={'column'}
                align={'flex-start'}
                justify={'flex-start'}
                style={selectIntent === index ? infoBox : infoBox2}
                onClick={e => handleSelectIntent(e, index)}
              >
                <div css={[body3_medium, { height: 'auto', cursor: 'pointer' }]}>
                  {el.title ? (
                    <>
                      <span>{el.title}</span>
                      <br />
                    </>
                  ) : null}
                  {/*{index === 0 ? (*/}
                  {/*  <a css={{ textDecoration: 'none', color: colors.grey._3c }} href={'#top'} onClick={() => console.log(el.code)}>*/}
                  {/*    {el.name}*/}
                  {/*  </a>*/}
                  {/*) : (*/}
                  {/*<a css={{ textDecoration: 'none' }} href={el.title ? `#${el.name}` : el.code ? `#${el.code}` : '#top'}>*/}
                  <span css={{ color: colors.grey._3c }}>{el.name}</span>
                  {/*</a>*/}
                  {/*)}*/}
                </div>
              </FlexBox>
            </a>
          </Fragment>
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
