import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Masonry = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.5 2h-19c-0.828 0.001-1.499 0.672-1.5 1.5v17c0.001 0.828 0.672 1.499 1.5 1.5h19c0.828-0.001 1.499-0.672 1.5-1.5v-17c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM3 10h4v6h-4zM9 13h6v7h-6zM17 9h4v6h-4zM21 4v3h-4v-3zM15 4v7h-6v-7zM7 4v4h-4v-4zM3 18h4v2h-4zM21 20h-4v-3h4z"></path>
      </svg>
    );
  }
);

Masonry.displayName = 'Masonry';
