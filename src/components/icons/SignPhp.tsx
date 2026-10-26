import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignPhp = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7.23 21v-10.53h-2.385v-1.17h2.385v-1.215h-2.385v-1.215h2.385v-3.87h4.635c0.169-0.012 0.365-0.020 0.563-0.020 1.373 0 2.666 0.34 3.801 0.941l-0.044-0.021c0.959 0.693 1.604 1.769 1.709 3l0.001 0.015h1.26v1.215h-1.215v0.135l-0.090 0.9v0.135h1.305v1.17h-1.62l-0.045 0.18c-0.547 1.193-1.433 2.152-2.535 2.774l-0.030 0.016c-1.206 0.597-2.626 0.946-4.127 0.946-0.052 0-0.104-0-0.156-0.001l0.008 0h-1.035v6.615zM9.615 6.87h5.805c-0.172-0.672-0.615-1.217-1.202-1.524l-0.013-0.006c-0.735-0.264-1.583-0.416-2.466-0.416-0.146 0-0.29 0.004-0.434 0.012l0.020-0.001h-1.71zM9.615 9.3h5.85c0.085-0.365 0.135-0.784 0.135-1.215v-0h-5.985zM9.615 12.45h1.125c2.070 0 3.51-0.675 4.275-1.98h-5.4z"></path>
      </svg>
    );
  }
);

SignPhp.displayName = 'SignPhp';
