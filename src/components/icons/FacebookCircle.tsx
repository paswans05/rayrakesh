import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const FacebookCircle = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13.572 22v-7.030h2.344l0.446-2.909h-2.79v-1.888c-0.004-0.039-0.006-0.084-0.006-0.13 0-0.803 0.651-1.454 1.454-1.454 0.068 0 0.134 0.005 0.199 0.014l-0.008-0.001h1.268v-2.475c-0.669-0.114-1.448-0.185-2.241-0.196l-0.011-0c-0.081-0.007-0.175-0.010-0.27-0.010-1.961 0-3.55 1.589-3.55 3.55 0 0.132 0.007 0.263 0.021 0.391l-0.001-0.016v2.216h-2.556v2.909h2.556v7.030c-4.839-0.787-8.489-4.936-8.489-9.937 0-5.556 4.504-10.061 10.061-10.061s10.061 4.504 10.061 10.061c0 5.001-3.65 9.151-8.431 9.93l-0.058 0.008z"></path>
      </svg>
    );
  }
);

FacebookCircle.displayName = 'FacebookCircle';
