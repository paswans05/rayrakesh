import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TableView = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 4h-11c-1.932 0.002-3.498 1.568-3.5 3.5v10c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-10c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM5 11h3v3h-3zM10 11h9v3h-9zM19 7.5v1.5h-9v-3h7.5c0.828 0.001 1.499 0.672 1.5 1.5v0zM6.5 6h1.5v3h-3v-1.5c0.001-0.828 0.672-1.499 1.5-1.5h0zM5 17.5v-1.5h3v3h-1.5c-0.828-0.001-1.499-0.672-1.5-1.5v-0zM17.5 19h-7.5v-3h9v1.5c-0.001 0.828-0.672 1.499-1.5 1.5h-0z"></path>
      </svg>
    );
  }
);

TableView.displayName = 'TableView';
