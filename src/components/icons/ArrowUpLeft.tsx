import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowUpLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.707 18.293l-12.293-12.293h8.386c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-10.8c-0.551 0.002-0.998 0.449-1 1v10.8c0 0.552 0.448 1 1 1s1-0.448 1-1v0-8.386l12.293 12.293c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l0 0z"></path>
      </svg>
    );
  }
);

ArrowUpLeft.displayName = 'ArrowUpLeft';
