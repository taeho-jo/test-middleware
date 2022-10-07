import React, { useEffect, useRef, useState } from 'react';
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
  selectQuestion: { nextQuestionSeq: number; options: string[]; optionsSeq: number[]; question: string; questionSeq: number; subjective: string }[];
}
const RecommendationStep = ({ questionInfo, selectQuestion, setSelectQuestion, setNextStep }: PropsType) => {
  const [currentOptionsList, setCurrentOptionsList] = useState(null);

  const [isSubjective, setIsSubjective] = useState(false);
  const [subjective, setSubjective] = useState('');
  const inputRef = useRef(null);

  const handleSelectQuestion = (e, value, questionInfo) => {
    e.stopPropagation();
    e.preventDefault();
    const { questionSeq, question, questionType } = questionInfo;
    const { nextQuestionSeq, options, optionsSeq, relationOptionsSeq, relationQuestionSeq, sortNumber } = value;

    if (isSubjective && subjective !== '') {
      inputRef.current.focus();
    } else {
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
        if (questionSeq === 1) {
          setSelectQuestion([sendObject]);
        } else {
          if (checkArr.length === 0) {
            setSelectQuestion([...selectQuestion, sendObject]);
          } else {
            setSelectQuestion([...filterArr, sendObject]);
          }
        }
      } else {
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
        if (questionSeq === 1) {
          if (checkArr.length === 0) {
            setSelectQuestion([sendObject]);
          } else {
            const originObj = checkArr[0];
            originObj.optionsSeq.push(sendObject.optionsSeq[0]);
            originObj.options.push(sendObject.options[0]);

            setSelectQuestion([originObj]);
          }
        } else {
          if (checkArr.length === 0) {
            setSelectQuestion([...selectQuestion, sendObject]);
          } else {
            const originObj = checkArr[0];

            const optionSeqCheckArr = originObj.optionsSeq.includes(sendObject.optionsSeq[0]);
            const optionSeqFilterArr = originObj.optionsSeq.filter(el => el !== sendObject.optionsSeq[0]);
            const optionsFilterArr = originObj.options?.filter(el => el !== sendObject.options[0]);

            if (optionSeqCheckArr) {
              originObj.optionsSeq = optionSeqFilterArr;
              originObj.options = optionsFilterArr;
            } else {
              originObj.optionsSeq.push(sendObject.optionsSeq[0]);
              originObj.options.push(sendObject.options[0]);
            }

            if (originObj.optionsSeq.length === 0) {
              setSelectQuestion([...filterArr]);
            } else {
              setSelectQuestion([...filterArr, originObj]);
            }
          }
        }
      }
    }
  };

  const handleUpdateValue = e => {
    e.stopPropagation();
    e.preventDefault();
    setSubjective(e.target.value);
  };

  const handleUpdateQuestionArr = value => {
    const obj = selectQuestion.filter(el => el.questionSeq === 4)[0];
    const filterArr = selectQuestion.filter(el => el.questionSeq !== 4);

    const sendObject = {
      ...obj,
      subjective: value,
    };
    setSelectQuestion([...filterArr, sendObject]);
  };

  useEffect(() => {
    if (selectQuestion.length === 4) {
      const arr = selectQuestion.filter(el => el.questionSeq === 4);
      if (arr[0].optionsSeq.includes(16)) {
        setIsSubjective(true);
      } else {
        setIsSubjective(false);
      }
    } else {
      setIsSubjective(false);
    }
  }, [selectQuestion]);

  useEffect(() => {
    if (questionInfo) {
      const copyArr = [...questionInfo.optionsData];
      const sortArr = copyArr?.sort(function (a, b) {
        return a.sortNumber - b.sortNumber;
      });
      setCurrentOptionsList(sortArr);
    }
  }, [questionInfo]);

  useEffect(() => {
    if (isSubjective && inputRef) {
      inputRef.current.focus();
    }
  }, [isSubjective]);
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
          return (
            <div
              key={item.options}
              css={questionItem(questionIsSelected.includes(item.options))}
              onClick={e => handleSelectQuestion(e, item, questionInfo)}
            >
              <span
                css={css`
                  cursor: pointer;
                `}
              >
                {item.options}
              </span>
              {item.options === '기타 (직접응답)' && isSubjective && (
                <input
                  onBlur={() => handleUpdateQuestionArr(subjective)}
                  onChange={e => handleUpdateValue(e)}
                  ref={inputRef}
                  placeholder={'텍스트를 입력해주세요'}
                  css={inputStyle}
                />
              )}
            </div>
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

const inputStyle = css`
  border: none;
  color: ${colors.grey._cc};
  background: ${colors.grey._3c};
  margin-left: 10px;
  &::placeholder {
    color: ${colors.grey._cc};
  }
  &:focus {
    border: none;
    outline: none;
    border-bottom: 1px solid ${colors.grey._cc};
  }
`;
