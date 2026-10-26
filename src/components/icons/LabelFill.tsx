import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LabelFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.716 11.29l-6.003-6.003c-0.181-0.181-0.431-0.293-0.707-0.293l-10.31 0.006c-1.488 0.002-2.694 1.208-2.696 2.696v8.614c0.009 1.483 1.21 2.682 2.692 2.689h10.314c0.276-0 0.526-0.112 0.707-0.293l6.003-6.003c0.181-0.181 0.293-0.431 0.293-0.707s-0.112-0.526-0.293-0.707v0z"></path>
      </svg>
    );
  }
);

LabelFill.displayName = 'LabelFill';
