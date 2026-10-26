import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Tablet = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.5 22h-9c-1.932-0.002-3.498-1.568-3.5-3.5v-13c0.002-1.932 1.568-3.498 3.5-3.5h9c1.932 0.002 3.498 1.568 3.5 3.5v13c-0.002 1.932-1.568 3.498-3.5 3.5h-0zM7.5 4c-0.828 0.001-1.499 0.672-1.5 1.5v13c0.001 0.828 0.672 1.499 1.5 1.5h9c0.828-0.001 1.499-0.672 1.5-1.5v-13c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM12.71 18.71c0.179-0.18 0.29-0.428 0.29-0.702 0-0.003-0-0.006-0-0.009v0c0-0.552-0.448-1-1-1s-1 0.448-1 1v0c0.002 0.553 0.451 1 1.004 1 0.275 0 0.525-0.111 0.706-0.29l-0 0z"></path>
      </svg>
    );
  }
);

Tablet.displayName = 'Tablet';
