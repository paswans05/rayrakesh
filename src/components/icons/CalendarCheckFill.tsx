import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CalendarCheckFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 7h-20c0.002-1.656 1.344-2.998 3-3h2v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1h6v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1h2c1.656 0.002 2.998 1.344 3 3v0zM2 9h20v9c-0.002 1.656-1.344 2.998-3 3h-14c-1.656-0.002-2.998-1.344-3-3v-0zM8.263 15.88l1.875 2.045c0.183 0.2 0.446 0.324 0.737 0.324s0.554-0.125 0.737-0.324l0.001-0.001 4.125-4.5c0.163-0.177 0.263-0.415 0.263-0.676 0-0.552-0.448-1-1-1-0.291 0-0.554 0.125-0.737 0.324l-0.001 0.001-3.388 3.696-1.138-1.241c-0.183-0.2-0.446-0.324-0.737-0.324-0.552 0-1 0.448-1 1 0 0.261 0.1 0.498 0.263 0.676l-0.001-0.001z"></path>
      </svg>
    );
  }
);

CalendarCheckFill.displayName = 'CalendarCheckFill';
