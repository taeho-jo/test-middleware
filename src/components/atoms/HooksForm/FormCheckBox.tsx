import React from 'react';
import FlexBox from '../FlexBox';
import { css } from '@emotion/react';

interface PropsType {
  register: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  checkboxList: {
    name: string;
    value: string;
  }[];
  handleCheckList: (value: string) => void;
  checkedList: string[];
}

const FormCheckBox = ({
  handleCheckList,
  register,
  checkboxList,
  checkedList,
}: PropsType) => {
  return (
    <FlexBox justify={'flex-start'} padding={'10px 0'}>
      {checkboxList.map((el, index) => {
        return (
          <div css={fragmentStyle} key={index}>
            <label css={labelStyle}>
              <input
                onClick={() => handleCheckList(el.value)}
                type="checkbox"
                css={inputStyle}
                {...register(el.name)}
                name={el.name}
                value={el.value}
                checked={checkedList.includes(el.value)}
              />
              <span css={textStyle}>{el.value}</span>
            </label>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default FormCheckBox;
const fragmentStyle = css`
  margin-bottom: 10px;
  display: inline-block;
`;
const labelStyle = css`
  //width: 100%;
  //flex: 1;
`;
const inputStyle = css`
  margin-left: 15px;
`;
const textStyle = css`
  display: inline-block;
  margin-left: 5px;
`;
