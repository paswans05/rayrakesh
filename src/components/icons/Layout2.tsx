import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Layout2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM10 9h9v4h-9zM6.5 5h11c0.828 0.001 1.499 0.672 1.5 1.5v0.5h-14v-0.5c0.001-0.828 0.672-1.499 1.5-1.5h0zM5 17.5v-8.5h3v10h-1.5c-0.828-0.001-1.499-0.672-1.5-1.5v-0zM17.5 19h-7.5v-4h9v2.5c-0.001 0.828-0.672 1.499-1.5 1.5h-0z"></path>
      </svg>
    );
  }
);

Layout2.displayName = 'Layout2';
