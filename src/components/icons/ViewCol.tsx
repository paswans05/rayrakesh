import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ViewCol = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.5 5h-15c-0.828 0.001-1.499 0.672-1.5 1.5v11c0.001 0.828 0.672 1.499 1.5 1.5h15c0.828-0.001 1.499-0.672 1.5-1.5v-11c-0.001-0.828-0.672-1.499-1.5-1.5h-0zM14 7v10h-4v-10zM5 7h3v10h-3zM19 17h-3v-10h3z"></path>
      </svg>
    );
  }
);

ViewCol.displayName = 'ViewCol';
