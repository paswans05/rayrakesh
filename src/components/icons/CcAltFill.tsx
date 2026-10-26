import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CcAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M1 17.5c0.002 1.932 1.568 3.498 3.5 3.5h15c1.932-0.002 3.498-1.568 3.5-3.5v-7.5h-22zM17 14h2c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-2c-0.552 0-1-0.448-1-1s0.448-1 1-1v0zM5 14h8c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-8c-0.552 0-1-0.448-1-1s0.448-1 1-1v0zM23 6.5v1.5h-22v-1.5c0.002-1.932 1.568-3.498 3.5-3.5h15c1.932 0.002 3.498 1.568 3.5 3.5v0z"></path>
      </svg>
    );
  }
);

CcAltFill.displayName = 'CcAltFill';
