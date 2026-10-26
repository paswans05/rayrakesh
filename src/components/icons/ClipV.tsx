import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ClipV = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10 21.621c-2.208-0.002-3.998-1.792-4-4v-9.742c0-3.038 2.462-5.5 5.5-5.5s5.5 2.462 5.5 5.5v0 7.156c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-7.156c0-1.933-1.567-3.5-3.5-3.5s-3.5 1.567-3.5 3.5v0 9.742c0 1.105 0.895 2 2 2s2-0.895 2-2v0l-0.005-9.746c0-0 0-0 0-0 0-0.276-0.224-0.5-0.5-0.5s-0.5 0.224-0.5 0.499v0l0.005 6.407c0 0 0 0.001 0 0.002 0 0.552-0.447 0.999-0.999 0.999h-0.001c-0.552 0-0.999-0.447-1-0.999v-0l-0.005-6.408c0-0 0-0 0-0 0-1.381 1.119-2.5 2.5-2.5s2.5 1.119 2.5 2.499v0l0.005 9.746c-0.002 2.209-1.791 3.999-4 4.001h-0z"></path>
      </svg>
    );
  }
);

ClipV.displayName = 'ClipV';
