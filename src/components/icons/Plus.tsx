import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Plus = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 11h-7v-7c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 7h-7c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h7v7c0 0.552 0.448 1 1 1s1-0.448 1-1v0-7h7c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

Plus.displayName = 'Plus';
