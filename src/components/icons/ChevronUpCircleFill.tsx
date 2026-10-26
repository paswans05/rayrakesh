import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ChevronUpCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.707 14.707c-0.181 0.181-0.431 0.293-0.707 0.293s-0.526-0.112-0.707-0.293l-3.293-3.293-3.293 3.293c-0.182 0.188-0.437 0.305-0.719 0.305-0.552 0-1-0.448-1-1 0-0.282 0.117-0.537 0.305-0.719l4-4c0.181-0.181 0.431-0.293 0.707-0.293s0.526 0.112 0.707 0.293v0l4 4c0.181 0.181 0.293 0.431 0.293 0.707s-0.112 0.526-0.293 0.707v0z"></path>
      </svg>
    );
  }
);

ChevronUpCircleFill.displayName = 'ChevronUpCircleFill';
