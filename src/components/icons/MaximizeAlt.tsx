import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MaximizeAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 4v5c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-2.586l-4.515 4.515c-0.18 0.176-0.426 0.284-0.698 0.284-0.552 0-1-0.448-1-1 0-0.272 0.108-0.518 0.284-0.698l-0 0 4.515-4.515h-2.586c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h5c0.551 0.002 0.998 0.449 1 1v0zM9.515 13.071l-4.515 4.515v-2.586c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 5c0.002 0.551 0.449 0.998 1 1h5c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-2.586l4.515-4.515c0.176-0.18 0.284-0.426 0.284-0.698 0-0.552-0.448-1-1-1-0.272 0-0.518 0.108-0.698 0.284l0-0z"></path>
      </svg>
    );
  }
);

MaximizeAlt.displayName = 'MaximizeAlt';
