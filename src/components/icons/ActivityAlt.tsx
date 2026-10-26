import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ActivityAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15 22c-0 0-0 0-0 0-0.439 0-0.812-0.283-0.946-0.677l-0.002-0.007-5.052-15.154-2.052 6.154c-0.136 0.401-0.509 0.684-0.948 0.684-0 0-0 0-0 0h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3.279l2.772-8.316c0.136-0.401 0.509-0.684 0.948-0.684s0.812 0.283 0.946 0.677l0.002 0.007 5.052 15.154 2.052-6.154c0.136-0.401 0.509-0.684 0.948-0.684 0 0 0 0 0 0h4c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-3.279l-2.772 8.316c-0.136 0.401-0.509 0.684-0.948 0.684-0 0-0 0-0 0h0z"></path>
      </svg>
    );
  }
);

ActivityAlt.displayName = 'ActivityAlt';
