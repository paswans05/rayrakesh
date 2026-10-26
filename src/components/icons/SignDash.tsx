import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignDash = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M2.512 17.924l0.773-2.576h12.661l2.064-6.697h-12.564l0.773-2.576h13.862c0.011-0 0.023-0 0.036-0 0.707 0 1.322 0.397 1.633 0.98l0.005 0.010c0.367 0.691 0.289 1.062-0.017 2.133-0.258 1.082-1.238 4.331-1.642 5.444-0.309 1.087-1.005 1.977-1.926 2.532l-0.019 0.011-0.097 0.056c-0.592 0.432-1.334 0.692-2.137 0.692-0.093 0-0.184-0.003-0.275-0.010l0.012 0.001zM2 13.133l0.716-2.318h6.977l-0.716 2.318z"></path>
      </svg>
    );
  }
);

SignDash.displayName = 'SignDash';
