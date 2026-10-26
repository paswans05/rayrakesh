import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FilterAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18 13h-12c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h12c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM22 7c0-0.552-0.448-1-1-1v0h-18c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h18c0.552 0 1-0.448 1-1v0zM15 17c0-0.552-0.448-1-1-1v0h-4c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h4c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

FilterAlt.displayName = 'FilterAlt';
