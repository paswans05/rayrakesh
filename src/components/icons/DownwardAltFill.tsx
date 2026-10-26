import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DownwardAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.425 5.788c-0.26-0.475-0.757-0.791-1.327-0.791-0.034 0-0.068 0.001-0.102 0.003l0.005-0h-16c-0.029-0.002-0.063-0.003-0.098-0.003-0.57 0-1.067 0.317-1.323 0.783l-0.004 0.008c-0.087 0.185-0.138 0.402-0.138 0.63 0 0.376 0.137 0.719 0.364 0.983l-0.002-0.002 7.801 10.401c0.313 0.443 0.823 0.728 1.399 0.728s1.087-0.286 1.396-0.724l0.004-0.005 7.8-10.4c0.225-0.262 0.363-0.606 0.363-0.982 0-0.229-0.051-0.445-0.142-0.64l0.004 0.009z"></path>
      </svg>
    );
  }
);

DownwardAltFill.displayName = 'DownwardAltFill';
