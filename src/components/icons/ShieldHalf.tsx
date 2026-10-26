import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ShieldHalf = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.36 4.768l-7-2.7c-0.107-0.043-0.23-0.067-0.36-0.067s-0.253 0.025-0.367 0.070l0.007-0.002-7 2.7c-0.378 0.148-0.64 0.51-0.64 0.932v0 6.3c0 5.942 7.235 9.73 7.542 9.89 0.133 0.070 0.29 0.11 0.457 0.11s0.325-0.041 0.463-0.113l-0.006 0.003c0.308-0.159 7.542-3.948 7.542-9.89v-6.3c-0-0.423-0.262-0.784-0.633-0.93l-0.007-0.002zM11.999 19.852c-1.475-0.871-5.999-3.869-5.999-7.853v-5.613l6-2.314v15.78z"></path>
      </svg>
    );
  }
);

ShieldHalf.displayName = 'ShieldHalf';
