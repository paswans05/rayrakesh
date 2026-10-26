import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const WalletNewFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.2 7.042h-15v-0.6l13.2-1.056v1.056h1.8v-1.8c0.001-0.019 0.001-0.041 0.001-0.063 0-1.119-0.907-2.027-2.027-2.027-0.123 0-0.244 0.011-0.361 0.032l0.012-0.002-12.049 1.72c-1.332 0.234-2.337 1.364-2.376 2.736l-0 0.004v12c0 1.325 1.075 2.4 2.4 2.4h14.4c1.325 0 2.4-1.075 2.4-2.4v0-9.6c0-1.325-1.075-2.4-2.4-2.4v0zM17.4 15.449c-0.994-0.001-1.799-0.806-1.799-1.8s0.806-1.8 1.8-1.8 1.8 0.806 1.8 1.8c0 0.497-0.202 0.947-0.528 1.273v0c-0.326 0.326-0.776 0.527-1.272 0.527-0 0-0.001 0-0.001 0h0z"></path>
      </svg>
    );
  }
);

WalletNewFill.displayName = 'WalletNewFill';
