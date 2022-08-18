import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react';
import FlexBox from '../../FlexBox';
import { css } from '@emotion/react';
import { body3_medium, caption1_bold, heading5_bold } from '../../../../styles/FontStyles';
import { colors } from '../../../../styles/Common.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ReducerType } from '../../../../store/reducers';
import useOnScreen from '../../../../hooks/useOnScreen';
import { updateIndexId, updateTotalIndexList } from '../../../../store/reducers/reportReducer';

const TestResults = ({ dataList, missionList, changeClicked, clicked }) => {
  const dispatch = useDispatch();
  const [intentList, setIntentList] = useState([]);
  const [selectIntent, setSelectIntent] = useState<number | null>(null);
  const [detailSelectIntent, setDetailSelectIntent] = useState(null);

  const s1Data = useSelector<ReducerType, any>(state => state.report?.data?.S1);
  const longData = useSelector<ReducerType, any>(state => state.report?.data?.longQuestionList);
  const multipleData = useSelector<ReducerType, any>(state => state.report?.data?.multipleQuestionList);
  const showingSectionId = useSelector<ReducerType, any>(state => state.report?.indexId);

  const handleSelectIntent = useCallback(
    (e, index) => {
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

  const filterTotalIndexList = arr => {
    const totalIndexList = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]?.detail) {
        totalIndexList.push(arr[i]?.name);
        for (let j = 0; j < arr[i].detail.length; j++) {
          if (arr[i].detail[j]?.name) {
            const aa = arr[i]?.detail[j]?.name;
            const splitData = aa.split('-');
            const id = splitData[1].trim();
            totalIndexList.push(`기능-${id}`);
          }
        }
      } else {
        if (arr[i]?.code) {
          totalIndexList.push(arr[i]?.code);
        } else {
          totalIndexList.push(arr[i]?.name);
        }
      }
    }
    dispatch(updateTotalIndexList(totalIndexList));
  };

  useEffect(() => {
    if (dataList) {
      const missionArr = dataList.filter(el => el.code.includes('S1M'));

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
      const otherArr = [...newMultipleArr];

      const otherArr2 = [
        { name: '서비스 전체 사용성 평가' },
        { name: '서비스 전체 완성도 피드백' },
        { name: '서비스 전체 추가기능 피드백' },
        { name: '서비스 전체 시스템오류 피드백' },
      ];

      if (s1Data) {
        const newArr = [{ name: 'UI 진단 전체 요약' }, ...missionArr, ...otherArr2, ...otherArr, ...newLongArr];

        filterTotalIndexList([{ name: 'one' }, ...newArr]);
        setIntentList(newArr);
      } else {
        const newArr = [...missionArr, ...otherArr, ...newLongArr];

        filterTotalIndexList([{ name: 'one' }, ...newArr]);
        setIntentList(newArr);
      }
    }
  }, [dataList, missionList, multipleData]);

  const onMoveScroll = id => {
    const element = document.getElementById(id);
    dispatch(updateIndexId(id));
    element?.scrollIntoView({});
  };

  useEffect(() => {
    console.log(showingSectionId, 'showingSectionId');
  }, [showingSectionId]);

  return (
    <div css={testInfoBoxStyle}>
      <span css={heading5_bold}>테스트 결과</span>
      {intentList?.map((el, index) => {
        return (
          <Fragment key={`${el.name}-${index}`}>
            <div
              id={el.detail ? `${el.name}-index` : el.code ? `${el.code}-index` : `${el.name}-index`}
              style={{ width: '100%', textDecoration: 'none', margin: '8px 0', cursor: 'pointer' }}
              onClick={() => onMoveScroll(el.detail ? `${el.name}` : el.code ? `${el.code}` : `${el.name}`)}
            >
              <FlexBox
                direction={'column'}
                align={'flex-start'}
                justify={'flex-start'}
                style={showingSectionId === el.name || showingSectionId === el.code ? infoBox : infoBox2}
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
            </div>
            {el.detail?.map((item, idx) => {
              const splitData = item.name.split('-');
              const id = splitData[1].trim();

              return (
                <Fragment key={item.name}>
                  <div
                    id={`${el.name}-기능-${id}-index`}
                    onClick={() => onMoveScroll(`${el.name}-기능-${id}`)}
                    style={{ width: '100%', textDecoration: 'none', margin: '8px 0', cursor: 'pointer' }}
                  >
                    <FlexBox
                      direction={'column'}
                      align={'flex-start'}
                      justify={'flex-start'}
                      style={showingSectionId === `${el.name}-기능-${id}` ? infoBox : infoBox2}
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
                  </div>
                </Fragment>
              );
            })}
          </Fragment>
        );
      })}
    </div>
  );
};

export default TestResults;

const testInfoBoxStyle = css`
  padding: 32px 24px 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
