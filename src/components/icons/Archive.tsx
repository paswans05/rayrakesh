import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Archive = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 3h-16c-1.104 0.001-1.999 0.896-2 2v2c0.001 1.104 0.896 1.999 2 2h0v9c0.002 1.656 1.344 2.998 3 3h10c1.656-0.002 2.998-1.344 3-3v-9c1.104-0.001 1.999-0.896 2-2v-2c-0.001-1.104-0.896-1.999-2-2h-0zM18 18c-0.001 0.552-0.448 0.999-1 1h-10c-0.552-0.001-0.999-0.448-1-1v-9h12zM20 7h-16v-2h16zM9.293 14.707c-0.174-0.18-0.281-0.425-0.281-0.695 0-0.552 0.448-1 1-1 0.27 0 0.515 0.107 0.695 0.281l0.293 0.293v-1.836c0-0.552 0.448-1 1-1s1 0.448 1 1v0 1.836l0.293-0.293c0.18-0.174 0.425-0.281 0.695-0.281 0.552 0 1 0.448 1 1 0 0.27-0.107 0.515-0.281 0.695l-2 2c-0.181 0.181-0.431 0.293-0.707 0.293s-0.526-0.112-0.707-0.293v0z"></path>
      </svg>
    );
  }
);

Archive.displayName = 'Archive';
