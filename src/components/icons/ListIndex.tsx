import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ListIndex = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 5h10c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1v0z"></path>
<path d="M7 2h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM6 6h-2v-2h2z"></path>
<path d="M21 10h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h10c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M7 9h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM6 13h-2v-2h2z"></path>
<path d="M21 17h-10c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h10c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M21.5 20h-11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"></path>
<path d="M21.5 13h-11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"></path>
<path d="M21.5 6h-11c-0.276 0-0.5 0.224-0.5 0.5s0.224 0.5 0.5 0.5v0h11c0.276 0 0.5-0.224 0.5-0.5s-0.224-0.5-0.5-0.5v0z"></path>
<path d="M7 16h-4c-0.552 0-1 0.448-1 1v0 4c0 0.552 0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0-4c0-0.552-0.448-1-1-1v0zM6 20h-2v-2h2z"></path>
      </svg>
    );
  }
);

ListIndex.displayName = 'ListIndex';
