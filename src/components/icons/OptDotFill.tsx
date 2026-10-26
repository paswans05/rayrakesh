import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const OptDotFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.5 2h-13c-1.932 0.002-3.498 1.568-3.5 3.5v13c0.002 1.932 1.568 3.498 3.5 3.5h13c1.932-0.002 3.498-1.568 3.5-3.5v-13c-0.002-1.932-1.568-3.498-3.5-3.5h-0zM18 17h-4.684c-0.418 1.174-1.521 2-2.816 2s-2.397-0.826-2.809-1.979l-0.006-0.021h-1.684c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1.684c0.418-1.174 1.521-2 2.816-2s2.397 0.826 2.809 1.979l0.006 0.021h4.684c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM18 9h-1.684c-0.418 1.174-1.521 2-2.816 2s-2.397-0.826-2.809-1.979l-0.006-0.021h-4.684c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h4.684c0.418-1.174 1.521-2 2.816-2s2.397 0.826 2.809 1.979l0.006 0.021h1.684c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

OptDotFill.displayName = 'OptDotFill';
