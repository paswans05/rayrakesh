import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignUsdt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22.316 10.937c0-1.293-4.067-2.379-8.772-2.637v-2.736h6.394v-2.564h-16.029v2.564h6.222v2.736c-4.602 0.258-8.445 1.344-8.445 2.637s3.843 2.379 8.445 2.637v7.426h3.414v-7.426c4.705-0.258 8.772-1.344 8.772-2.637zM12.026 12.23c-4.006 0-9.152-0.776-9.152-1.758 0-0.827 3.326-1.5 7.256-1.706v1.952c0.724 0.052 1.069 0.052 1.845 0.052 0.080 0.002 0.175 0.003 0.27 0.003 0.439 0 0.874-0.020 1.303-0.058l-0.055 0.004v-2.004c4.033 0.155 7.635 0.879 7.635 1.706 0.052 1.034-4.085 1.81-9.1 1.81z"></path>
      </svg>
    );
  }
);

SignUsdt.displayName = 'SignUsdt';
