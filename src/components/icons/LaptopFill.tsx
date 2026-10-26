import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const LaptopFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 17h-2c0.552 0 1-0.448 1-1v0 0-8c-0.002-1.656-1.344-2.998-3-3h-12c-1.656 0.002-2.998 1.344-3 3v8c0 0.552 0.448 1 1 1v0h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h20c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM10.5 6.25h3c0.003-0 0.006-0 0.009-0 0.198 0 0.38 0.069 0.522 0.184l-0.002-0.001c0.134 0.102 0.22 0.262 0.22 0.442s-0.086 0.34-0.218 0.441l-0.001 0.001c-0.141 0.114-0.323 0.183-0.521 0.183-0.003 0-0.006-0-0.010-0h-3c-0.003 0-0.006 0-0.009 0-0.198 0-0.38-0.069-0.522-0.184l0.002 0.001c-0.134-0.102-0.22-0.262-0.22-0.442s0.086-0.34 0.218-0.441l0.001-0.001c0.141-0.114 0.323-0.183 0.521-0.183 0.003 0 0.006 0 0.010 0h-0z"></path>
      </svg>
    );
  }
);

LaptopFill.displayName = 'LaptopFill';
