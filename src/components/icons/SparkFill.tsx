import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SparkFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 23c-0.552-0.001-0.999-0.449-0.999-1.001 0-0.043 0.003-0.086 0.008-0.128l-0.001 0.005 0.859-6.876h-7.867c-0 0-0 0-0 0-0.552 0-1-0.448-1-1 0-0.245 0.088-0.469 0.233-0.642l-0.001 0.002 10-12c0.185-0.22 0.46-0.359 0.768-0.359 0.552 0 1 0.448 1 1 0 0.044-0.003 0.087-0.008 0.129l0.001-0.005-0.859 6.876h7.867c0 0 0 0 0 0 0.552 0 1 0.448 1 1 0 0.244-0.088 0.468-0.233 0.642l0.001-0.002-10 12c-0.185 0.22-0.46 0.359-0.768 0.359h-0z"></path>
      </svg>
    );
  }
);

SparkFill.displayName = 'SparkFill';
