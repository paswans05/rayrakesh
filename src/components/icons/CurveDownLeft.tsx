import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveDownLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 5c-0.552 0-1 0.448-1 1v0 4c-0.002 1.656-1.344 2.998-3 3h-9.586l3.293-3.293c0.174-0.18 0.281-0.425 0.281-0.695 0-0.552-0.448-1-1-1-0.27 0-0.515 0.107-0.695 0.281l-5 5c-0.18 0.181-0.292 0.431-0.292 0.707s0.111 0.526 0.292 0.707l5 5c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l-3.293-3.293h9.586c2.76-0.003 4.997-2.24 5-5v-4c0-0.552-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

CurveDownLeft.displayName = 'CurveDownLeft';
