import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Sidebar = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 3h-12c-1.656 0.002-2.998 1.344-3 3v12c0.002 1.656 1.344 2.998 3 3h12c1.656-0.002 2.998-1.344 3-3v-12c-0.002-1.656-1.344-2.998-3-3h-0zM5 18v-12c0.001-0.552 0.448-0.999 1-1h3v14h-3c-0.552-0.001-0.999-0.448-1-1v-0zM19 18c-0.001 0.552-0.448 0.999-1 1h-7v-14h7c0.552 0.001 0.999 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

Sidebar.displayName = 'Sidebar';
