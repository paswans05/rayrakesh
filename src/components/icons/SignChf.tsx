import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignChf = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M7.442 21l0.043-2.119v-0.418h-2.157l0.042-2.12 1.697 0.043h0.418v-13.386l11.187 0.042-0.042 2.776-8.457-0.041v4.313h6.432l-0.043 2.729-6.389-0.042v3.609h2.156l-0.042 2.119-1.696-0.042h-0.418v2.537h-2.731z"></path>
      </svg>
    );
  }
);

SignChf.displayName = 'SignChf';
