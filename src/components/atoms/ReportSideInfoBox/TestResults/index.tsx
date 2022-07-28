import React, { Fragment, useCallback, useEffect, useState } from 'react';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_medium, caption1_bold, heading5_bold } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReducerType } from '../../../../store/reducers';

const TestResults = ({ dataList, missionList, changeClicked, clicked }) => {
  const [intentList, setIntentList] = useState([]);
  const [selectIntent, setSelectIntent] = useState<number | null>(null);
  const [detailSelectIntent, setDetailSelectIntent] = useState(null);

  const s1Data = useSelector<ReducerType, any>(state => state.report?.data?.S1);
  const longData = useSelector<ReducerType, any>(state => state.report?.data?.longQuestionList);
  const multipleData = useSelector<ReducerType, any>(state => state.report?.data?.multipleQuestionList);

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
      const missionArr = dataList.filter(el => el.code.includes('S1M'));

      // console.log(missionArr, 'MISSIONARR');

      const newMultipleArr = multipleData?.reduce(
        (acc, cur) =>
          acc.concat({
            code: cur.code,
            name: cur.intent,
          }),
        [],
      );
      const newLongArr = longData?.reduce(
        (acc, cur) =>
          acc.concat({
            code: cur.questionCode,
            name: cur.intent,
          }),
        [],
      );
      console.log(newLongArr, '!');
      const otherArr = [...newMultipleArr];

      const otherArr2 = [
        { name: '서비스 전체 사용성 평가' },
        { name: '서비스 전체 완성도 피드백' },
        { name: '서비스 전체 추가기능 피드백' },
        { name: '서비스 전체 시스템오류 피드백' },
      ];
      if (s1Data) {
        const newArr = [{ name: 'UI 진단 전체 요약' }, ...missionArr, ...otherArr2, ...otherArr, ...newLongArr];
        setIntentList(newArr);
        console.log(newArr);
      } else {
        const newArr = [...missionArr, ...otherArr, ...newLongArr];
        setIntentList(newArr);
      }
      // const newArr = [{ name: 'UI 진단 전체 요약' }, ...missionArr, ...otherArr2, ...otherArr];
      // setIntentList(newArr);
    }
  }, [dataList, missionList, multipleData]);
  return (
    <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={testInfoBoxStyle}>
      <span css={heading5_bold}>테스트 결과</span>
      {intentList?.map((el, index) => {
        return (
          <>
            <Fragment key={index}>
              <a
                style={{ width: '100%', textDecoration: 'none', margin: '8px 0' }}
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
                        <span>미션 {index}.</span>
                        <br />
                      </>
                    ) : null}
                    <span css={{ color: colors.grey._3c, wordBreak: 'keep-all' }}>{el.detail ? `${el.name}의 기능별 사용성 비교` : el.name}</span>
                  </div>
                </FlexBox>
              </a>
            </Fragment>
            {el.detail?.map((item, idx) => {
              const splitData = item.name.split('-');
              const id = splitData[1].trim();

              return (
                <Fragment key={idx}>
                  <a style={{ width: '100%', textDecoration: 'none', margin: '8px 0' }} href={`#기능-${id}`}>
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
  //margin: 8px 0;
  padding: 16px;
  height: auto;
  &:hover {
    background: ${colors.grey._f7};
  }
`;
const infoBox2 = css`
  background: ${colors.white};
  border: 1px solid ${colors.grey._3c};
  border-radius: 16px;
  //margin: 8px 0;
  padding: 16px;
  height: auto;
  &:hover {
    background: ${colors.grey._f7};
  }
`;
