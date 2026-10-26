import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Light = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM12 20c-0.003 0-0.006 0-0.010 0-4.418 0-8-3.582-8-8s3.582-8 8-8c2.519 0 4.767 1.165 6.233 2.985l0.012 0.015h-8.235c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h9.411c0.243 0.581 0.425 1.256 0.515 1.961l0.004 0.039h-11.931c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h11.93c-0.094 0.744-0.277 1.419-0.539 2.053l0.019-0.053h-9.411c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h8.235c-1.475 1.835-3.719 2.999-6.235 3h-0z"></path>
      </svg>
    );
  }
);

Light.displayName = 'Light';
