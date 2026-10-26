import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const WalletAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 11v-1c-0.002-1.656-1.344-2.998-3-3h-2v-1c-0.002-1.656-1.344-2.998-3-3h-8c-1.656 0.002-2.998 1.344-3 3v12c0.002 1.656 1.344 2.998 3 3h13c1.656-0.002 2.998-1.344 3-3v-1c1.657 0 3-1.343 3-3s-1.343-3-3-3v0zM4 5h8c0.552 0 1 0.448 1 1v1h-9c-0.36 0.004-0.703 0.071-1.020 0.191l0.020-0.007v-1.184c0-0.552 0.448-1 1-1h0zM18 18c-0 0.552-0.448 1-1 1h-13c-0.552-0-1-0.448-1-1v-8c0-0.552 0.448-1 1-1h13c0.552 0 1 0.448 1 1v1h-2c-1.657 0-3 1.343-3 3s1.343 3 3 3v0h2zM20 15h-4c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h4c0.552 0 1 0.448 1 1s-0.448 1-1 1v0z"></path>
      </svg>
    );
  }
);

WalletAlt.displayName = 'WalletAlt';
