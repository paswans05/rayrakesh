import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowUpRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M19.923 4.618c-0.155-0.365-0.509-0.616-0.923-0.618h-10.8c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h8.386l-12.293 12.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l12.293-12.293v8.386c0 0.552 0.448 1 1 1s1-0.448 1-1v0-10.8c-0-0.138-0.029-0.269-0.080-0.389l0.002 0.007z"></path>
      </svg>
    );
  }
);

ArrowUpRight.displayName = 'ArrowUpRight';
