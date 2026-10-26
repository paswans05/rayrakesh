import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22 12c0 5.523-4.477 10-10 10s-10-4.477-10-10c0-5.523 4.477-10 10-10s10 4.477 10 10z"></path>
      </svg>
    );
  }
);

CircleFill.displayName = 'CircleFill';
