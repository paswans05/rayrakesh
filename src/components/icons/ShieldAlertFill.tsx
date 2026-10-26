import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ShieldAlertFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.36 4.768l-7-2.7c-0.107-0.043-0.231-0.067-0.36-0.067s-0.254 0.025-0.367 0.070l0.007-0.002-7 2.7c-0.377 0.149-0.639 0.51-0.639 0.932 0 0 0 0 0 0v-0 6.3c0 5.942 7.234 9.73 7.543 9.89 0.133 0.070 0.29 0.11 0.457 0.11s0.324-0.041 0.463-0.113l-0.006 0.003c0.309-0.159 7.543-3.948 7.543-9.89v-6.3c0-0 0-0 0-0 0-0.423-0.262-0.784-0.633-0.93l-0.007-0.002zM12 16.9c-0.497 0-0.9-0.403-0.9-0.9s0.403-0.9 0.9-0.9c0.497 0 0.9 0.403 0.9 0.9v0c0 0.497-0.403 0.9-0.9 0.9v0zM12.9 12.5c0 0.497-0.403 0.9-0.9 0.9s-0.9-0.403-0.9-0.9v0-5c0-0.497 0.403-0.9 0.9-0.9s0.9 0.403 0.9 0.9v0z"></path>
      </svg>
    );
  }
);

ShieldAlertFill.displayName = 'ShieldAlertFill';
