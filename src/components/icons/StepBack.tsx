import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const StepBack = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19 20c-0 0-0 0-0 0-0.232 0-0.446-0.079-0.616-0.212l0.002 0.002-9-7c-0.236-0.185-0.386-0.47-0.386-0.79s0.15-0.605 0.384-0.788l0.002-0.002 9-7c0.168-0.132 0.382-0.211 0.614-0.211 0.552 0 1 0.448 1 1 0 0 0 0 0 0v0 14c0 0.552-0.448 1-1 1v0zM11.629 12l6.371 4.956v-9.911zM6 19v-14c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 14c0 0.552 0.448 1 1 1s1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

StepBack.displayName = 'StepBack';
