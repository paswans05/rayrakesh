import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Elementor = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 6v12c0 1.657-1.343 3-3 3v0h-12c-1.657 0-3-1.343-3-3v0-12c0-1.657 1.343-3 3-3v0h12c1.657 0 3 1.343 3 3v0zM10 8h-2v8h2zM16 8h-5v2h5zM16 11h-5v2h5zM16 14h-5v2h5z"></path>
      </svg>
    );
  }
);

Elementor.displayName = 'Elementor';
