import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronUpRoundFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM16.707 14.707c-0.181 0.181-0.431 0.293-0.707 0.293s-0.526-0.112-0.707-0.293l-3.293-3.293-3.293 3.293c-0.182 0.188-0.437 0.305-0.719 0.305-0.552 0-1-0.448-1-1 0-0.282 0.117-0.537 0.305-0.719l4-4c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0l4 4c0.181 0.181 0.293 0.431 0.293 0.707s-0.112 0.526-0.293 0.707v0z"></path>
      </svg>
    );
  }
);

ChevronUpRoundFill.displayName = 'ChevronUpRoundFill';
