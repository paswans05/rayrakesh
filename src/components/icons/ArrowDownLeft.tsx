import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowDownLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.707 4.293c-0.181-0.181-0.431-0.293-0.707-0.293s-0.526 0.112-0.707 0.293v0l-12.293 12.293v-8.386c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 10.8c0.002 0.551 0.449 0.998 1 1h10.8c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-8.386l12.293-12.293c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707v0z"></path>
      </svg>
    );
  }
);

ArrowDownLeft.displayName = 'ArrowDownLeft';
