import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CaretLeftFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15.383 5.076c-0.113-0.049-0.245-0.077-0.384-0.077-0.276 0-0.526 0.112-0.706 0.294l-6 6c-0.181 0.181-0.293 0.431-0.293 0.707s0.112 0.526 0.293 0.707v0l6 6c0.181 0.181 0.431 0.293 0.707 0.293 0.552 0 1-0.448 1-1v0-12c-0-0.414-0.252-0.769-0.611-0.921l-0.007-0.002z"></path>
      </svg>
    );
  }
);

CaretLeftFill.displayName = 'CaretLeftFill';
