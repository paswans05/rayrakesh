import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const NavigateUpFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.932 21.138l-7-18c-0.149-0.376-0.51-0.638-0.932-0.638s-0.783 0.261-0.93 0.631l-0.002 0.007-7 18c-0.043 0.108-0.068 0.232-0.068 0.363 0 0.552 0.448 1 1 1 0.175 0 0.339-0.045 0.482-0.123l-0.005 0.003 6.524-3.532 6.524 3.532c0.138 0.076 0.302 0.121 0.476 0.121 0.552 0 1-0.448 1-1 0-0.131-0.025-0.255-0.071-0.37l0.002 0.007z"></path>
      </svg>
    );
  }
);

NavigateUpFill.displayName = 'NavigateUpFill';
