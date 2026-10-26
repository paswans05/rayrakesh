import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GridPlusFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 16.5c0 0.552-0.448 1-1 1v0h-1.5v1.5c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1.5h-1.5c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.5v-1.5c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1.5h1.5c0.552 0 1 0.448 1 1v0zM9 2h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0zM20 2h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0zM9 13h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0z"></path>
      </svg>
    );
  }
);

GridPlusFill.displayName = 'GridPlusFill';
