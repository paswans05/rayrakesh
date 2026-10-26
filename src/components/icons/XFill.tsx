import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const XFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.695 18.368l-5.239-7.611 5.807-6.757h-1.328l-1.137 1.317-3.935 4.579-4.058-5.896h-4.605l6.106 8.872-6.124 7.128h1.329l5.387-6.268 4.315 6.268h4.605l-1.123-1.632z"></path>
      </svg>
    );
  }
);

XFill.displayName = 'XFill';
