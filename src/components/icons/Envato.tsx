import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Envato = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M4.809 17.929l5.837-12.831c-6.736 2.743-8.595 7.047-5.837 12.831zM17.039 3.892c-4.291 4.458-7.927 9.589-10.727 15.209l-0.161 0.356c0.279 0.33 0.594 0.616 0.944 0.856l0.016 0.010c1.213 0.738 2.68 1.174 4.249 1.174 1.881 0 3.615-0.627 5.004-1.684l-0.020 0.015c2.949-2.504 3.883-8.072 4.050-14.805 0.013-0.538 0.024-1.086 0.026-1.642-0.065-1.416-2.217-1.040-3.381 0.51z"></path>
      </svg>
    );
  }
);

Envato.displayName = 'Envato';
