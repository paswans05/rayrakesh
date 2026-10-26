import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CcAlt2Fill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M1.050 6c0.25-1.702 1.698-2.995 3.449-3h15.001c1.752 0.005 3.2 1.298 3.448 2.981l0.002 0.019zM1 8h22v9.5c-0.002 1.932-1.568 3.498-3.5 3.5h-15c-1.932-0.002-3.498-1.568-3.5-3.5v-0zM12 17c0-0.552-0.448-1-1-1v0h-1c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1c0.552 0 1-0.448 1-1v0zM4 13c0 0.552 0.448 1 1 1v0h12c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-12c-0.552 0-1 0.448-1 1v0zM4 17c0 0.552 0.448 1 1 1v0h2c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-2c-0.552 0-1 0.448-1 1v0z"></path>
      </svg>
    );
  }
);

CcAlt2Fill.displayName = 'CcAlt2Fill';
