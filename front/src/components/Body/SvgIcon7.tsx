import { memo, SVGProps } from 'react';

const SvgIcon7 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1 2.52016C1 2.31053 1.24249 2.19399 1.40618 2.32494L5.756 5.8048C5.8811 5.90485 5.8811 6.09515 5.756 6.1952L1.40618 9.67505C1.24249 9.806 1 9.68945 1 9.47985V2.52016Z'
      fill='#18191B'
    />
    <path
      d='M6 2.52016C6 2.31053 6.2425 2.19399 6.40615 2.32494L10.756 5.8048C10.8811 5.90485 10.8811 6.09515 10.756 6.1952L6.40615 9.67505C6.2425 9.806 6 9.68945 6 9.47985V2.52016Z'
      fill='#18191B'
    />
  </svg>
);

const Memo = memo(SvgIcon7);
export { Memo as SvgIcon7 };
