import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FacebookF = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M14.063 13.125v7.875h-3.522v-7.875h-2.861v-3.257h2.862v-2.483c-0-2.824 1.682-4.384 4.257-4.384 0.901 0.013 1.773 0.092 2.623 0.234l-0.101-0.014v2.773h-1.421c-0.064-0.009-0.139-0.014-0.214-0.014-0.9 0-1.629 0.729-1.629 1.629 0 0.051 0.002 0.102 0.007 0.152l-0-0.006v2.113h3.125l-0.5 3.257z"></path>
      </svg>
    );
  }
);

FacebookF.displayName = 'FacebookF';
