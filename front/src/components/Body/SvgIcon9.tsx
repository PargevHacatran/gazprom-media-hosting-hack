import { memo, SVGProps } from 'react';

const SvgIcon9 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z'
      stroke='#5C5E65'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.0003 14L11.1003 11.1'
      stroke='#5C5E65'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M7.375 5.04167V9.70833' stroke='#5C5E65' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M5.04167 7.375H9.70833' stroke='#5C5E65' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(SvgIcon9);
export { Memo as SvgIcon9 };
