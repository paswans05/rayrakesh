import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const WalletFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13 14c0.002-1.932 1.568-3.498 3.5-3.5h3.5v-0.5c-0.002-1.656-1.344-2.998-3-3h-2v-1c-0.002-1.656-1.344-2.998-3-3h-8c-1.656 0.002-2.998 1.344-3 3v12c0.002 1.656 1.344 2.998 3 3h13c1.656-0.002 2.998-1.344 3-3v-0.5h-3.5c-1.932-0.002-3.498-1.568-3.5-3.5v-0zM3 7.184v-1.184c0-0.552 0.448-1 1-1h8c0.552 0 1 0.448 1 1v1h-9c-0.36 0.004-0.703 0.071-1.020 0.191l0.020-0.007z"></path>
<path d="M21.5 12.5h-5c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5v0h5c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5v0z"></path>
      </svg>
    );
  }
);

WalletFill.displayName = 'WalletFill';
