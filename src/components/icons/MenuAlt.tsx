import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MenuAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 13h-14c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h14c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM20 19c0-0.552-0.448-1-1-1v0h-16c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h16c0.552 0 1-0.448 1-1v0zM20 5c0-0.552-0.448-1-1-1v0h-17c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h17c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

MenuAlt.displayName = 'MenuAlt';
