import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BulletFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 12c0 3.314-2.686 6-6 6s-6-2.686-6-6c0-3.314 2.686-6 6-6s6 2.686 6 6z"></path>
      </svg>
    );
  }
);

BulletFill.displayName = 'BulletFill';
