import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BackArrow = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M10.995 19c-0 0-0.001 0-0.001 0-0.249 0-0.476-0.091-0.65-0.242l0.001 0.001-7-6c-0.215-0.184-0.35-0.456-0.35-0.759s0.135-0.575 0.348-0.758l0.001-0.001 7-6c0.174-0.149 0.401-0.24 0.65-0.24 0.552 0 0.999 0.447 1 0.999v2h8c0 0 0 0 0.001 0 0.552 0 0.999 0.447 0.999 0.999 0 0 0 0 0 0.001v-0 6c0 0 0 0 0 0.001 0 0.552-0.447 0.999-0.999 0.999-0 0-0 0-0.001 0h-8v2c-0 0.552-0.448 1-1 1h-0zM5.531 12l4.464 3.826v-0.826c0-0.552 0.448-1 1-1v0h8v-4h-8c-0.552 0-1-0.448-1-1v0-0.826z"></path>
      </svg>
    );
  }
);

BackArrow.displayName = 'BackArrow';
