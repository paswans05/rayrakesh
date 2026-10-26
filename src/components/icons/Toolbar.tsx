import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Toolbar = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 3h-16c-1.656 0.002-2.998 1.344-3 3v12c0.002 1.656 1.344 2.998 3 3h16c1.656-0.002 2.998-1.344 3-3v-12c-0.002-1.656-1.344-2.998-3-3h-0zM4 5h16c0.552 0.001 0.999 0.448 1 1v7h-18v-7c0.001-0.552 0.448-0.999 1-1h0zM20 19h-16c-0.552-0.001-0.999-0.448-1-1v-3h18v3c-0.001 0.552-0.448 0.999-1 1h-0zM19.25 17c0 0.414-0.336 0.75-0.75 0.75v0h-1c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75v0h1c0.414 0 0.75 0.336 0.75 0.75v0zM15.25 17c0 0.414-0.336 0.75-0.75 0.75v0h-1c-0.414 0-0.75-0.336-0.75-0.75s0.336-0.75 0.75-0.75v0h1c0.414 0 0.75 0.336 0.75 0.75v0zM5 16.25h6v1.5h-6z"></path>
      </svg>
    );
  }
);

Toolbar.displayName = 'Toolbar';
