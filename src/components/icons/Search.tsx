import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Search = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.707 20.293l-3.682-3.682c1.23-1.529 1.975-3.495 1.975-5.634 0-4.983-4.040-9.023-9.023-9.023s-9.023 4.040-9.023 9.023c0 4.983 4.040 9.023 9.023 9.023 2.139 0 4.105-0.745 5.651-1.989l-0.017 0.014 3.682 3.682c0.18 0.174 0.425 0.281 0.695 0.281 0.552 0 1-0.448 1-1 0-0.27-0.107-0.515-0.281-0.695l0 0zM4 11c0-0.002 0-0.004 0-0.006 0-3.866 3.134-7 7-7s7 3.134 7 7c0 1.925-0.777 3.669-2.035 4.935l0-0c-0.007 0.006-0.015 0.008-0.022 0.015s-0.008 0.015-0.015 0.022c-1.265 1.258-3.008 2.035-4.933 2.035-3.864 0-6.996-3.132-6.996-6.996 0-0.002 0-0.003 0-0.005v0z"></path>
      </svg>
    );
  }
);

Search.displayName = 'Search';
