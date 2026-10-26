import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewX7 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22.5 6h-21c-0.276 0.001-0.499 0.224-0.5 0.5v11c0.001 0.276 0.224 0.499 0.5 0.5h21c0.276-0.001 0.499-0.224 0.5-0.5v-11c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM21 16h-18v-8h18zM23 1.5v2c-0.001 0.276-0.224 0.499-0.5 0.5h-21c-0.276-0.001-0.499-0.224-0.5-0.5v-2c0.001-0.276 0.224-0.499 0.5-0.5h21c0.276 0.001 0.499 0.224 0.5 0.5v0zM23 20.5v2c-0.001 0.276-0.224 0.499-0.5 0.5h-21c-0.276-0.001-0.499-0.224-0.5-0.5v-2c0.001-0.276 0.224-0.499 0.5-0.5h21c0.276 0.001 0.499 0.224 0.5 0.5v0z"></path>
      </svg>
    );
  }
);

ViewX7.displayName = 'ViewX7';
