import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignPln = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.575 14.1v-11.6h-1.7v13.3l-2.1 2.1v2.4l2.1-2.1v3.3h1.7v-5l2.1-2.1v-2.4zM5.875 19.8l7.7-7.4v-1.65h-10.25v1.7h7.85l-7.85 7.4v1.65h10.25v-1.7z"></path>
      </svg>
    );
  }
);

SignPln.displayName = 'SignPln';
