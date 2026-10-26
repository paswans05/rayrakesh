import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PlusSm = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17 11h-4v-4c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 4h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4v4c0 0.552 0.448 1 1 1s1-0.448 1-1v0-4h4c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

PlusSm.displayName = 'PlusSm';
