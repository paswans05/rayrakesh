import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MoreH = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 14.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5v0c-0.001 1.38-1.12 2.499-2.5 2.5h-0zM12 12v0zM12 12v0zM12 12v0zM12 12v0zM12 12v0zM20 14.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5v0c-0.001 1.38-1.12 2.499-2.5 2.5h-0zM4 14.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5v0c-0.001 1.38-1.12 2.499-2.5 2.5h-0zM5 12v0zM5 12v0zM5 12v0zM5 12v0zM5 12v0z"></path>
      </svg>
    );
  }
);

MoreH.displayName = 'MoreH';
