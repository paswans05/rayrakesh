import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CrossRoundFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.5 3h-11c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h11c1.932-0.002 3.498-1.568 3.5-3.5v-11c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM15.707 14.293c0.188 0.182 0.305 0.437 0.305 0.719 0 0.552-0.448 1-1 1-0.282 0-0.537-0.117-0.719-0.305l-2.293-2.293-2.293 2.293c-0.18 0.174-0.425 0.281-0.695 0.281-0.552 0-1-0.448-1-1 0-0.27 0.107-0.515 0.281-0.695l2.293-2.293-2.293-2.293c-0.174-0.18-0.281-0.425-0.281-0.695 0-0.552 0.448-1 1-1 0.27 0 0.515 0.107 0.695 0.281l2.293 2.293 2.293-2.293c0.18-0.174 0.425-0.281 0.695-0.281 0.552 0 1 0.448 1 1 0 0.27-0.107 0.515-0.281 0.695l-2.293 2.293z"></path>
      </svg>
    );
  }
);

CrossRoundFill.displayName = 'CrossRoundFill';
