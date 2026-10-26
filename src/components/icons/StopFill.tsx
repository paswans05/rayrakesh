import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const StopFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.852 6.335c-0.571-0.213-1.231-0.336-1.919-0.336-0.016 0-0.032 0-0.047 0l0.002-0h-5.777c-0.013-0-0.029-0-0.045-0-0.688 0-1.348 0.123-1.958 0.348l0.039-0.013-0.001 0.001c-1.098 0.492-1.146 2.753-1.146 2.775v5.777c0 0.022 0.049 2.283 1.147 2.776 0.571 0.213 1.231 0.336 1.919 0.336 0.016 0 0.031-0 0.047-0l-0.002 0h5.777c0.022 0 2.284-0.049 2.775-1.148 0.213-0.571 0.336-1.231 0.336-1.919 0-0.016-0-0.031-0-0.047l0 0.002v-5.777c0-0.022-0.049-2.283-1.148-2.776z"></path>
      </svg>
    );
  }
);

StopFill.displayName = 'StopFill';
