import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewX2Alt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 3v6h-6v-6h6zM9 3v18h-6v-18h6zM21 15v6h-6v-6h6zM22.5 1h-9c-0.276 0.001-0.499 0.224-0.5 0.5v9c0.001 0.276 0.224 0.499 0.5 0.5h9c0.276-0.001 0.499-0.224 0.5-0.5v-9c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM10.5 1h-9c-0.276 0.001-0.499 0.224-0.5 0.5v21c0.001 0.276 0.224 0.499 0.5 0.5h9c0.276-0.001 0.499-0.224 0.5-0.5v-21c-0.001-0.276-0.224-0.499-0.5-0.5h-0zM22.5 13h-9c-0.276 0.001-0.499 0.224-0.5 0.5v9c0.001 0.276 0.224 0.499 0.5 0.5h9c0.276-0.001 0.499-0.224 0.5-0.5v-9c-0.001-0.276-0.224-0.499-0.5-0.5h-0z"></path>
      </svg>
    );
  }
);

ViewX2Alt.displayName = 'ViewX2Alt';
