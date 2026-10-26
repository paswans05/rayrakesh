import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TicketAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 10.5c0.552 0 1-0.448 1-1v0-2c-0.001-1.38-1.12-2.499-2.5-2.5h-15c-1.38 0.001-2.499 1.12-2.5 2.5v2c0 0.552 0.448 1 1 1v0c0.828 0 1.5 0.672 1.5 1.5s-0.672 1.5-1.5 1.5v0c-0.552 0-1 0.448-1 1v0 2c0.001 1.38 1.12 2.499 2.5 2.5h15c1.38-0.001 2.499-1.12 2.5-2.5v-2c0-0.552-0.448-1-1-1v0c-0.828 0-1.5-0.672-1.5-1.5s0.672-1.5 1.5-1.5v0z"></path>
      </svg>
    );
  }
);

TicketAltFill.displayName = 'TicketAltFill';
