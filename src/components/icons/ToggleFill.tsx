import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ToggleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16.917 6h-10c-3.314 0-6 2.686-6 6s2.686 6 6 6v0h10c3.314 0 6-2.686 6-6s-2.686-6-6-6v0zM17.148 16c-0.021 0-0.045 0.001-0.070 0.001-2.209 0-4-1.791-4-4s1.791-4 4-4c2.183 0 3.957 1.748 3.999 3.92l0 0.004c0.001 0.025 0.001 0.055 0.001 0.085 0 2.183-1.752 3.956-3.927 3.99l-0.003 0z"></path>
      </svg>
    );
  }
);

ToggleFill.displayName = 'ToggleFill';
