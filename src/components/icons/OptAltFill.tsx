import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const OptAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.5 2h-13c-1.932 0.002-3.498 1.568-3.5 3.5v13c0.002 1.932 1.568 3.498 3.5 3.5h13c1.932-0.002 3.498-1.568 3.5-3.5v-13c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM15 6c0-0.552 0.448-1 1-1s1 0.448 1 1v0 2c0 0.552-0.448 1-1 1s-1-0.448-1-1v0zM7 6c0-0.552 0.448-1 1-1s1 0.448 1 1v0 5c0 0.552-0.448 1-1 1s-1-0.448-1-1v0zM10.5 16h-1.5v2c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-2h-1.5c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h5c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM18.5 13h-1.5v5c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-5h-1.5c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h5c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

OptAltFill.displayName = 'OptAltFill';
