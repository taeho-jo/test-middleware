import { css } from '@emotion/react';

const reset = css`
  * {
    html,
    body,
    div,
    span,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    abbr,
    address,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    input,
    ins,
    kbd,
    q,
    samp,
    small,
    strong,
    sub,
    sup,
    var,
    b,
    i,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section,
    summary,
    time,
    mark,
    audio,
    video {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
      display: block;
    }
    ul,
    ol {
      list-style: none;
    }
    ul::after,
    ol::after,
    .clb::after {
      content: '';
      display: block;
      clear: both;
    }
    img {
      border: none;
    }
    html {
      font-size: 10px;
    }
    html,
    body {
      padding: 0;
      width: 100%;
      height: 100%;
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
  }
`;

export default reset;
