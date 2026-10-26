import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowLongRight = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.923 12.382c0.048-0.113 0.076-0.244 0.076-0.382 0-0.276-0.111-0.526-0.292-0.707l-4-4c-0.182-0.188-0.437-0.305-0.719-0.305-0.552 0-1 0.448-1 1 0 0.282 0.117 0.537 0.305 0.719l2.293 2.294h-13.586c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h13.586l-2.293 2.293c-0.188 0.182-0.305 0.437-0.305 0.719 0 0.552 0.448 1 1 1 0.282 0 0.537-0.117 0.719-0.305l4-4c0.090-0.091 0.163-0.199 0.213-0.318l0.002-0.007z"></path>
      </svg>
    );
  }
);

ArrowLongRight.displayName = 'ArrowLongRight';
