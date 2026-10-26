import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SortUpFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.707 9.293l-6-6c-0.181-0.181-0.431-0.293-0.707-0.293s-0.526 0.112-0.707 0.293v0l-6 6c-0.181 0.181-0.293 0.431-0.293 0.707 0 0.552 0.448 1 1 1h12c0.552-0 1-0.448 1-1 0-0.276-0.112-0.526-0.293-0.707v0z"></path>
      </svg>
    );
  }
);

SortUpFill.displayName = 'SortUpFill';
