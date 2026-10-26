import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CaretRightFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15.707 11.293l-6-6c-0.181-0.181-0.431-0.293-0.707-0.293-0.552 0-1 0.448-1 1v12c0 0.552 0.448 1 1 1 0.276 0 0.526-0.112 0.707-0.293l6-6c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707v0z"></path>
      </svg>
    );
  }
);

CaretRightFill.displayName = 'CaretRightFill';
