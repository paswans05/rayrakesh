import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveLeftUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 19h-4c-1.656-0.002-2.998-1.344-3-3v-9.586l3.293 3.293c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l-5-5c-0.181-0.18-0.431-0.292-0.707-0.292s-0.526 0.111-0.707 0.292l-5 5c-0.181 0.181-0.293 0.431-0.293 0.707 0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293l3.293-3.293v9.586c0.003 2.76 2.24 4.997 5 5h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

CurveLeftUp.displayName = 'CurveLeftUp';
