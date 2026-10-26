import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MoreV = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 14.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5c1.381 0 2.5 1.119 2.5 2.5v0c-0.001 1.38-1.12 2.499-2.5 2.5h-0zM14.5 4c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5v0c1.38-0.001 2.499-1.12 2.5-2.5v-0zM14.5 20c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5c0 1.381 1.119 2.5 2.5 2.5v0c1.38-0.001 2.499-1.12 2.5-2.5v-0z"></path>
      </svg>
    );
  }
);

MoreV.displayName = 'MoreV';
