import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Label = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M15.006 19h-10.313c-1.483-0.007-2.684-1.207-2.693-2.689v-8.615c0.002-1.488 1.208-2.694 2.696-2.696l10.31-0.006c0.276 0 0.526 0.112 0.707 0.293l6.003 6.003c0.181 0.181 0.293 0.431 0.293 0.707s-0.112 0.526-0.293 0.707l-6.003 6.003c-0.181 0.181-0.431 0.293-0.707 0.293h-0zM4 16.307c0.004 0.382 0.313 0.691 0.696 0.693h9.896l5.003-5.003-5.003-5.003-9.893 0.006c-0 0-0.001 0-0.001 0-0.385 0-0.697 0.312-0.698 0.696v0z"></path>
      </svg>
    );
  }
);

Label.displayName = 'Label';
