import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CcAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 3h-15c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h15c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM4.5 5h15c0.828 0.001 1.499 0.672 1.5 1.5v2.5h-18v-2.5c0.001-0.828 0.672-1.499 1.5-1.5h0zM19.5 19h-15c-0.828-0.001-1.499-0.672-1.5-1.5v-6.5h18v6.5c-0.001 0.828-0.672 1.499-1.5 1.5h-0zM13 15c0 0.552-0.448 1-1 1v0h-6c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h6c0.552 0 1 0.448 1 1v0zM19 15c0 0.552-0.448 1-1 1v0h-2c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h2c0.552 0 1 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

CcAlt.displayName = 'CcAlt';
