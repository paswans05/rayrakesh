import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LightFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10 17c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h11.539c0.19-0.579 0.335-1.258 0.406-1.958l0.004-0.042h-13.949c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h13.949c-0.075-0.742-0.22-1.421-0.43-2.070l0.020 0.070h-11.539c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h10.647c-1.761-3.010-4.978-5-8.66-5-5.523 0-10 4.477-10 10s4.477 10 10 10c3.682 0 6.899-1.99 8.635-4.953l0.026-0.047z"></path>
      </svg>
    );
  }
);

LightFill.displayName = 'LightFill';
