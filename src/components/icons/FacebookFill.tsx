import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FacebookFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 6v12c0 1.657-1.343 3-3 3v0h-4.443v-6.12h2.322l0.442-2.88h-2.763v-1.87c-0.004-0.039-0.006-0.083-0.006-0.129 0-0.795 0.645-1.44 1.44-1.44 0.067 0 0.133 0.005 0.197 0.013l-0.008-0.001h1.256v-2.451c-0.663-0.113-1.434-0.183-2.219-0.195l-0.011-0c-0.080-0.006-0.173-0.010-0.267-0.010-1.942 0-3.516 1.574-3.516 3.516 0 0.131 0.007 0.26 0.021 0.387l-0.001-0.016v2.196h-2.531v2.88h2.531v6.12h-4.443c-1.657 0-3-1.343-3-3v0-12c0-1.657 1.343-3 3-3v0h12c1.657 0 3 1.343 3 3v0z"></path>
      </svg>
    );
  }
);

FacebookFill.displayName = 'FacebookFill';
