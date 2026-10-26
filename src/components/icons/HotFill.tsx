import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const HotFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13.479 22c0.593-0.093 4.632-7.464-0.983-12.438 1.577 5.453-0.691 9.090-2.958 4.783-0.613 0.916-0.978 2.043-0.978 3.256 0 1.745 0.757 3.314 1.96 4.395l0.005 0.005c-3.942 0-5.916-3.060-5.916-7.083 0-5.355 5.323-6.888 5.916-12.918 6.798 4.592 8.866 9.378 8.866 13.015 0 3.348-2.068 6.985-5.912 6.985z"></path>
      </svg>
    );
  }
);

HotFill.displayName = 'HotFill';
