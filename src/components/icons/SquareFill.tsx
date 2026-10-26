import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SquareFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M6.5 3h11c1.933 0 3.5 1.567 3.5 3.5v11c0 1.933-1.567 3.5-3.5 3.5h-11c-1.933 0-3.5-1.567-3.5-3.5v-11c0-1.933 1.567-3.5 3.5-3.5z"></path>
      </svg>
    );
  }
);

SquareFill.displayName = 'SquareFill';
