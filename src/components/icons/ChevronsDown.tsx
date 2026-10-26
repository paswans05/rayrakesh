import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronsDown = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 19c-0 0-0.001 0-0.001 0-0.276 0-0.525-0.112-0.706-0.293l-5-5c-0.174-0.18-0.281-0.425-0.281-0.695 0-0.552 0.448-1 1-1 0.27 0 0.515 0.107 0.695 0.281l4.293 4.293 4.293-4.293c0.18-0.174 0.425-0.281 0.695-0.281 0.552 0 1 0.448 1 1 0 0.27-0.107 0.515-0.281 0.695l-5 5c-0.18 0.181-0.43 0.293-0.706 0.293-0 0-0.001 0-0.001 0h0zM12.707 11.707l5-5c0.188-0.182 0.305-0.437 0.305-0.719 0-0.552-0.448-1-1-1-0.282 0-0.537 0.117-0.719 0.305l-4.293 4.293-4.293-4.293c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l5 5c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293v0z"></path>
      </svg>
    );
  }
);

ChevronsDown.displayName = 'ChevronsDown';
