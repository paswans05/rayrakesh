import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Dot = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
      </svg>
    );
  }
);

Dot.displayName = 'Dot';
