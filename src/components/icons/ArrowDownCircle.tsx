import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ArrowDownCircle = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8v0c-0.005 4.416-3.584 7.995-8 8h-0.001zM16.707 11.293c0.181 0.181 0.293 0.431 0.293 0.707s-0.112 0.526-0.293 0.707v0l-4 4c-0.181 0.18-0.431 0.292-0.707 0.292s-0.526-0.111-0.707-0.292l-4-4c-0.188-0.182-0.305-0.437-0.305-0.719 0-0.552 0.448-1 1-1 0.282 0 0.537 0.117 0.719 0.305l2.294 2.293v-5.586c0-0.552 0.448-1 1-1s1 0.448 1 1v0 5.586l2.293-2.293c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0z"></path>
      </svg>
    );
  }
);

ArrowDownCircle.displayName = 'ArrowDownCircle';
