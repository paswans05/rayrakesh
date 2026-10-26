import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SortFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.924 13.617c0.048 0.113 0.076 0.245 0.076 0.383 0 0.276-0.112 0.526-0.293 0.707l-6 6c-0.181 0.181-0.431 0.293-0.707 0.293s-0.526-0.112-0.707-0.293l-6-6c-0.181-0.181-0.293-0.431-0.293-0.707 0-0.552 0.448-1 1-1h12c0.414 0 0.77 0.252 0.921 0.611l0.002 0.007zM6 11h12c0.552-0 1-0.448 1-1 0-0.276-0.112-0.526-0.293-0.707l-6-6c-0.181-0.181-0.431-0.293-0.707-0.293s-0.526 0.112-0.707 0.293v0l-6 6c-0.181 0.181-0.293 0.431-0.293 0.707 0 0.552 0.448 1 1 1h0z"></path>
      </svg>
    );
  }
);

SortFill.displayName = 'SortFill';
