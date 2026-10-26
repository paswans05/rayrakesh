import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Crosshair = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM13 19.931v-2.931c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 2.93c-3.62-0.474-6.456-3.31-6.926-6.889l-0.004-0.041h2.931c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-2.931c0.475-3.621 3.31-6.456 6.89-6.926l0.041-0.004v2.931c0 0.552 0.448 1 1 1s1-0.448 1-1v0-2.931c3.621 0.475 6.456 3.31 6.926 6.89l0.004 0.041h-2.931c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2.93c-0.474 3.62-3.31 6.456-6.889 6.926l-0.041 0.004z"></path>
      </svg>
    );
  }
);

Crosshair.displayName = 'Crosshair';
