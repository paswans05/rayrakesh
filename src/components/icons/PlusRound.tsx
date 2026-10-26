import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PlusRound = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM19 17.5c-0.001 0.828-0.672 1.499-1.5 1.5h-11c-0.828-0.001-1.499-0.672-1.5-1.5v-11c0.001-0.828 0.672-1.499 1.5-1.5h11c0.828 0.001 1.499 0.672 1.5 1.5v0zM17 12c0 0.552-0.448 1-1 1v0h-3v3c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-3h-3c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v0 3h3c0.552 0 1 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

PlusRound.displayName = 'PlusRound';
