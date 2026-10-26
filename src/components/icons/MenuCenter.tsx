import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MenuCenter = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 13h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h14c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM23 5c0-0.552-0.448-1-1-1v0h-20c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h20c0.552 0 1-0.448 1-1v0zM23 19c0-0.552-0.448-1-1-1v0h-20c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h20c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

MenuCenter.displayName = 'MenuCenter';
