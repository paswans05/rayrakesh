import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const CheckRoundFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 6.5v11c-0.002 1.932-1.568 3.498-3.5 3.5h-11c-1.932-0.002-3.498-1.568-3.5-3.5v-11c0.002-1.932 1.568-3.498 3.5-3.5h11c1.932 0.002 3.498 1.568 3.5 3.5v0zM11.237 15.676l5.5-6c0.163-0.177 0.263-0.415 0.263-0.676 0-0.552-0.448-1-1-1-0.291 0-0.554 0.125-0.737 0.324l-0.001 0.001-4.763 5.196-1.763-1.923c-0.183-0.2-0.446-0.324-0.737-0.324-0.552 0-1 0.448-1 1 0 0.261 0.1 0.498 0.263 0.676l-0.001-0.001 2.5 2.727c0.183 0.2 0.446 0.324 0.737 0.324s0.554-0.125 0.737-0.324l0.001-0.001z"></path>
      </svg>
    );
  }
);

CheckRoundFill.displayName = 'CheckRoundFill';
