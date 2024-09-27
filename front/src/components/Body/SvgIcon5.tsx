import { memo, SVGProps } from 'react';

const SvgIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M11 9.47985C11 9.68945 10.7575 9.806 10.5939 9.67505L6.244 6.1952C6.1189 6.09515 6.1189 5.90485 6.244 5.8048L10.5939 2.32494C10.7575 2.19399 11 2.31053 11 2.52016V9.47985Z'
      fill='#18191B'
    />
    <path
      d='M6 9.47985C6 9.68945 5.7575 9.806 5.59385 9.67505L1.24402 6.1952C1.11892 6.09515 1.11892 5.90485 1.24402 5.8048L5.59385 2.32494C5.7575 2.19399 6 2.31053 6 2.52016V9.47985Z'
      fill='#18191B'
    />
  </svg>
);

const Memo = memo(SvgIcon5);
export { Memo as SvgIcon5 };
