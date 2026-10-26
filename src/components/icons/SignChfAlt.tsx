import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignChfAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM16.42 7.879l-5.638-0.028v2.875h4.288l-0.028 1.82-4.259-0.028v2.406h1.438l-0.028 1.413-1.131-0.028h-0.279v1.691h-1.821l0.029-1.413v-0.279h-1.438l0.028-1.413 1.131 0.029h0.279v-8.924l7.458 0.028z"></path>
      </svg>
    );
  }
);

SignChfAlt.displayName = 'SignChfAlt';
