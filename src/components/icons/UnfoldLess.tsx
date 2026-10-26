import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const UnfoldLess = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16 21c-0 0-0.001 0-0.001 0-0.276 0-0.525-0.112-0.706-0.293l-3.293-3.293-3.293 3.293c-0.182 0.188-0.437 0.305-0.719 0.305-0.552 0-1-0.448-1-1 0-0.282 0.117-0.537 0.305-0.719l4-4c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0l4 4c0.181 0.181 0.293 0.431 0.293 0.707 0 0.552-0.448 1-1 1h-0zM12.707 8.707l4-4c0.188-0.182 0.305-0.437 0.305-0.719 0-0.552-0.448-1-1-1-0.282 0-0.537 0.117-0.719 0.305l-3.293 3.293-3.293-3.293c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l4 4c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293v0z"></path>
      </svg>
    );
  }
);

UnfoldLess.displayName = 'UnfoldLess';
