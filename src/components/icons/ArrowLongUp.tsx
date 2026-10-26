import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowLongUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.707 7.293l-4-4c-0.181-0.18-0.431-0.292-0.707-0.292s-0.526 0.111-0.707 0.292l-4 4c-0.181 0.181-0.293 0.431-0.293 0.707 0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293l2.293-2.293v13.586c0 0.552 0.448 1 1 1s1-0.448 1-1v0-13.586l2.293 2.293c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l0 0z"></path>
      </svg>
    );
  }
);

ArrowLongUp.displayName = 'ArrowLongUp';
