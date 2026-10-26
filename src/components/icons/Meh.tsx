import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Meh = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.523 0 10 4.477 10 10v0c-0.007 5.52-4.48 9.993-9.999 10h-0.001zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c-0.005-4.416-3.584-7.995-8-8h-0.001zM16 15c0-0.552-0.448-1-1-1v0h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h6c0.552 0 1-0.448 1-1v0zM10.010 9c0-0.552-0.448-1-1-1v0h-0.010c-0.548 0.006-0.99 0.451-0.99 1 0 0.552 0.448 1 1 1s1-0.448 1-1v0zM16.010 9c0-0.552-0.448-1-1-1v0h-0.010c-0.548 0.006-0.99 0.451-0.99 1 0 0.552 0.448 1 1 1s1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

Meh.displayName = 'Meh';
