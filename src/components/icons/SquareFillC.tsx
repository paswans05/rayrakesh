import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SquareFillC = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22.004 5.133c-0.496-1.496-1.654-2.65-3.117-3.131l-0.034-0.010c-2.057-0.539-4.419-0.848-6.852-0.848s-4.795 0.309-7.048 0.891l0.195-0.043-0.014 0.004c-1.496 0.495-2.651 1.653-3.132 3.117l-0.010 0.034c-0.539 2.057-0.848 4.419-0.848 6.852 0 2.439 0.311 4.806 0.894 7.063l-0.043-0.195c0.496 1.496 1.654 2.65 3.117 3.131l0.035 0.010c2.055 0.536 4.415 0.846 6.847 0.848h0.001c2.441-0.002 4.808-0.313 7.067-0.895l-0.197 0.043c1.496-0.495 2.651-1.653 3.132-3.117l0.010-0.034c0.539-2.057 0.848-4.419 0.848-6.852 0-2.439-0.311-4.806-0.894-7.063l0.043 0.195z"></path>
      </svg>
    );
  }
);

SquareFillC.displayName = 'SquareFillC';
