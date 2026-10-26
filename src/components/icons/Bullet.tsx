import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Bullet = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 18c-3.314 0-6-2.686-6-6s2.686-6 6-6c3.314 0 6 2.686 6 6v0c-0.004 3.312-2.688 5.996-6 6h-0zM12 8c-2.209 0-4 1.791-4 4s1.791 4 4 4c2.209 0 4-1.791 4-4v0c-0.002-2.208-1.792-3.998-4-4h-0z"></path>
      </svg>
    );
  }
);

Bullet.displayName = 'Bullet';
