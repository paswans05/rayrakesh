import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Activity = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9 22c-0 0-0 0-0 0-0.439 0-0.812-0.283-0.946-0.677l-0.002-0.007-2.772-8.316h-3.279c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h4c0 0 0 0 0 0 0.439 0 0.812 0.283 0.946 0.677l0.002 0.007 2.052 6.154 5.052-15.154c0.136-0.401 0.509-0.684 0.948-0.684s0.812 0.283 0.946 0.677l0.002 0.007 2.772 8.316h3.279c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-4c-0 0-0 0-0 0-0.439 0-0.812-0.283-0.946-0.677l-0.002-0.007-2.052-6.154-5.052 15.154c-0.136 0.401-0.509 0.684-0.948 0.684-0 0-0 0-0 0h0z"></path>
      </svg>
    );
  }
);

Activity.displayName = 'Activity';
