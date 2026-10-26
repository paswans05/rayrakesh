import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewRow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.5 5h-17c-0.828 0.001-1.499 0.672-1.5 1.5v11c0.001 0.828 0.672 1.499 1.5 1.5h17c0.828-0.001 1.499-0.672 1.5-1.5v-11c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM4 11h16v2h-16zM20 7v2h-16v-2zM4 17v-2h16v2z"></path>
      </svg>
    );
  }
);

ViewRow.displayName = 'ViewRow';
