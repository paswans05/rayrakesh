import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewList = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.5 5h-17c-0.828 0.001-1.499 0.672-1.5 1.5v11c0.001 0.828 0.672 1.499 1.5 1.5h17c0.828-0.001 1.499-0.672 1.5-1.5v-11c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM4 11h2v2h-2zM8 11h12v2h-12zM20 9h-12v-2h12zM6 7v2h-2v-2zM4 15h2v2h-2zM8 17v-2h12v2z"></path>
      </svg>
    );
  }
);

ViewList.displayName = 'ViewList';
