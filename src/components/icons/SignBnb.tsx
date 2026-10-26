import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignBnb = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11.975 6.523l3.91 3.92 2.255-2.262s-6.215-6.131-6.215-6.181l-6.065 6.131 2.255 2.261zM11.975 17.477l-3.91-3.92-2.255 2.262s6.215 6.131 6.215 6.181l6.065-6.080-2.256-2.261-3.86 3.819zM2 12l2.256-2.261 2.256 2.261-2.256 2.261zM9.719 12l2.256-2.261 2.256 2.261-2.256 2.261zM17.489 12l2.256-2.261 2.256 2.261-2.256 2.261z"></path>
      </svg>
    );
  }
);

SignBnb.displayName = 'SignBnb';
