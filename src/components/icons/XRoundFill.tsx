import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const XRoundFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12.505 11.714l3.409 4.953h-1.393l-6.425-9.334h1.392l2.618 3.804zM22 5.131v13.737c0 1.729-1.402 3.131-3.131 3.131v0h-13.737c-1.729 0-3.131-1.402-3.131-3.131v0-13.737c0-1.729 1.402-3.131 3.131-3.131v0h13.737c1.729 0 3.131 1.402 3.131 3.131v0zM17.244 17.366l-4.268-6.2 3.895-4.532h-0.891l-0.763 0.883-2.639 3.071-2.721-3.954h-3.089l4.095 5.951-4.108 4.781h0.891l3.614-4.204 2.894 4.204z"></path>
      </svg>
    );
  }
);

XRoundFill.displayName = 'XRoundFill';
