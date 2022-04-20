import { css } from '@emotion/react';

const reset = (popupShow, isAdmin) => css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  $aos-distance: 30px;

  :root {
    --gradient: linear-gradient(93.75deg, #a8ff69 8.23%, #24e1d5 35.57%, #2878f0 62.91%, #7b3ce9 91.55%);
  }
  * {
    //box-sizing: border-box;
    box-sizing: ${isAdmin ? 'border-box' : 'unset'};
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR',
      'Malgun Gothic', sans-serif;
  }
  * {
    html,
    body {
      padding: 0;
      margin: 0;
      width: 100%;
      overflow: ${popupShow || isAdmin ? 'hidden' : 'auto'};
      //min-width: 1440px;
      //height: 100%;
    }
    /* 공통셋팅 */
    a {
      text-decoration: none;
      color: #000000;
    }
    ul,
    ol {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    img {
      border: none;
      /* 이미지 링크시 테두리없앰 */
    }
    h1,
    h2,
    h3 {
      margin: 0;
      padding: 0;
      font-size: 100%;
    }
    ,
    .supah-scroll {
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
      will-change: transform;
      overflow: hidden;
    }
    img {
      object-fit: contain;
    }

    p,
    span {
      // color: ${isAdmin ? '#3c3c46' : ''};
    }

    #gradient-canvas {
      --gradient-color-1: #3c3c46;
      --gradient-color-2: #3d2f4d;
      --gradient-color-3: #2d2d3f;
      --gradient-color-4: #1f3c3f;
    }

    .gradient-title {
      background: var(--gradient);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .gradient-title::after {
      content: '\\00a0';
      background-image: var(--gradient);
      background-size: 100% 12px;
      background-repeat: no-repeat;
      float: left;
      width: 100%;
      height: 3px;
      margin-top: 0px;
      margin-bottom: 6px;
    }

    .fade-enter {
      opacity: 0;
    }

    .fade-enter-active {
      opacity: 1;
      transition: all 300ms ease;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit-active {
      opacity: 0;
      transition: all 200ms ease;
    }

    .box-shadow-active {
      border-radius: 8px;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
      transition: all 500ms ease;
    }

    .slick-box {
      height: 308px;
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
      border-radius: 8px;
    }

    .slick-dots {
      bottom: 15px !important;
    }

    .slick-dots li,
    .slick-dots li button {
      width: 24px !important;
      padding: 0px;
      background-color: #7b3ce9;
      opacity: 0.5;
    }

    .slick-active {
      opacity: 1 !important;
    }

    .slick-dots li button::before {
      display: none;
    }

    @media only screen and (min-width: 360px) {
      .slick-box,
      .slick-slide div {
        height: calc(100vw - 64px + 250px);
      }

      .slick-dots li,
      .slick-dots li button {
        height: 2px !important;
      }
    }

    @media only screen and (min-width: 768px) {
      .slick-box,
      .slick-slide div {
        height: 308px;
      }

      .slick-dots li,
      .slick-dots li button {
        height: 4px !important;
      }
    }

    @media only screen and (min-width: 1280px) {
    }

    @media only screen and (min-width: 1920px) {
    }
  }
`;

export default reset;
