import React, { forwardRef, Fragment, useCallback, useState } from 'react';
// Components
import Icon from '../Icon';
// Styles
import { css } from '@emotion/react';
import { colors } from '../../../styles/Common.styles';
import { heading3_regular } from '../../../styles/FontStyles';
// Types
interface PropsType {
  arr: { value: string; label: string }[];
  size?: string;
  selectedValue: string;
  onClick: (value) => void;
  [key: string]: any;
}

const SelectBox = forwardRef(({ arr, size = '100%', selectedValue, onClick }: PropsType, ref) => {
  const [onFocus, setOnFocus] = useState(false);

  const onClickSelectBox = useCallback(() => {
    setOnFocus(prev => !prev);
  }, [onFocus]);

  return (
    <div style={{ position: 'relative', width: size, height: '50px' }}>
      <div css={selectBoxWrapper(onFocus)} onClick={onClickSelectBox}>
        <div css={selectBoxPlaceholder(onFocus)}>
          <span css={[heading3_regular, { color: selectedValue ? colors.grey._3c : colors.grey._cc }]}>
            {selectedValue ? selectedValue : '옵션을 선택해주세요.'}
          </span>
          <Icon name={'CHEVRON_DOWN_THIN'} size={24} />
        </div>
        <ul css={optionStyle(onFocus)}>
          {arr.map((el, index) => {
            return (
              <Fragment key={index}>
                <li onClick={() => onClick(el.value)} value={el.value} css={[heading3_regular, liContainer(el.value, selectedValue)]}>
                  {el.label}
                </li>
              </Fragment>
            );
          })}
        </ul>
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
`;
const optionStyle = onFocus => css`
  display: ${onFocus ? '' : 'none'};
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
