import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignDashAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM5.966 11.23h4.535l-0.466 1.507h-4.535zM18.33 10.18c-0.167 0.703-0.804 2.816-1.067 3.539-0.201 0.707-0.653 1.285-1.252 1.646l-0.013 0.007-0.063 0.037c-0.385 0.281-0.867 0.45-1.389 0.45-0.060 0-0.12-0.002-0.179-0.007l0.008 0h-8.542l0.502-1.674h8.23l1.341-4.353h-8.166l0.502-1.674h9.010c0.007-0 0.015-0 0.023-0 0.46 0 0.859 0.258 1.062 0.637l0.003 0.006c0.239 0.449 0.188 0.69-0.011 1.386z"></path>
      </svg>
    );
  }
);

SignDashAlt.displayName = 'SignDashAlt';
