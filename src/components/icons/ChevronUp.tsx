import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17 15.5c-0 0-0.001 0-0.001 0-0.276 0-0.525-0.112-0.706-0.293l-4.293-4.293-4.293 4.293c-0.18 0.174-0.425 0.281-0.695 0.281-0.552 0-1-0.448-1-1 0-0.27 0.107-0.515 0.281-0.695l5-5c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0l5 5c0.181 0.181 0.293 0.431 0.293 0.707 0 0.552-0.448 1-1 1h-0z"></path>
      </svg>
    );
  }
);

ChevronUp.displayName = 'ChevronUp';
