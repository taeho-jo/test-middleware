import React, { useState, useRef, useEffect } from 'react';
import useOutsideClick from '../../../hooks/useOutsideClick';
import { css } from '@emotion/react';
import { caption1_bold, heading3_regular } from '../../../styles/FontStyles';
import { colors } from '../../../styles/Common.styles';
import Icon from '../Icon';
type Option = {
  key?: string;
  value?: string;
  label?: string;
  displayName?: string;
};
type PropsType = {
  options: Option[];
  selectProps?: object;
  value?: string;
  error?: boolean;
  name: string;
  title?: string;
  selected?: any;
  setSelected?: any;
  onClick?: any;
  placeholder?: string;
  padding?: string;
  fontSize?: any;
  selectBoxHeight?: string;
  selectBoxMargin?: string;
  [key: string]: any;
};
const Select = ({
  options,
  selectProps,
  title,
  value,
  error = false,
  name,
  selected,
  setSelected,
  onClick,
  placeholder,
  padding,
  fontSize,
  selectBoxHeight,
  selectBoxMargin,
  ...props
}: PropsType) => {
  const [isOpen, setOpen] = useState(false);
  // const [selected, setSelected] = useState<string>();
  const selectRef = useRef(null);
  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  useEffect(() => {
    const element = document.getElementById(name);
    if (element) {
      (element as HTMLInputElement).value = selected as string;
    }
  }, [selected]);
  return (
    <>
      <select css={selectBoxStyle} {...selectProps} id={name} name={name} className="html-select">
        {options?.map(item => (
          <option key={item.value} value={item.value}>
            {item.displayName ? item.displayName : item.label}
          </option>
        ))}
      </select>

      <div
        css={selectBoxWrapper(selectBoxHeight, selectBoxMargin)}
        ref={selectRef}
        onClick={() => {
          setOpen(prev => !prev);
        }}
      >
        {title && <label css={[caption1_bold, labelTextStyle]}>{title}</label>}
        <div css={isOpen ? customSelectOpen('100%', padding) : customSelect(padding)}>
          <div css={customSelectTrigger}>
            <span css={[fontSize ? fontSize : heading3_regular, { padding: 0, color: selected[name] ? colors.grey._3c : colors.grey._cc }]}>
              {options?.find(item => item.value === selected[name])?.displayName
                ? options?.find(item => item.value === selected[name])?.displayName
                : options?.find(item => item.displayName === selected[name])?.displayName
                ? options?.find(item => item.displayName === selected[name])?.displayName
                : placeholder
                ? placeholder
                : '옵션을 선택해주세요.'}
            </span>
            <Icon name={'CHEVRON_DOWN_THIN'} size={24} />
          </div>
          <div css={isOpen ? customOptionOpen('100%') : customOptions}>
            {options?.map(item => (
              <div key={item.value} onClick={() => onClick(item.value, name, item.displayName)} css={optionContainer}>
                <span
                  css={selected[name] === item.value ? [customOptionSelected, customOption, fontSize] : [customOption, fontSize]}
                  data-value={item.value}
                >
                  {item.displayName ? item.displayName : item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;

const selectBoxStyle = css`
  display: none;
`;
const selectBoxWrapper = (selectBoxHeight, selectBoxMargin) => css`
  margin-top: ${selectBoxMargin ? selectBoxMargin : '16px'};
  position: relative;
  user-select: none;
  width: 100%;
  height: ${selectBoxHeight ? selectBoxHeight : '70px'};
`;
const customSelect = padding => css`
  //padding-right: 8px;
  position: relative;
  cursor: pointer;
  width: 100%;
  border-radius: 4px;
  border: 1px solid ${colors.grey._3c};
  padding: ${padding ? padding : '10px 16px'};
  background: white;
  :hover {
    border: 2px solid ${colors.cyan._500};
    padding: ${padding ? padding : '9px 15px'};
  }
`;
const customSelectOpen = (size, padding) => css`
  width: ${size};
  opacity: 1;
  visibility: visible;
  pointer-events: all;
  //margin-top: 8px;
  box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001), -2px 2px 5px rgba(67, 86, 100, 0.123689);
  border-radius: 4px;
  border: 2px solid ${colors.grey._3c};
  padding: ${padding ? padding : '9px 16px'};
  background: white;
  position: absolute;
  z-index: 9099;
  height: 258px;
  overflow: scroll;
  // TODO: 이건 지워야 될 수 있음
  top: ${padding ? '-20px' : 'unset'};
`;
const customOptionOpen = size => css`
  width: ${size};
  opacity: 1;
  visibility: visible;
  pointer-events: all;
  margin-top: 16px;
  //position: absolute;
  //z-index: 10;
  //background: white;
  //box-shadow: -1px 1px 2px rgba(67, 70, 74, 0.0001), -2px 2px 5px rgba(67, 86, 100, 0.123689);
  // border-radius: 4px;
  // border: 1px solid ${colors.grey._3c};
  // padding: 10px 16px;
`;
const customSelectTrigger = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
const customOptions = css`
  position: absolute;
  display: block;
  top: 100%;
  left: 0;
  right: 0;
  //transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
  padding: 8px;
  max-height: 200px;
  overflow-y: auto;
`;
const customOption = css`
  position: relative;
  display: block;
  padding: 5px 0;
  cursor: pointer;
  //transition: all 0.5s;
  border-radius: 6px;
  //margin-bottom: 12px;
  height: 32px;
`;
const optionContainer = css`
  border: solid white 0.1px;
  //background: pink;
  padding: 8px;
  :hover {
    background-color: ${colors.grey._ec};
    border-radius: 4px;
  }
`;
const customOptionSelected = css`
  color: ${colors.cyan._500};
`;
const labelTextStyle = css`
  margin-bottom: 8px;
  display: inline-block;
  color: ${colors.grey._99};
  :hover {
    .custom-option {
      cursor: pointer;
    }
  }
`;
