import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MenuSquared = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M4 3h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M11 3h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M18 3h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M4 10h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M11 10h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M18 10h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M4 17h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M11 17h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
<path d="M18 17h2c0.552 0 1 0.448 1 1v2c0 0.552-0.448 1-1 1h-2c-0.552 0-1-0.448-1-1v-2c0-0.552 0.448-1 1-1z"></path>
      </svg>
    );
  }
);

MenuSquared.displayName = 'MenuSquared';
