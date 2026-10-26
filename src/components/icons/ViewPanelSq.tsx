import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewPanelSq = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 3h-15c-0.828 0.001-1.499 0.672-1.5 1.5v15c0.001 0.828 0.672 1.499 1.5 1.5h15c0.828-0.001 1.499-0.672 1.5-1.5v-15c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM5 9h14v2h-14zM19 5v2h-14v-2zM5 19v-6h14v6z"></path>
      </svg>
    );
  }
);

ViewPanelSq.displayName = 'ViewPanelSq';
