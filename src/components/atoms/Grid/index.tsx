import { css } from '@emotion/react';
import { HTMLAttributes } from 'react';

const calcWidthPercent = (span: any) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

interface Props extends HTMLAttributes<HTMLDivElement> {
  container?: boolean;
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  [key: string]: any;
}

export default function Grid({
  forwardref,
  container,
  direction,
  justify,
  align,
  xs,
  sm,
  md,
  lg,
  children,
  ...props
}: Props) {
  return (
    <div
      ref={forwardref}
      css={css`
        display: ${(container || direction || justify || align) && 'flex'};
        flex-direction: ${direction && direction};
        justify-content: ${justify && justify};
        align-items: ${align && align};
        flex-wrap: wrap;
        box-sizing: border-box;
        /* flex-grow: 1; */
        /* flex-shrink: 0; */
        flex-basis: ${xs ? `${calcWidthPercent(xs)}%` : `auto`};
        max-width: ${xs ? `${calcWidthPercent(xs)}%` : `auto`};
        @media only screen and (min-width: 420px) {
          flex-basis: ${sm ? `${calcWidthPercent(sm)}%` : 'auto'};
          max-width: ${sm ? `${calcWidthPercent(sm)}%` : `auto`};
        }
        @media only screen and (min-width: 768px) {
          flex-basis: ${md ? `${calcWidthPercent(md)}%` : 'auto'};
          max-width: ${md ? `${calcWidthPercent(md)}%` : `auto`};
        }
        @media only screen and (min-width: 1024px) {
          flex-basis: ${lg ? `${calcWidthPercent(lg)}%` : 'auto'};
          max-width: ${lg ? `${calcWidthPercent(lg)}%` : `auto`};
        }
      `}
      {...props}
    >
      {children}
    </div>
  );
}
