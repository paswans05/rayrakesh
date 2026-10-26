import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CheckThick = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9.281 18.929c-0.495-0-0.942-0.206-1.26-0.536l-0.001-0.001-4.531-4.708c-0.314-0.316-0.509-0.752-0.509-1.234 0-0.966 0.783-1.75 1.75-1.75 0.505 0 0.96 0.214 1.279 0.556l0.001 0.001 3.27 3.398 8.708-9.047c0.32-0.343 0.775-0.557 1.28-0.557 0.966 0 1.75 0.783 1.75 1.75 0 0.481-0.194 0.917-0.509 1.234l0-0-9.969 10.357c-0.319 0.331-0.766 0.537-1.261 0.537v0z"></path>
      </svg>
    );
  }
);

CheckThick.displayName = 'CheckThick';
