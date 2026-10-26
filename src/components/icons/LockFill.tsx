import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LockFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 10v-3.060c0-2.728-2.691-4.947-6-4.947s-6 2.219-6 4.947v3.060c-1.656 0.002-2.998 1.344-3 3v6c0.002 1.656 1.344 2.998 3 3h12c1.656-0.002 2.998-1.344 3-3v-6c-0.002-1.656-1.344-2.998-3-3h-0zM8 6.94c0-1.625 1.794-2.947 4-2.947s4 1.322 4 2.947v3.060h-8z"></path>
      </svg>
    );
  }
);

LockFill.displayName = 'LockFill';
