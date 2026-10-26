import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PlusAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.533 3.6h-13.067c-1.027 0.004-1.857 0.837-1.857 1.864 0 0.001 0 0.002 0 0.003v-0l-0.009 13.067c0.003 1.030 0.837 1.864 1.866 1.867h13.067c1.030-0.003 1.864-0.837 1.867-1.866v-13.067c-0.003-1.030-0.837-1.864-1.866-1.867h-0zM16.667 13.867h-2.8v2.8c-0.002 0.515-0.419 0.932-0.933 0.933h-1.867c-0.515-0.002-0.932-0.418-0.933-0.933v-2.8h-2.8c-0.515-0.002-0.932-0.419-0.933-0.933v-1.867c0.002-0.515 0.418-0.932 0.933-0.933h2.8v-2.8c0.002-0.515 0.419-0.932 0.933-0.933h1.867c0.515 0.002 0.932 0.418 0.933 0.933v2.8h2.8c0.515 0.002 0.932 0.419 0.933 0.933v1.867c-0.002 0.515-0.418 0.932-0.933 0.933h-0z"></path>
      </svg>
    );
  }
);

PlusAltFill.displayName = 'PlusAltFill';
