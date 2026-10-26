import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SidebarFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M9 3v18h-3c-1.656-0.002-2.998-1.344-3-3v-12c0.002-1.656 1.344-2.998 3-3h0zM18 3h-7v18h7c1.656-0.002 2.998-1.344 3-3v-12c-0.002-1.656-1.344-2.998-3-3h-0z"></path>
      </svg>
    );
  }
);

SidebarFill.displayName = 'SidebarFill';
