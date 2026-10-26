import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 11h-11.586l5.293-5.293c0.188-0.182 0.305-0.437 0.305-0.719 0-0.552-0.448-1-1-1-0.282 0-0.537 0.117-0.719 0.305l-7 7c-0.18 0.181-0.292 0.431-0.292 0.707s0.111 0.526 0.292 0.707l7 7c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l-5.293-5.293h11.586c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

ArrowLeft.displayName = 'ArrowLeft';
