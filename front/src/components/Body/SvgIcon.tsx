import { memo, SVGProps } from 'react';

const SvgIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.58609 7.38306C1.96553 7.72823 0.75 9.16785 0.75 10.8913C0.75 12.8723 2.35594 14.4782 4.33696 14.4782H10.875M7.125 3.78644C7.8663 3.28973 8.75805 3 9.71738 3C12.2927 3 14.3804 5.08771 14.3804 7.66305C14.3804 8.03438 14.337 8.39558 14.255 8.74185C14.2966 8.74005 14.3384 8.73915 14.3804 8.73915C15.9653 8.73915 17.25 10.0239 17.25 11.6087C17.25 12.2383 17.0472 12.8206 16.7034 13.2938'
      stroke='#5C5E65'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
    <path d='M2.625 3L15.75 16.125' stroke='#5C5E65' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(SvgIcon);
export { Memo as SvgIcon };
