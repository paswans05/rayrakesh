import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const EqualSm = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17 15.5h-10c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h10c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM18 9.5c0-0.552-0.448-1-1-1v0h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h10c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

EqualSm.displayName = 'EqualSm';
