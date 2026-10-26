import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Wallet = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 15h-1c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h1c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM23 17.5v-6.5c-0.002-2.208-1.792-3.998-4-4h-13c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13c1.104 0.002 1.998 0.896 2 2v6.5c-0.001 0.828-0.672 1.499-1.5 1.5h-15c-0.828-0.001-1.499-0.672-1.5-1.5v-11c0.001-0.828 0.672-1.499 1.5-1.5h15c0 0 0.001 0 0.002 0 0.464 0 0.879 0.211 1.154 0.543l0.002 0.003c0.184 0.211 0.454 0.343 0.754 0.343 0.552 0 1-0.448 1-1 0-0.233-0.079-0.447-0.213-0.617l0.002 0.002c-0.644-0.781-1.612-1.274-2.695-1.274-0.002 0-0.003 0-0.005 0h-15c-1.932 0.002-3.498 1.568-3.5 3.5v11c0.002 1.932 1.568 3.498 3.5 3.5h15c1.932-0.002 3.498-1.568 3.5-3.5v-0z"></path>
      </svg>
    );
  }
);

Wallet.displayName = 'Wallet';
