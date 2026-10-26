import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveRightDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.707 14.293c-0.181-0.181-0.431-0.293-0.707-0.293s-0.526 0.112-0.707 0.293v0l-3.293 3.293v-9.586c-0.003-2.76-2.24-4.997-5-5h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c1.656 0.002 2.998 1.344 3 3v9.586l-3.293-3.293c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l5 5c0.181 0.18 0.431 0.292 0.707 0.292s0.526-0.111 0.707-0.292l5-5c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707l-0-0z"></path>
      </svg>
    );
  }
);

CurveRightDown.displayName = 'CurveRightDown';
