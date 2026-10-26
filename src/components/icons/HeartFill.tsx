import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const HeartFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.168 4.229l-0.003-0.001c-1.127-1.133-2.687-1.835-4.411-1.835-0.006 0-0.012 0-0.017 0h-0.001c-0.005-0-0.011-0-0.017-0-1.721 0-3.279 0.699-4.406 1.829l-0.313 0.313-0.307-0.307c-1.133-1.134-2.699-1.835-4.429-1.835-3.459 0-6.263 2.804-6.263 6.263 0 1.73 0.701 3.295 1.834 4.429l8.458 8.458c0.181 0.181 0.431 0.293 0.707 0.293s0.526-0.112 0.707-0.293l8.458-8.458c1.132-1.134 1.832-2.7 1.832-4.429 0-1.728-0.699-3.293-1.83-4.427l0 0z"></path>
      </svg>
    );
  }
);

HeartFill.displayName = 'HeartFill';
