import { memo, SVGProps } from 'react';

const SvgIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M13.3909 9.18033L9.36153 11.781C9.3298 11.781 9.3298 11.8166 9.29807 11.8166L5.26869 14.4173C5.07833 14.5598 4.82451 14.6667 4.57069 14.6667C3.90443 14.6667 3.33333 14.061 3.33333 13.2773V8.00467V2.69643C3.33333 2.44705 3.39679 2.23329 3.49197 2.01954C3.84097 1.37828 4.57069 1.1289 5.17351 1.52078L9.26633 4.15709L13.3274 6.7934C13.5177 6.90027 13.6764 7.0784 13.8033 7.29213C14.1841 7.96907 13.9937 8.82407 13.3909 9.18033Z'
      fill='#292A2E'
    />
  </svg>
);

const Memo = memo(SvgIcon6);
export { Memo as SvgIcon6 };
