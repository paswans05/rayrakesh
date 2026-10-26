import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveUpLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16 9h-9.586l3.293-3.293c0.188-0.182 0.305-0.437 0.305-0.719 0-0.552-0.448-1-1-1-0.282 0-0.537 0.117-0.719 0.305l-5 5c-0.18 0.181-0.292 0.432-0.292 0.708s0.112 0.526 0.292 0.708l4.999 4.999c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l-3.293-3.293h9.586c1.656 0.002 2.998 1.344 3 3v4c0 0.552 0.448 1 1 1s1-0.448 1-1v0-4c-0.003-2.76-2.24-4.997-5-5h-0z"></path>
      </svg>
    );
  }
);

CurveUpLeft.displayName = 'CurveUpLeft';
