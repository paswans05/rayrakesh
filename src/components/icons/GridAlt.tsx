import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GridAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 15v3h-3v-3h3zM18 13h-3c-1.105 0-2 0.895-2 2v0 3c0 1.105 0.895 2 2 2v0h3c1.105 0 2-0.895 2-2v0-3c0-1.105-0.895-2-2-2v0zM9 4v5h-5v-5h5zM9 2h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0zM20 4v5h-5v-5h5zM20 2h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0zM9 15v5h-5v-5h5zM9 13h-5c-1.105 0-2 0.895-2 2v0 5c0 1.105 0.895 2 2 2v0h5c1.105 0 2-0.895 2-2v0-5c0-1.105-0.895-2-2-2v0z"></path>
      </svg>
    );
  }
);

GridAlt.displayName = 'GridAlt';
