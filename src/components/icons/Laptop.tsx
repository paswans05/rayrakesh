import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Laptop = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 17h-2c0.552 0 1-0.448 1-1v0-8c-0.002-1.656-1.344-2.998-3-3h-12c-1.656 0.002-2.998 1.344-3 3v8c0 0.552 0.448 1 1 1v0h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h20c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM5 8c0-0.552 0.448-1 1-1h12c0.552 0 1 0.448 1 1v7h-14z"></path>
      </svg>
    );
  }
);

Laptop.displayName = 'Laptop';
