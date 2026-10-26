import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LayoutAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13 11v10h-7c-1.656-0.002-2.998-1.344-3-3v-7zM15 21h3c1.656-0.002 2.998-1.344 3-3v-7h-6zM18 3h-12c-1.656 0.002-2.998 1.344-3 3v3h18v-3c-0.002-1.656-1.344-2.998-3-3h-0z"></path>
      </svg>
    );
  }
);

LayoutAltFill.displayName = 'LayoutAltFill';
