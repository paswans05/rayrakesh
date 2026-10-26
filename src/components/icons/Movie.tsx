import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Movie = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.5 2h-13c-1.932 0.002-3.498 1.568-3.5 3.5v13c0.002 1.932 1.568 3.498 3.5 3.5h13c1.932-0.002 3.498-1.568 3.5-3.5v-13c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM17 8h3v3h-3zM15 11h-6v-7h6zM7 11h-3v-3h3zM4 13h3v3h-3zM9 13h6v7h-6zM17 13h3v3h-3zM20 5.5v0.5h-3v-2h1.5c0.828 0.001 1.499 0.672 1.5 1.5v0zM5.5 4h1.5v2h-3v-0.5c0.001-0.828 0.672-1.499 1.5-1.5h0zM4 18.5v-0.5h3v2h-1.5c-0.828-0.001-1.499-0.672-1.5-1.5v-0zM18.5 20h-1.5v-2h3v0.5c-0.001 0.828-0.672 1.499-1.5 1.5h-0z"></path>
      </svg>
    );
  }
);

Movie.displayName = 'Movie';
