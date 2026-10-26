import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CurveRightUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.707 8.293l-4.999-4.999c-0.181-0.181-0.432-0.292-0.708-0.292s-0.526 0.112-0.708 0.292l0-0-4.999 4.999c-0.174 0.18-0.281 0.425-0.281 0.695 0 0.552 0.448 1 1 1 0.27 0 0.515-0.107 0.695-0.281l3.293-3.293v9.586c-0.002 1.656-1.344 2.998-3 3h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c2.76-0.003 4.997-2.24 5-5v-9.586l3.293 3.293c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l0 0z"></path>
      </svg>
    );
  }
);

CurveRightUp.displayName = 'CurveRightUp';
