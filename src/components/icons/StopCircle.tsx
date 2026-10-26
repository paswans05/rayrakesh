import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const StopCircle = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.523 0 10 4.477 10 10v0c-0.006 5.52-4.48 9.994-9.999 10h-0.001zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c-0.005-4.416-3.584-7.995-8-8h-0.001zM14 16h-4c-1.104-0.001-1.999-0.896-2-2v-4c0.001-1.104 0.896-1.999 2-2h4c1.104 0.001 1.999 0.896 2 2v4c-0.001 1.104-0.896 1.999-2 2h-0zM10 10v4h4v-4z"></path>
      </svg>
    );
  }
);

StopCircle.displayName = 'StopCircle';
