import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignInrAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM13.801 7.663c0.149 0.24 0.278 0.517 0.371 0.81l0.007 0.026 0.073 0.268h1.922l-0.016 1.123-1.47-0.016h-0.332l-0.030 0.33c-0.127 1.834-1.646 3.274-3.501 3.274-0.013 0-0.026-0-0.039-0l0.002 0-0.89 0.026 4.858 4.496h-2.258l-4.646-4.329 0.021-1.473 2.356 0.016c0.054 0.004 0.117 0.007 0.181 0.007 1.151 0 2.107-0.836 2.293-1.933l0.002-0.014 0.081-0.43h-4.96l0.016-1.123 4.812 0.015-0.424-0.579c-0.442-0.556-1.118-0.91-1.876-0.91-0.044 0-0.087 0.001-0.13 0.003l0.006-0h-2.403l0.016-1.25 8.332 0.016-0.016 1.123-2.039-0.016h-0.618z"></path>
      </svg>
    );
  }
);

SignInrAlt.displayName = 'SignInrAlt';
