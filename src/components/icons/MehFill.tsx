import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MehFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.007-5.52-4.48-9.993-9.999-10h-0.001zM9 8h0.010c0.55 0.003 0.995 0.449 0.995 1 0 0.552-0.448 1-1 1s-1-0.448-1-1c0-0.551 0.445-0.997 0.995-1h0zM15 16h-6c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h6c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM15.010 10c-0.001 0-0.003 0-0.005 0-0.552 0-1-0.448-1-1 0-0.551 0.445-0.997 0.995-1h0.010c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

MehFill.displayName = 'MehFill';
