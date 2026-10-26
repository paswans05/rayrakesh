import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewColsSq = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 3h-15c-0.828 0.001-1.499 0.672-1.5 1.5v15c0.001 0.828 0.672 1.499 1.5 1.5h15c0.828-0.001 1.499-0.672 1.5-1.5v-15c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM13 5h2v14h-2zM11 19h-2v-14h2zM5 5h2v14h-2zM19 19h-2v-14h2z"></path>
      </svg>
    );
  }
);

ViewColsSq.displayName = 'ViewColsSq';
