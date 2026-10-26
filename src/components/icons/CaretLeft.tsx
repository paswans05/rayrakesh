import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CaretLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15 19c-0 0-0 0-0 0-0.276 0-0.526-0.112-0.707-0.293v0l-6-6c-0.181-0.181-0.293-0.431-0.293-0.707s0.112-0.526 0.293-0.707v0l6-6c0.181-0.181 0.431-0.293 0.707-0.293 0.552 0 1 0.448 1 1v12c0 0.552-0.448 1-1 1v0zM10.414 12l3.586 3.586v-7.172z"></path>
      </svg>
    );
  }
);

CaretLeft.displayName = 'CaretLeft';
