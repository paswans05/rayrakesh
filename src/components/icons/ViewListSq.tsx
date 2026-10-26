import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewListSq = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 3h-15c-0.828 0.001-1.499 0.672-1.5 1.5v15c0.001 0.828 0.672 1.499 1.5 1.5h15c0.828-0.001 1.499-0.672 1.5-1.5v-15c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM7 11h-2v-2h2zM9 9h10v2h-10zM5 13h2v2h-2zM9 13h10v2h-10zM19 7h-10v-2h10zM7 5v2h-2v-2zM5 17h2v2h-2zM9 19v-2h10v2z"></path>
      </svg>
    );
  }
);

ViewListSq.displayName = 'ViewListSq';
