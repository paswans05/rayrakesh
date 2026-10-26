import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PlayCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM16.1 12.8l-5 3.75c-0.165 0.125-0.374 0.2-0.6 0.2-0.552 0-1-0.448-1-1v0-7.5c0-0.552 0.448-1 1-1 0.226 0 0.435 0.075 0.603 0.202l-0.003-0.002 5 3.75c0.244 0.184 0.401 0.474 0.401 0.8s-0.156 0.616-0.398 0.798l-0.003 0.002z"></path>
      </svg>
    );
  }
);

PlayCircleFill.displayName = 'PlayCircleFill';
