import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewRowWd = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M23 16.5v2c-0.001 0.276-0.224 0.499-0.5 0.5h-21c-0.276-0.001-0.499-0.224-0.5-0.5v-2c0.001-0.276 0.224-0.499 0.5-0.5h21c0.276 0.001 0.499 0.224 0.5 0.5v0zM22.5 6h-21c-0.276 0.001-0.499 0.224-0.5 0.5v2c0.001 0.276 0.224 0.499 0.5 0.5h21c0.276-0.001 0.499-0.224 0.5-0.5v-2c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM22.5 11h-21c-0.276 0.001-0.499 0.224-0.5 0.5v2c0.001 0.276 0.224 0.499 0.5 0.5h21c0.276-0.001 0.499-0.224 0.5-0.5v-2c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewRowWd.displayName = 'ViewRowWd';
