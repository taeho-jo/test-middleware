import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { body3_bold, body3_regular, caption1_bold, caption1_regular, heading5_bold } from '../../../../styles/FontStyles';
import FlexBox from '../../FlexBox';
import { colors } from '../../../../styles/Common.styles';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { ReducerType } from '../../../../store/reducers';
import { useRouter } from 'next/router';

const data = [
  { value: '성별', children: [] },
  { value: '연령대', children: [] },
  { value: '보유 기기', children: [] },
  {
    value: '추가 조건',
    children: [
      { value: '중고차 구매자', children: [] },
      { value: '중고차 판매자', children: [] },
    ],
  },
];

const RespondentAttributes = ({ changeClicked, clicked }) => {
  const answerInfo = useSelector<ReducerType, any>(state => state.report.data);
  const [dataArr, setDataArr] = useState([]);

  const makeAnswerArr = useCallback(() => {
    if (answerInfo) {
      const { answerInfoSection } = answerInfo;

      const answerObject1 = answerInfoSection?.genderInfoList.length !== 0 ? { value: '성별', children: [] } : null;
      const answerObject2 = answerInfoSection?.ageGradeInfoList.length !== 0 ? { value: '연령대', children: [] } : null;
      const answerObject3 = answerInfoSection?.deviceInfoList.length !== 0 ? { value: '보유 기기', children: [] } : null;
      const answerObject4 = answerInfoSection?.cellInfoList.length !== 0 ? { value: '추가 조건', children: [] } : null;

      console.log(answerObject1, answerObject4);
      const childrenArr = answerInfoSection?.cellInfoList.reduce(
        (acc, cur) =>
          acc.concat({
            value: cur.name,
          }),
        [],
      );
      console.log(childrenArr, 'CHJ');
      answerObject4?.children.push(...childrenArr);
      console.log(answerObject4, '?>?????????????????');
      if (answerObject4) {
        setDataArr([answerObject1, answerObject2, answerObject3, answerObject4]);
      } else {
        setDataArr([answerObject1, answerObject2, answerObject3]);
      }
    }
  }, [answerInfo]);

  useEffect(() => {
    makeAnswerArr();
  }, [answerInfo]);

  return (
    <FlexBox direction={'column'} align={'flex-start'} justify={'flex-start'} style={testInfoBoxStyle}>
      <span css={heading5_bold}>응답자 특성</span>
      <a style={{ width: '100%', textDecoration: 'none', margin: '8px 0' }} href={'#one'}>
        <FlexBox
          onClick={() => changeClicked('one')}
          direction={'column'}
          align={'flex-start'}
          justify={'flex-start'}
          style={clicked === 'one' ? infoBox : infoBox2}
        >
          <ul>
            {dataArr?.map((el, index) => {
              return (
                <Fragment key={index}>
                  <li css={[liStyle, body3_regular]}>{el.value}</li>
                  {el?.children.map((item, index) => {
                    return (
                      <ul key={`children-${index}`}>
                        <li css={[childrenLiStyle, caption1_regular]}>{item.value}</li>
                      </ul>
                    );
                  })}
                </Fragment>
              );
            })}
          </ul>
        </FlexBox>
      </a>
    </FlexBox>
  );
};

export default RespondentAttributes;

const testInfoBoxStyle = css`
  padding: 32px 24px 16px 24px;
`;
const infoBox = css`
  background: ${colors.white};
  border: 2px solid ${colors.blue._500};
  border-radius: 16px;
  //margin-top: 8px;
  padding: 16px;
`;
const infoBox2 = css`
  background: ${colors.white};
  border: 1px solid ${colors.grey._3c};
  border-radius: 16px;
  //margin: 8px 0;
  padding: 16px;
  height: auto;
`;
const liStyle = css`
  list-style: inside;
  margin-bottom: 8px;
`;
const childrenLiStyle = css`
  list-style: inside;
  margin-left: 10px;
  margin-bottom: 4px;
`;