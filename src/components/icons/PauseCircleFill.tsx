import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PauseCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM11 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5v0-5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5v0zM16 14.5c0 0.828-0.672 1.5-1.5 1.5s-1.5-0.672-1.5-1.5v0-5c0-0.828 0.672-1.5 1.5-1.5s1.5 0.672 1.5 1.5v0z"></path>
      </svg>
    );
  }
);

PauseCircleFill.displayName = 'PauseCircleFill';
