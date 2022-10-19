import React from 'react';
import { heading5_bold } from '../../../styles/FontStyles';
import { css } from '@emotion/react';

interface PropsType {
  index?: number;
  title: string;
  link: string;
  backgroundColor: string;
  color: string;
  image?: string | null;
  hoverImage?: string | null;
  modalType?: string;
  onClick?: (string) => void;
}

const ResearchModuleButton = ({ index, title, link, backgroundColor, color, image, hoverImage, modalType, onClick }: PropsType) => {
  return (
    <div key={index} onClick={() => onClick(modalType)} css={researchBox(backgroundColor, color, image, hoverImage)}>
      <span css={[heading5_bold, { color: color }]}>{title}</span>
      {index !== 0 && <div className="module" css={iconContainer(image)} />}
    </div>
  );
};

export default ResearchModuleButton;

const researchBox = (backgroundColor, color, image, hoverImage) => css`
  position: relative;
  width: 240px;
  min-width: 220px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 8px;
  cursor: pointer;
  white-space: nowrap;
  padding: ${image ? '16px 30px' : '0px'};
  background-color: ${backgroundColor};
  ${image
    ? `
    display: flex;
    justify-content: space-between;
    align-items: center;
  `
    : ``}
  :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    .module {
      background-image: url('${hoverImage?.src}');
    }
  }
`;
const iconContainer = image => css`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url('${image.src}');
`;
const absoluteTextStyle = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  line-height: 79px;
  font-weight: 700;
  //z-index: 1;
  opacity: 0.3;
  color: white;
`;
