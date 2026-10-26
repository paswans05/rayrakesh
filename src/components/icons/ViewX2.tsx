import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewX2 = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11 1.5v21c-0.001 0.276-0.224 0.499-0.5 0.5h-9c-0.276-0.001-0.499-0.224-0.5-0.5v-21c0.001-0.276 0.224-0.499 0.5-0.5h9c0.276 0.001 0.499 0.224 0.5 0.5v0zM22.5 13h-9c-0.276 0.001-0.499 0.224-0.5 0.5v9c0.001 0.276 0.224 0.499 0.5 0.5h9c0.276-0.001 0.499-0.224 0.5-0.5v-9c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM22.5 1h-9c-0.276 0.001-0.499 0.224-0.5 0.5v9c0.001 0.276 0.224 0.499 0.5 0.5h9c0.276-0.001 0.499-0.224 0.5-0.5v-9c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewX2.displayName = 'ViewX2';
