import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TileThumbFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M5.25 4h3.5c1.243 0 2.25 1.007 2.25 2.25v3.5c0 1.243-1.007 2.25-2.25 2.25h-3.5c-1.243 0-2.25-1.007-2.25-2.25v-3.5c0-1.243 1.007-2.25 2.25-2.25z"></path>
<path d="M9.5 14h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h5c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M7.5 18h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M19.5 14h-5c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h5c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M17.5 18h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h3c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M15.25 4h3.5c1.243 0 2.25 1.007 2.25 2.25v3.5c0 1.243-1.007 2.25-2.25 2.25h-3.5c-1.243 0-2.25-1.007-2.25-2.25v-3.5c0-1.243 1.007-2.25 2.25-2.25z"></path>
      </svg>
    );
  }
);

TileThumbFill.displayName = 'TileThumbFill';
