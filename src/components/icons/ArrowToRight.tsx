import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowToRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 4v16c0 0.552-0.448 1-1 1s-1-0.448-1-1v0-16c0-0.552 0.448-1 1-1s1 0.448 1 1v0zM15.923 11.618c-0.053-0.127-0.126-0.235-0.217-0.326l-5.999-5.999c-0.18-0.174-0.425-0.281-0.695-0.281-0.552 0-1 0.448-1 1 0 0.27 0.107 0.515 0.281 0.695l4.293 4.293h-8.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h8.586l-4.293 4.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l5.999-5.999c0.181-0.181 0.292-0.432 0.292-0.708 0-0.138-0.028-0.269-0.078-0.389l0.002 0.007z"></path>
      </svg>
    );
  }
);

ArrowToRight.displayName = 'ArrowToRight';
