import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BackArrowFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 8h-8v-2c-0.001-0.552-0.448-0.999-1-0.999-0.249 0-0.476 0.091-0.651 0.241l0.001-0.001-7 6c-0.215 0.184-0.35 0.456-0.35 0.759s0.135 0.575 0.348 0.758l0.001 0.001 7 6c0.174 0.149 0.401 0.24 0.65 0.24 0.552 0 0.999-0.447 1-0.999v-2h8c0.552 0 1-0.448 1-1v0-6c0-0.552-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

BackArrowFill.displayName = 'BackArrowFill';
