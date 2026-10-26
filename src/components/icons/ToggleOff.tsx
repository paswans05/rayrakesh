import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ToggleOff = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16 6h-8c-3.314 0-6 2.686-6 6s2.686 6 6 6v0h8c3.314 0 6-2.686 6-6s-2.686-6-6-6v0zM8 16c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4v0c-0.003 2.208-1.792 3.997-4 4h-0zM16 16h-3.537c0.953-1.054 1.537-2.459 1.537-4s-0.583-2.946-1.541-4.005l0.005 0.005h3.537c2.209 0 4 1.791 4 4s-1.791 4-4 4v0z"></path>
      </svg>
    );
  }
);

ToggleOff.displayName = 'ToggleOff';
