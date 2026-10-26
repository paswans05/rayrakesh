import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowLeftCircle = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8v0c-0.005 4.416-3.584 7.995-8 8h-0.001zM17 12c0 0.552-0.448 1-1 1v0h-5.586l2.293 2.293c0.188 0.182 0.305 0.437 0.305 0.719 0 0.552-0.448 1-1 1-0.282 0-0.537-0.117-0.719-0.305l-4-4c-0.18-0.181-0.292-0.431-0.292-0.707s0.111-0.526 0.292-0.707l4-4c0.182-0.188 0.437-0.305 0.719-0.305 0.552 0 1 0.448 1 1 0 0.282-0.117 0.537-0.305 0.719l-2.293 2.294h5.586c0.552 0 1 0.448 1 1v0z"></path>
      </svg>
    );
  }
);

ArrowLeftCircle.displayName = 'ArrowLeftCircle';
