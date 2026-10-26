import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronsLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 18c-0 0-0.001 0-0.001 0-0.276 0-0.525-0.112-0.706-0.293l-5-5c-0.181-0.181-0.293-0.431-0.293-0.707s0.112-0.526 0.293-0.707v0l5-5c0.182-0.188 0.437-0.305 0.719-0.305 0.552 0 1 0.448 1 1 0 0.282-0.117 0.537-0.305 0.719l-4.293 4.293 4.293 4.293c0.181 0.181 0.293 0.431 0.293 0.707 0 0.552-0.448 1-1 1h-0zM18.707 17.707c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707v0l-4.293-4.293 4.293-4.293c0.188-0.182 0.305-0.437 0.305-0.719 0-0.552-0.448-1-1-1-0.282 0-0.537 0.117-0.719 0.305l-5 5c-0.181 0.181-0.293 0.431-0.293 0.707s0.112 0.526 0.293 0.707v0l5 5c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293v0z"></path>
      </svg>
    );
  }
);

ChevronsLeft.displayName = 'ChevronsLeft';
