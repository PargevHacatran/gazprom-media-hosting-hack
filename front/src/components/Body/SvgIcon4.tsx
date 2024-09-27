import { memo, SVGProps } from 'react';

const SvgIcon4 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8 0.666666C7.4696 0.666666 6.96087 0.877379 6.58579 1.25245C6.21071 1.62753 6 2.13623 6 2.66667V8C6 8.5304 6.21071 9.03913 6.58579 9.4142C6.96087 9.78927 7.4696 10 8 10C8.5304 10 9.03913 9.78927 9.4142 9.4142C9.78927 9.03913 10 8.5304 10 8V2.66667C10 2.13623 9.78927 1.62753 9.4142 1.25245C9.03913 0.877379 8.5304 0.666666 8 0.666666Z'
      stroke='#5C5E65'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.6667 6.66667V8C12.6667 9.23767 12.175 10.4247 11.2998 11.2998C10.4247 12.175 9.23767 12.6667 8 12.6667C6.76233 12.6667 5.57534 12.175 4.70017 11.2998C3.825 10.4247 3.33333 9.23767 3.33333 8V6.66667'
      stroke='#5C5E65'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M8 12.6667V15.3333' stroke='#5C5E65' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

const Memo = memo(SvgIcon4);
export { Memo as SvgIcon4 };
