import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewGrid = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.5 5h-17c-0.828 0.001-1.499 0.672-1.5 1.5v11c0.001 0.828 0.672 1.499 1.5 1.5h17c0.828-0.001 1.499-0.672 1.5-1.5v-11c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM10 13v-2h4v2zM14 15v2h-4v-2zM4 11h4v2h-4zM10 9v-2h4v2zM16 11h4v2h-4zM20 9h-4v-2h4zM8 7v2h-4v-2zM4 15h4v2h-4zM16 17v-2h4v2z"></path>
      </svg>
    );
  }
);

ViewGrid.displayName = 'ViewGrid';
