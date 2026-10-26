import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const OptAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17 8v-4c0-0.552 0.448-1 1-1s1 0.448 1 1v0 4c0 0.552-0.448 1-1 1s-1-0.448-1-1v0zM6 13c0.552 0 1-0.448 1-1v0-8c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 8c0 0.552 0.448 1 1 1v0zM21 11h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2v7c0 0.552 0.448 1 1 1s1-0.448 1-1v0-7h2c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM9 15h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2v3c0 0.552 0.448 1 1 1s1-0.448 1-1v0-3h2c0.552 0 1-0.448 1-1s-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

OptAlt.displayName = 'OptAlt';
