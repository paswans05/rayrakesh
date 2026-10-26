import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Google = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.312 12.22c0 5.431-3.641 9.28-9.124 9.28-5.247 0-9.5-4.253-9.5-9.5s4.253-9.5 9.5-9.5v0c0.036-0 0.078-0.001 0.12-0.001 2.421 0 4.621 0.948 6.249 2.493l-0.004-0.004-2.58 2.476c-0.954-0.908-2.248-1.466-3.672-1.466-0.040 0-0.079 0-0.119 0.001l0.006-0c-3.263 0.067-5.882 2.728-5.882 6.001s2.619 5.933 5.876 6.001l0.006 0c0.105 0.008 0.228 0.012 0.352 0.012 2.475 0 4.541-1.747 5.034-4.075l0.006-0.034h-5.392v-3.265h8.969c0.099 0.474 0.155 1.019 0.155 1.577 0 0.001 0 0.002 0 0.003v-0z"></path>
      </svg>
    );
  }
);

Google.displayName = 'Google';
