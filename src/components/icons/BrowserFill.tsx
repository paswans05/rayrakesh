import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BrowserFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M1 11h22v7c-0.002 1.656-1.344 2.998-3 3h-16c-1.656-0.002-2.998-1.344-3-3v-0zM23 6v3h-22v-3c0.002-1.656 1.344-2.998 3-3h16c1.656 0.002 2.998 1.344 3 3v0zM6 5h-2v2h2zM10 5h-2v2h2zM20 5h-8v2h8z"></path>
      </svg>
    );
  }
);

BrowserFill.displayName = 'BrowserFill';
