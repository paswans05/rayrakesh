import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BagFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.616 6.022l-2.333-3.2c-0.368-0.5-0.954-0.822-1.616-0.822h-9.333c-0.662 0-1.248 0.321-1.612 0.816l-0.004 0.006-2.333 3.2c-0.24 0.326-0.384 0.735-0.384 1.178v0 12.2c0.002 1.656 1.344 2.998 3 3h12c1.656-0.002 2.998-1.344 3-3v-12.2c-0-0.443-0.144-0.852-0.388-1.184l0.004 0.006zM12 14.75c-2.484-0.003-4.497-2.016-4.5-4.5v-0c0-0.552 0.448-1 1-1s1 0.448 1 1v0c0 1.381 1.119 2.5 2.5 2.5s2.5-1.119 2.5-2.5v0c0-0.552 0.448-1 1-1s1 0.448 1 1v0c-0.003 2.484-2.016 4.497-4.5 4.5h-0zM18 6h-12.125l1.458-2h9.333l1.458 2z"></path>
      </svg>
    );
  }
);

BagFill.displayName = 'BagFill';
