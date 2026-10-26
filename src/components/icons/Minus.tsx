import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Minus = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 13h-16c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h16c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

Minus.displayName = 'Minus';
