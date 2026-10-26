import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SaveFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.707 7.293l-5-5c-0.181-0.181-0.431-0.293-0.707-0.293h-11c-1.656 0.002-2.998 1.344-3 3v14c0.002 1.656 1.344 2.998 3 3h14c1.656-0.002 2.998-1.344 3-3v-11c-0-0.276-0.112-0.526-0.293-0.707v0zM20 19c-0.001 0.552-0.448 0.999-1 1h-1v-7c0-0.552-0.448-1-1-1v0h-10c-0.552 0-1 0.448-1 1v0 7h-1c-0.552-0.001-0.999-0.448-1-1v-14c0.001-0.552 0.448-0.999 1-1h1v4c0 0.552 0.448 1 1 1v0h8c0.552 0 1-0.448 1-1s-0.448-1-1-1v0h-7v-3h7.586l4.414 4.414z"></path>
      </svg>
    );
  }
);

SaveFill.displayName = 'SaveFill';
