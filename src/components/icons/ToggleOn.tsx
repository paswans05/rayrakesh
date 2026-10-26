import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ToggleOn = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16 18h-8c-3.314 0-6-2.686-6-6v0 0c0-3.314 2.686-6 6-6v0h8c3.314 0 6 2.686 6 6v0 0c0 3.314-2.686 6-6 6v0zM16 8c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v0c0-2.209-1.791-4-4-4v0z"></path>
      </svg>
    );
  }
);

ToggleOn.displayName = 'ToggleOn';
