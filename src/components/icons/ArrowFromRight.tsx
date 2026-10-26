import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowFromRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.706 12.708l-5.999 5.999c-0.18 0.174-0.425 0.281-0.695 0.281-0.552 0-1-0.448-1-1 0-0.27 0.107-0.515 0.281-0.695l4.293-4.293h-8.586c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h8.586l-4.293-4.293c-0.174-0.18-0.281-0.425-0.281-0.695 0-0.552 0.448-1 1-1 0.27 0 0.515 0.107 0.695 0.281l5.999 5.999c0.181 0.181 0.292 0.432 0.292 0.708s-0.112 0.527-0.292 0.708l0-0zM4 3c-0.552 0-1 0.448-1 1v0 16c0 0.552 0.448 1 1 1s1-0.448 1-1v0-16c0-0.552-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

ArrowFromRight.displayName = 'ArrowFromRight';
