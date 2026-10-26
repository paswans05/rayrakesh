import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const UnarchiveFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 3h-16c-1.104 0.002-1.998 0.896-2 2v2c0.002 1.104 0.896 1.998 2 2h0v9c0.002 1.656 1.344 2.998 3 3h10c1.656-0.002 2.998-1.344 3-3v-9c1.104-0.002 1.998-0.896 2-2v-2c-0.002-1.104-0.896-1.998-2-2h-0zM14.707 14.457c-0.181 0.181-0.431 0.293-0.707 0.293s-0.526-0.112-0.707-0.293v0l-0.293-0.293v1.836c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1.836l-0.293 0.293c-0.18 0.174-0.425 0.281-0.695 0.281-0.552 0-1-0.448-1-1 0-0.27 0.107-0.515 0.281-0.695l2-2c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0l2 2c0.181 0.181 0.293 0.431 0.293 0.707s-0.112 0.526-0.293 0.707v0zM20 7h-16v-2h16z"></path>
      </svg>
    );
  }
);

UnarchiveFill.displayName = 'UnarchiveFill';
