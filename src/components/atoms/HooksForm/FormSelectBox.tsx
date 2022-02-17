import React from 'react';
import { css } from '@emotion/react';
import { commonStyles } from '../../../styles/Common.styles';

interface PropsType {
  label: string;
  register: (name: string, RegisterOptions?) => { onChange; onBlur; name; ref };
  errors: object;
  registerOptions?: {
    [key: string]: any;
  };
  selectList: string[];
}

const FormSelectBox = ({
  label,
  registerOptions,
  register,
  errors,
  selectList,
}: PropsType) => {
  return (
    <div css={fragmentStyle}>
      <select css={selectStyle} {...register(label, registerOptions)}>
        {selectList.map((el, index) => {
          return (
            <option key={index} value={el}>
              {el}
            </option>
          );
        })}
      </select>
      {errors[label] && <p>성별을 선택해주세요.</p>}
    </div>
  );
};

export default FormSelectBox;

const fragmentStyle = css`
  margin-bottom: 10px;
`;
const selectStyle = css`
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${commonStyles.colors.b_1};
  padding: 10px 12px;
  outline: none;
`;
