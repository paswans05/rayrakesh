import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveLeftDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 3h-4c-2.76 0.003-4.997 2.24-5 5v9.586l-3.293-3.293c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l4.999 4.999c0.181 0.181 0.432 0.292 0.708 0.292s0.527-0.112 0.708-0.292l-0 0 4.999-4.999c0.174-0.18 0.281-0.425 0.281-0.695 0-0.552-0.448-1-1-1-0.27 0-0.515 0.107-0.695 0.281l-3.293 3.293v-9.586c0.002-1.656 1.344-2.998 3-3h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

CurveLeftDown.displayName = 'CurveLeftDown';
