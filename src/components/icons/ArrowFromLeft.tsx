import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowFromLeft = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M16 12c0 0.552-0.448 1-1 1v0h-8.586l4.293 4.293c0.188 0.182 0.305 0.437 0.305 0.719 0 0.552-0.448 1-1 1-0.282 0-0.537-0.117-0.719-0.305l-5.999-5.999c-0.181-0.181-0.292-0.432-0.292-0.708s0.112-0.527 0.292-0.708l-0 0 5.999-5.999c0.182-0.188 0.437-0.305 0.719-0.305 0.552 0 1 0.448 1 1 0 0.282-0.117 0.537-0.305 0.719l-4.293 4.293h8.586c0.552 0 1 0.448 1 1v0zM20 3c-0.552 0-1 0.448-1 1v0 16c0 0.552 0.448 1 1 1s1-0.448 1-1v0-16c0-0.552-0.448-1-1-1v0z"></path>
      </svg>
    );
  }
);

ArrowFromLeft.displayName = 'ArrowFromLeft';
