import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const StepForward = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M5 20c-0.552 0-1-0.448-1-1v0-14c0-0 0-0.001 0-0.001 0-0.552 0.448-1 1-1 0.233 0 0.447 0.079 0.616 0.213l-0.002-0.002 9 7c0.236 0.185 0.386 0.47 0.386 0.79s-0.15 0.605-0.384 0.788l-0.002 0.002-9 7c-0.168 0.131-0.382 0.211-0.614 0.211h-0zM6 7.044v9.911l6.371-4.956zM20 19v-14c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 14c0 0.552 0.448 1 1 1s1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

StepForward.displayName = 'StepForward';
