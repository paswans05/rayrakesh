import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowLeftRound = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM19 17.5c-0.001 0.828-0.672 1.499-1.5 1.5h-11c-0.828-0.001-1.499-0.672-1.5-1.5v-11c0.001-0.828 0.672-1.499 1.5-1.5h11c0.828 0.001 1.499 0.672 1.5 1.5v0zM17 12c0 0.552-0.448 1-1 1v0h-5.586l2.293 2.293c0.188 0.182 0.305 0.437 0.305 0.719 0 0.552-0.448 1-1 1-0.282 0-0.537-0.117-0.719-0.305l-4-4c-0.18-0.181-0.292-0.431-0.292-0.707s0.111-0.526 0.292-0.707l4-4c0.182-0.188 0.437-0.305 0.719-0.305 0.552 0 1 0.448 1 1 0 0.282-0.117 0.537-0.305 0.719l-2.293 2.294h5.586c0.552 0 1 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

ArrowLeftRound.displayName = 'ArrowLeftRound';
