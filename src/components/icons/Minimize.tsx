import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Minimize = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15 21c-0.552 0-1-0.448-1-1v0-3c0.002-1.656 1.344-2.998 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-3c-0.552 0.001-0.999 0.448-1 1v3c0 0.552-0.448 1-1 1v0zM9 21c-0.552 0-1-0.448-1-1v0-3c-0.001-0.552-0.448-0.999-1-1h-3c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3c1.656 0.002 2.998 1.344 3 3v3c0 0.552-0.448 1-1 1v0zM20 10h-3c-1.656-0.002-2.998-1.344-3-3v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v0 3c0.001 0.552 0.448 0.999 1 1h3c0.552 0 1 0.448 1 1s-0.448 1-1 1v0zM7 10h-3c-0.552 0-1-0.448-1-1s0.448-1 1-1v0h3c0.552-0.001 0.999-0.448 1-1v-3c0-0.552 0.448-1 1-1s1 0.448 1 1v0 3c-0.002 1.656-1.344 2.998-3 3h-0z"></path>
      </svg>
    );
  }
);

Minimize.displayName = 'Minimize';
