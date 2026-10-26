import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CaretUp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 16h-12c-0.552-0-1-0.448-1-1 0-0.276 0.112-0.526 0.293-0.707l6-6c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0l6 6c0.181 0.181 0.293 0.431 0.293 0.707 0 0.552-0.448 1-1 1h-0zM8.414 14h7.172l-3.586-3.586z"></path>
      </svg>
    );
  }
);

CaretUp.displayName = 'CaretUp';
