import React, { forwardRef, Fragment, useCallback, useState } from 'react';
// Components
import Icon from '../Icon';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { caption1_bold, heading3_regular } from '../../../styles/FontStyles';
// Types
interface PropsType {
  arr: { value: string; label: string }[];
  size?: string;
  selectedValue: any;
  label: string;
  title?: string;
  onClick: (value, label) => void;
  [key: string]: any;
}

const SelectBox = forwardRef(({ arr, size = '100%', selectedValue, label, title, onClick }: PropsType, ref) => {
  const [onFocus, setOnFocus] = useState(false);

  const onClickSelectBox = useCallback(() => {
    setOnFocus(prev => !prev);
  }, [onFocus]);

  return (
    <div css={{ marginTop: '16px' }}>
      {title ? <label css={[caption1_bold, labelTextStyle]}>{title}</label> : null}
      <div style={{ position: 'relative', width: size, height: '50px' }}>
        <div css={[selectBoxWrapper(onFocus), { padding: onFocus ? '0' : '10px 16px' }]} onClick={onClickSelectBox}>
          <div css={[selectBoxPlaceholder(onFocus), { padding: onFocus ? '10px 16px' : '0' }]}>
            <span css={[heading3_regular, { padding: 0, color: selectedValue[label] ? colors.grey._3c : colors.grey._cc }]}>
              {selectedValue[label] ? selectedValue[label] : '옵션을 선택해주세요.'}
            </span>
            <Icon name={'CHEVRON_DOWN_THIN'} size={24} />
          </div>
          <ul css={optionStyle(onFocus)}>
            {arr.map((el, index) => {
              return (
                <Fragment key={index}>
                  <li
                    onClick={() => onClick(el.value, label)}
                    value={el.value}
                    css={[heading3_regular, liContainer(el.value, selectedValue), { padding: '10px 16px' }]}
                  >
                    {el.label}
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
});

SelectBox.displayName = 'SelectBox';

export default SelectBox;

const selectBoxWrapper = onFocus => css`
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid ${colors.grey._3c};
  border-radius: 4px;
  padding: 10px 16px;
  cursor: pointer;
  ${onFocus
    ? `
       border: 2px solid ${colors.grey._3c};
      padding: 9px 15px;
    `
    : `
    :hover {
      border: 2px solid ${colors.cyan._500};
      padding: 9px 15px;
    }
  `}
`;
const selectBoxPlaceholder = onFocus => css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${onFocus ? '16px' : '0'};
  //z-index: 10;
  position: relative;
`;
const optionStyle = onFocus => css`
  display: ${onFocus ? '' : 'none'};
  position: relative;
  z-index: 9999;
  background: white;
`;

const liContainer = (value, selectedValue) => css`
  height: auto;
  padding: 8px;
  margin-bottom: 4px;
  ${value === selectedValue
    ? `
    color: ${colors.cyan._500} !important;
    font-weight: 700;
  `
    : ``}
  :hover {
    background: ${colors.grey._ec};
    border-radius: 4px;
  }
`;

const labelTextStyle = css`
  margin-bottom: 8px;
  display: inline-block;
  color: ${colors.grey._99};
`;
