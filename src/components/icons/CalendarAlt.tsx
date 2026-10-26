import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CalendarAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7 17.75h3c0.414 0 0.75-0.336 0.75-0.75v0-3c0-0.414-0.336-0.75-0.75-0.75v0h-3c-0.414 0-0.75 0.336-0.75 0.75v0 3c0 0.414 0.336 0.75 0.75 0.75v0zM7.75 14.75h1.5v1.5h-1.5zM19 4h-2v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 1h-6v-1c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 1h-2c-1.656 0.002-2.998 1.344-3 3v11c0.002 1.656 1.344 2.998 3 3h14c1.656-0.002 2.998-1.344 3-3v-11c-0.002-1.656-1.344-2.998-3-3h-0zM4 7c0.001-0.552 0.448-0.999 1-1h2v1c0 0.552 0.448 1 1 1s1-0.448 1-1v0-1h6v1c0 0.552 0.448 1 1 1s1-0.448 1-1v0-1h2c0.552 0.001 0.999 0.448 1 1v3h-16zM20 18c-0.001 0.552-0.448 0.999-1 1h-14c-0.552-0.001-0.999-0.448-1-1v-6h16z"></path>
      </svg>
    );
  }
);

CalendarAlt.displayName = 'CalendarAlt';
