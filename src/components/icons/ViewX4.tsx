import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewX4 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M23 1.5v9c-0.001 0.276-0.224 0.499-0.5 0.5h-21c-0.276-0.001-0.499-0.224-0.5-0.5v-9c0.001-0.276 0.224-0.499 0.5-0.5h21c0.276 0.001 0.499 0.224 0.5 0.5v0zM14.5 13h-5c-0.276 0.001-0.499 0.224-0.5 0.5v9c0.001 0.276 0.224 0.499 0.5 0.5h5c0.276-0.001 0.499-0.224 0.5-0.5v-9c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM6.5 13h-5c-0.276 0.001-0.499 0.224-0.5 0.5v9c0.001 0.276 0.224 0.499 0.5 0.5h5c0.276-0.001 0.499-0.224 0.5-0.5v-9c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM22.5 13h-5c-0.276 0.001-0.499 0.224-0.5 0.5v9c0.001 0.276 0.224 0.499 0.5 0.5h5c0.276-0.001 0.499-0.224 0.5-0.5v-9c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewX4.displayName = 'ViewX4';
