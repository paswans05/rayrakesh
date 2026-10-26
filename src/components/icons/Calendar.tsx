import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Calendar = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M6 15c0-0.552 0.448-1 1-1v0h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-3c-0.552 0-1-0.448-1-1v0zM13.5 16h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0zM22 7v11c-0.002 1.656-1.344 2.998-3 3h-14c-1.656-0.002-2.998-1.344-3-3v-11c0.002-1.656 1.344-2.998 3-3h2v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1h6v-1c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1h2c1.656 0.002 2.998 1.344 3 3v0zM4 10h16v-3c-0.001-0.552-0.448-0.999-1-1h-2v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1h-6v1c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1h-2c-0.552 0.001-0.999 0.448-1 1v0zM20 12h-16v6c0.001 0.552 0.448 0.999 1 1h14c0.552-0.001 0.999-0.448 1-1v-0z"></path>
      </svg>
    );
  }
);

Calendar.displayName = 'Calendar';
