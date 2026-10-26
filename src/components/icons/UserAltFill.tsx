import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const UserAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 21.588c-7.349 0.097-10.168-1.246-7.92-4.184 2.001-2.867 4.82-4.656 7.92-4.616 3.1-0.041 5.919 1.749 7.92 4.616 2.248 2.938-0.57 4.281-7.92 4.184zM12 10.711c2.379-0 4.307-1.929 4.307-4.307s-1.928-4.307-4.307-4.307c-2.379 0-4.307 1.928-4.307 4.307v0c0.003 2.378 1.93 4.305 4.307 4.308h0z"></path>
      </svg>
    );
  }
);

UserAltFill.displayName = 'UserAltFill';
