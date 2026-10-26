import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowDownRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 8.2c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 8.386l-12.293-12.293c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l12.293 12.293h-8.386c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h10.8c0.551-0.002 0.998-0.449 1-1v-0z"></path>
      </svg>
    );
  }
);

ArrowDownRight.displayName = 'ArrowDownRight';
