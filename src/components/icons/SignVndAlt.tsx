import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignVndAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M13.644 12.176v0.862c-0.009 1.246-1.020 2.253-2.268 2.253s-2.259-1.007-2.268-2.252v-0.863c-0-0.004-0-0.010-0-0.015 0-1.252 1.015-2.268 2.268-2.268s2.268 1.015 2.268 2.268c0 0.005-0 0.011-0 0.016v-0.001zM24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12v0c6.627 0 12 5.373 12 12v0zM14.762 17.35h-6.803v1.15h6.803zM16.041 6.651h-1.279v-1.151h-1.15v1.151h-1.311v1.15h1.311v1.884c-0.597-0.535-1.39-0.862-2.26-0.862-1.871 0-3.389 1.515-3.393 3.385v0.863c0.004 1.871 1.522 3.385 3.393 3.385 0.87 0 1.663-0.327 2.263-0.865l-0.003 0.003v0.766h1.15v-8.591h1.279z"></path>
      </svg>
    );
  }
);

SignVndAlt.displayName = 'SignVndAlt';
