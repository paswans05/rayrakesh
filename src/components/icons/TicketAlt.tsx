import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TicketAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 19h-15c-1.38-0.001-2.499-1.12-2.5-2.5v-2c0-0.552 0.448-1 1-1v0c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5v0c-0.552 0-1-0.448-1-1v0-2c0.001-1.38 1.12-2.499 2.5-2.5h15c1.38 0.001 2.499 1.12 2.5 2.5v2c0 0.552-0.448 1-1 1v0c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5v0c0.552 0 1 0.448 1 1v0 2c-0.001 1.38-1.12 2.499-2.5 2.5h-0zM4 15.354v1.146c0.001 0.276 0.224 0.499 0.5 0.5h15c0.276-0.001 0.499-0.224 0.5-0.5v-1.146c-1.458-0.445-2.5-1.778-2.5-3.354s1.042-2.91 2.475-3.348l0.025-0.007v-1.146c-0.001-0.276-0.224-0.499-0.5-0.5h-15c-0.276 0.001-0.499 0.224-0.5 0.5v1.146c1.458 0.445 2.5 1.778 2.5 3.354s-1.042 2.91-2.475 3.348l-0.025 0.007z"></path>
      </svg>
    );
  }
);

TicketAlt.displayName = 'TicketAlt';
