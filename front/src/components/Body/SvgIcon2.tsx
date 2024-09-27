import { memo, SVGProps } from 'react';

const SvgIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g opacity={0.5}>
      <path
        d='M14.7741 4.72L7.03335 12.0533L2.95927 7.97927'
        stroke='white'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
  </svg>
);

const Memo = memo(SvgIcon2);
export { Memo as SvgIcon2 };
