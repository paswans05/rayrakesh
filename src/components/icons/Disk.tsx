import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Disk = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 22c-5.523 0-10-4.477-10-10s4.477-10 10-10c5.523 0 10 4.477 10 10v0c-0.007 5.52-4.48 9.993-9.999 10h-0.001zM12 4c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.418 0 8-3.582 8-8v0c-0.005-4.416-3.584-7.995-8-8h-0.001zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4v0c-0.002 2.208-1.792 3.998-4 4h-0zM12 10c-1.105 0-2 0.895-2 2s0.895 2 2 2c1.105 0 2-0.895 2-2v0c-0.002-1.104-0.896-1.998-2-2h-0z"></path>
      </svg>
    );
  }
);

Disk.displayName = 'Disk';
