import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MinusRoundFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM16 13h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

MinusRoundFill.displayName = 'MinusRoundFill';
