import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ListIndexFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 5h10c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1v0z"></path>
<path d="M3 2.5h4c0.552 0 1 0.448 1 1v3c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v-3c0-0.552 0.448-1 1-1z"></path>
<path d="M21 10h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h10c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M3 9.5h4c0.552 0 1 0.448 1 1v3c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v-3c0-0.552 0.448-1 1-1z"></path>
<path d="M21 17h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h10c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M21.5 20h-11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"></path>
<path d="M21.5 13h-11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"></path>
<path d="M21.5 6h-11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"></path>
<path d="M3 16.5h4c0.552 0 1 0.448 1 1v3c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v-3c0-0.552 0.448-1 1-1z"></path>
      </svg>
    );
  }
);

ListIndexFill.displayName = 'ListIndexFill';
