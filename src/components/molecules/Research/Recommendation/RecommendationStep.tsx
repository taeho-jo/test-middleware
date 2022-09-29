import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { heading2_medium, heading3_bold } from '../../../../styles/FontStyles';
import FlexBox from '../../../atoms/FlexBox';
import Icon from '../../../atoms/Icon';
import { colors } from '../../../../styles/Common.styles';
import { RecommendationQuestionListType } from '../../../../api/researchApi/types';

interface PropsType {
  questionInfo: RecommendationQuestionListType;
  setSelectQuestion: (value) => void;
  setNextStep: (value) => void;
  selectQuestion: { questionSeq: number; question: string; optionsSeq: string[]; options: string[] }[];
}
const RecommendationStep = ({ questionInfo, selectQuestion, setSelectQuestion, setNextStep }: PropsType) => {
  const [currentOptionsList, setCurrentOptionsList] = useState(null);

  const handleSelectQuestion = (value, questionInfo) => {
    setNextStep(`step${value.nextQuestionSeq}`);
    const { questionSeq, question, questionType } = questionInfo;
    const { nextQuestionSeq, options, optionsSeq, relationOptionsSeq, relationQuestionSeq, sortNumber } = value;

    if (questionType === 'SINGLE_MULTIPLE_CHOICE') {
      const sendObject = {
        questionSeq: questionSeq,
        question: question,
        nextQuestionSeq: nextQuestionSeq,
        optionsSeq: [optionsSeq],
        options: [options],
        subjective: null,
      };
      const checkArr = selectQuestion.filter(el => el.questionSeq === questionSeq);
      const filterArr = selectQuestion.filter(el => el.questionSeq !== questionSeq);
      if (checkArr.length === 0) {
        setSelectQuestion([...selectQuestion, sendObject]);
      } else {
        setSelectQuestion([...filterArr, sendObject]);
      }
    } else {
      let sendObject = {
        questionSeq: questionSeq,
        question: question,
        nextQuestionSeq: nextQuestionSeq,
        optionsSeq: [optionsSeq],
        options: [options],
        subjective: null,
      };

      const checkArr = selectQuestion.filter(el => el.questionSeq === questionSeq);
      console.log(checkArr.length, '!!');
      if (checkArr.length === 0) {
        console.log([...sendObject.options, options]);
        setSelectQuestion([...selectQuestion, sendObject]);
      } else {
        sendObject = {
          ...sendObject,
          optionsSeq: [...sendObject.optionsSeq, optionsSeq],
          options: [...sendObject.options, options],
        };
        console.log(sendObject, 'SEND');
      }
    }
  };

  useEffect(() => {
    if (questionInfo) {
      const copyArr = [...questionInfo.optionsData];
      const sortArr = copyArr?.sort(function (a, b) {
        return a.sortNumber - b.sortNumber;
      });
      setCurrentOptionsList(sortArr);
    }
  }, [questionInfo]);
  return (
    <FlexBox
      direction={'column'}
      justify={'flex-start'}
      align={'flex-start'}
      style={css`
        padding: 0 56px;
      `}
    >
      <span css={[heading2_medium, { padding: '12px 0', whiteSpace: 'pre-wrap' }]}>{questionInfo?.question}</span>
      <FlexBox
        direction={'column'}
        justify={'flex-start'}
        align={'flex-start'}
        style={css`
          margin: 24px 0 40px 16px;
        `}
      >
        {currentOptionsList?.map((item, index) => {
          const questionIsSelected = selectQuestion.map(el => el.options).flat();
          // console.log(questionIsSelected);
          return (
            <span
              key={item.options}
              css={questionItem(questionIsSelected.includes(item.options))}
              onClick={() => handleSelectQuestion(item, questionInfo)}
            >
              {item.options}
            </span>
          );
        })}
      </FlexBox>
    </FlexBox>
  );
};

export default RecommendationStep;

const questionItem = selected => css`
  border: 1px solid #cccccc;
  border-radius: 56px;
  padding: 12px 32px;
  margin-bottom: 16px;
  cursor: pointer;
  word-break: keep-all;
  background: ${selected ? colors.grey._3c : colors.white};
  color: ${selected ? colors.white : colors.grey._3c};
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    border: none;
    padding: 13px 33px;
    background: ${colors.grey._3c};
    color: white;
  }
`;

const nextButtonStyle = [
  heading3_bold,
  css`
    display: flex;
    border: none;
    background: ${colors.grey._3c};
    color: white;
    justify-content: space-between;
    align-items: center;
    padding: 10px 17px;
    border-radius: 8px;
  `,
];
