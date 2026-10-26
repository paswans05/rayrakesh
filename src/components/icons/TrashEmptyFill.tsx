import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const TrashEmptyFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 6h-3v-1c-0.002-1.656-1.344-2.998-3-3h-4c-1.656 0.002-2.998 1.344-3 3v1h-3c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h1v11.25c-0 0.004-0 0.010-0 0.015 0 1.503 1.213 2.723 2.713 2.735h8.572c1.502-0.012 2.714-1.232 2.714-2.735 0-0.005-0-0.010-0-0.015v0.001-11.25h1c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM9 5c0.001-0.552 0.448-0.999 1-1h4c0.552 0.001 0.999 0.448 1 1v1h-6z"></path>
      </svg>
    );
  }
);

TrashEmptyFill.displayName = 'TrashEmptyFill';
