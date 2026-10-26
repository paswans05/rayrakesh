import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LayoutFill1 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 6v12c-0.002 1.656-1.344 2.998-3 3h-12c-1.656-0.002-2.998-1.344-3-3v-12c0.002-1.656 1.344-2.998 3-3h12c1.656 0.002 2.998 1.344 3 3v0zM21 9h-18v2h6v10h2v-10h10z"></path>
      </svg>
    );
  }
);

LayoutFill1.displayName = 'LayoutFill1';
