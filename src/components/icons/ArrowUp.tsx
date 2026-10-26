import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.707 11.293l-7-7c-0.181-0.18-0.431-0.292-0.707-0.292s-0.526 0.111-0.707 0.292l-7 7c-0.174 0.18-0.281 0.425-0.281 0.695 0 0.552 0.448 1 1 1 0.27 0 0.515-0.107 0.695-0.281l5.293-5.293v11.586c0 0.552 0.448 1 1 1s1-0.448 1-1v0-11.586l5.293 5.293c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l0 0z"></path>
      </svg>
    );
  }
);

ArrowUp.displayName = 'ArrowUp';
