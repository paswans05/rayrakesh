import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TableViewFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M8 14h-5v-3h5zM8 4h-1.5c-1.932 0.002-3.498 1.568-3.5 3.5v1.5h5zM3 16v1.5c0.002 1.932 1.568 3.498 3.5 3.5h1.5v-5zM10 21h7.5c1.932-0.002 3.498-1.568 3.5-3.5v-1.5h-11zM17.5 4h-7.5v5h11v-1.5c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM10 14h11v-3h-11z"></path>
      </svg>
    );
  }
);

TableViewFill.displayName = 'TableViewFill';
