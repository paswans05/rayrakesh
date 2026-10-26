import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Last = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7 18c-0.552-0-1-0.448-1-1 0-0.276 0.112-0.526 0.293-0.707l4.293-4.293-4.293-4.293c-0.174-0.18-0.281-0.425-0.281-0.695 0-0.552 0.448-1 1-1 0.27 0 0.515 0.107 0.695 0.281l5 5c0.181 0.181 0.293 0.431 0.293 0.707s-0.112 0.526-0.293 0.707v0l-5 5c-0.18 0.181-0.43 0.293-0.706 0.293-0 0-0.001 0-0.001 0h0zM18 17v-10c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 10c0 0.552 0.448 1 1 1s1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

Last.displayName = 'Last';
