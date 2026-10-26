import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CrossSm = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.707 15.293c0.188 0.182 0.305 0.437 0.305 0.719 0 0.552-0.448 1-1 1-0.282 0-0.537-0.117-0.719-0.305l-3.293-3.293-3.293 3.293c-0.182 0.188-0.437 0.305-0.719 0.305-0.552 0-1-0.448-1-1 0-0.282 0.117-0.537 0.305-0.719l3.293-3.293-3.293-3.293c-0.188-0.182-0.305-0.437-0.305-0.719 0-0.552 0.448-1 1-1 0.282 0 0.537 0.117 0.719 0.305l3.293 3.293 3.293-3.293c0.182-0.188 0.437-0.305 0.719-0.305 0.552 0 1 0.448 1 1 0 0.282-0.117 0.537-0.305 0.719l-3.293 3.293z"></path>
      </svg>
    );
  }
);

CrossSm.displayName = 'CrossSm';
