import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ForwardAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.8 10.601l-10.4-7.801c-0.262-0.226-0.606-0.363-0.981-0.363-0.229 0-0.446 0.051-0.64 0.142l0.009-0.004c-0.475 0.26-0.791 0.757-0.791 1.327 0 0.034 0.001 0.069 0.003 0.102l-0-0.005v16c-0.002 0.029-0.003 0.063-0.003 0.098 0 0.57 0.316 1.067 0.783 1.323l0.008 0.004c0.175 0.090 0.382 0.143 0.601 0.143 0.001 0 0.001 0 0.002 0h-0c0.384-0.010 0.734-0.147 1.012-0.37l-0.003 0.003 10.401-7.801c0.443-0.313 0.728-0.823 0.728-1.399s-0.286-1.087-0.724-1.396l-0.005-0.004z"></path>
      </svg>
    );
  }
);

ForwardAltFill.displayName = 'ForwardAltFill';
