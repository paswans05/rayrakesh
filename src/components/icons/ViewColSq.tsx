import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewColSq = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 3h-15c-0.828 0.001-1.499 0.672-1.5 1.5v15c0.001 0.828 0.672 1.499 1.5 1.5h15c0.828-0.001 1.499-0.672 1.5-1.5v-15c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM14 5v14h-4v-14zM5 5h3v14h-3zM19 19h-3v-14h3z"></path>
      </svg>
    );
  }
);

ViewColSq.displayName = 'ViewColSq';
