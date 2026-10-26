import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GridFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 4v5c0 1.105-0.895 2-2 2v0h-5c-1.105 0-2-0.895-2-2v0-5c0-1.105 0.895-2 2-2v0h5c1.105 0 2 0.895 2 2v0zM20 2h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0zM20 13h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0zM9 13h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0z"></path>
      </svg>
    );
  }
);

GridFill.displayName = 'GridFill';
