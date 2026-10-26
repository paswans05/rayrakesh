import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Kickstarter = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10.203 9.149l3.328-4.75c0.531-0.828 1.447-1.369 2.489-1.369 0.81 0 1.544 0.327 2.076 0.856l-0-0c0.554 0.509 0.899 1.237 0.899 2.046 0 0.584-0.18 1.125-0.488 1.572l0.006-0.009-3.010 4.316 3.648 4.613c0.35 0.463 0.561 1.049 0.561 1.684 0 0.793-0.329 1.51-0.858 2.020l-0.001 0.001c-0.526 0.54-1.261 0.875-2.073 0.875s-1.547-0.335-2.073-0.875l-0.001-0.001-4.505-5.557v3.074c0 2.322-1.31 3.351-2.909 3.351-1.993 0-3.010-1.45-3.010-3.351v-11.373c-0.010-0.093-0.016-0.202-0.016-0.311 0-1.635 1.325-2.96 2.96-2.96 0.009 0 0.019 0 0.028 0h-0.001c1.643 0 2.949 1.053 2.949 3.312z"></path>
      </svg>
    );
  }
);

Kickstarter.displayName = 'Kickstarter';
