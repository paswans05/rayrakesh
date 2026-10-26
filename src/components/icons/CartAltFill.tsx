import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CartAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.333 9.672h-4.471l-4.097-6.132c-0.17-0.251-0.453-0.413-0.775-0.413s-0.605 0.162-0.773 0.41l-0.002 0.003-4.097 6.132h-4.452c-0.515 0.002-0.932 0.418-0.933 0.933v0c-0 0.004-0 0.008-0 0.012 0 0.086 0.014 0.168 0.039 0.245l-0.002-0.006 2.371 8.652c0.224 0.792 0.94 1.363 1.789 1.363 0.001 0 0.002 0 0.003 0h12.133c0.852-0.001 1.571-0.571 1.798-1.349l0.003-0.013 2.371-8.652 0.028-0.252c-0.001-0.515-0.418-0.932-0.933-0.933h-0zM11.991 5.743l2.623 3.929h-5.245zM12 17.139c-0 0-0 0-0 0-1.031 0-1.867-0.836-1.867-1.867s0.836-1.867 1.867-1.867c1.031 0 1.867 0.836 1.867 1.867v0c-0.003 1.030-0.837 1.864-1.866 1.867h-0z"></path>
      </svg>
    );
  }
);

CartAltFill.displayName = 'CartAltFill';
