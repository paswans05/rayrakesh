import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ListThumbAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.25 3h3.5c1.243 0 2.25 1.007 2.25 2.25v3.5c0 1.243-1.007 2.25-2.25 2.25h-3.5c-1.243 0-2.25-1.007-2.25-2.25v-3.5c0-1.243 1.007-2.25 2.25-2.25z"></path>
<path d="M11 4h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h8c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M11 8h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M16.25 13h3.5c1.243 0 2.25 1.007 2.25 2.25v3.5c0 1.243-1.007 2.25-2.25 2.25h-3.5c-1.243 0-2.25-1.007-2.25-2.25v-3.5c0-1.243 1.007-2.25 2.25-2.25z"></path>
<path d="M11 14h-8c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h8c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
<path d="M11 18h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

ListThumbAltFill.displayName = 'ListThumbAltFill';
