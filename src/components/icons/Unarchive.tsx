import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Unarchive = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9.293 14.457c-0.181-0.181-0.293-0.431-0.293-0.707s0.112-0.526 0.293-0.707v0l2-2c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0l2 2c0.188 0.182 0.305 0.437 0.305 0.719 0 0.552-0.448 1-1 1-0.282 0-0.537-0.117-0.719-0.305l-0.293-0.293v1.836c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-1.836l-0.293 0.293c-0.181 0.181-0.431 0.293-0.707 0.293s-0.526-0.112-0.707-0.293v0zM22 5v2c-0.002 1.104-0.896 1.998-2 2h-0v9c-0.002 1.656-1.344 2.998-3 3h-10c-1.656-0.002-2.998-1.344-3-3v-9c-1.104-0.002-1.998-0.896-2-2v-2c0.002-1.104 0.896-1.998 2-2h16c1.104 0.002 1.998 0.896 2 2v0zM18 9h-12v9c0 0.552 0.448 1 1 1h10c0.552-0 1-0.448 1-1v-0zM20 5h-16v2h16z"></path>
      </svg>
    );
  }
);

Unarchive.displayName = 'Unarchive';
