import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PenAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.4 7.34l-2.74-2.74c-0.357-0.336-0.839-0.542-1.369-0.542-0.493 0-0.945 0.179-1.294 0.475l0.003-0.002-9 9c-0.313 0.315-0.521 0.735-0.569 1.201l-0.001 0.009-0.43 4.17c-0.003 0.028-0.004 0.060-0.004 0.093 0 0.551 0.447 0.998 0.997 0.998 0.002 0 0.005 0 0.007-0h0.090l4.17-0.38c0.475-0.049 0.895-0.257 1.21-0.57l9-9c0.325-0.343 0.526-0.808 0.526-1.32 0-0.547-0.228-1.040-0.595-1.389l-0.001-0.001zM16 10.68l-2.68-2.68 1.95-2 2.73 2.73z"></path>
      </svg>
    );
  }
);

PenAltFill.displayName = 'PenAltFill';
