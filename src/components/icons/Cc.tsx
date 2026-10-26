import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Cc = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 3h-15c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h15c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM4.5 5h15c0.828 0.001 1.499 0.672 1.5 1.5v0.5h-18v-0.5c0.001-0.828 0.672-1.499 1.5-1.5h0zM19.5 19h-15c-0.828-0.001-1.499-0.672-1.5-1.5v-8.5h18v8.5c-0.001 0.828-0.672 1.499-1.5 1.5h-0z"></path>
      </svg>
    );
  }
);

Cc.displayName = 'Cc';
