import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const UpwordAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21.2 16.601l-7.801-10.401c-0.324-0.424-0.83-0.695-1.399-0.695s-1.076 0.271-1.397 0.691l-0.003 0.004-7.801 10.4c-0.225 0.262-0.363 0.606-0.363 0.982 0 0.229 0.051 0.446 0.142 0.64l-0.004-0.009c0.26 0.475 0.757 0.791 1.327 0.791 0.034 0 0.069-0.001 0.102-0.003l-0.005 0h16c0.042 0.004 0.090 0.007 0.139 0.007 0.794 0 1.437-0.643 1.437-1.437 0-0.374-0.143-0.715-0.377-0.97l0.001 0.001z"></path>
      </svg>
    );
  }
);

UpwordAltFill.displayName = 'UpwordAltFill';
