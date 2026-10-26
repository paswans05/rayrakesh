import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BoxView = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM19 6.5v4.5h-6v-6h4.5c0.828 0.001 1.499 0.672 1.5 1.5v0zM6.5 5h4.5v6h-6v-4.5c0.001-0.828 0.672-1.499 1.5-1.5h0zM5 17.5v-4.5h6v6h-4.5c-0.828-0.001-1.499-0.672-1.5-1.5v-0zM17.5 19h-4.5v-6h6v4.5c-0.001 0.828-0.672 1.499-1.5 1.5h-0z"></path>
      </svg>
    );
  }
);

BoxView.displayName = 'BoxView';
