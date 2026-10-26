import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const X = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20.369 19.96l-6.549-9.514 7.259-8.446h-1.661l-1.422 1.646-4.918 5.724-5.073-7.37h-5.757l7.633 11.090-7.655 8.91h1.661l6.735-7.835 5.393 7.835h5.756zM16.7 20.698l-11.973-17.396h2.595l11.973 17.396z"></path>
      </svg>
    );
  }
);

X.displayName = 'X';
