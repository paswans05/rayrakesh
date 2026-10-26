import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ForwardArrow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13 19c-0.552-0-1-0.448-1-1v-2h-8c-0.552 0-1-0.448-1-1v0-6c0-0.552 0.448-1 1-1v0h8v-2c0.001-0.552 0.448-0.999 1-0.999 0.249 0 0.476 0.091 0.651 0.241l-0.001-0.001 7 6c0.215 0.184 0.35 0.456 0.35 0.759s-0.135 0.575-0.348 0.758l-0.001 0.001-7 6c-0.173 0.15-0.4 0.241-0.649 0.241-0 0-0.001 0-0.001 0h0zM5 14h8c0.552 0 1 0.448 1 1v0 0.826l4.464-3.826-4.464-3.826v0.826c0 0.552-0.448 1-1 1v0h-8z"></path>
      </svg>
    );
  }
);

ForwardArrow.displayName = 'ForwardArrow';
