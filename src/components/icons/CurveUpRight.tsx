import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveUpRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.923 10.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-5-5c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l3.293 3.293h-9.586c-2.76 0.003-4.997 2.24-5 5v4c0 0.552 0.448 1 1 1s1-0.448 1-1v0-4c0.002-1.656 1.344-2.998 3-3h9.586l-3.293 3.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l5-5c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
      </svg>
    );
  }
);

CurveUpRight.displayName = 'CurveUpRight';
