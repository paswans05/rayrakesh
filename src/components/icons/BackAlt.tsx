import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BackAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.609 21.567c-0.384-0.010-0.734-0.147-1.013-0.37l0.003 0.003-10.4-7.801c-0.444-0.312-0.73-0.822-0.73-1.399s0.286-1.087 0.725-1.396l0.005-0.004 10.4-7.801c0.262-0.226 0.605-0.363 0.981-0.363 0.229 0 0.446 0.051 0.64 0.143l-0.009-0.004c0.475 0.26 0.791 0.757 0.791 1.327 0 0.034-0.001 0.068-0.003 0.102l0-0.005v16c0.002 0.029 0.003 0.063 0.003 0.098 0 0.57-0.317 1.067-0.783 1.323l-0.008 0.004c-0.175 0.090-0.381 0.143-0.6 0.143-0.001 0-0.002 0-0.002 0h0zM7.667 12l9.333 7v-14z"></path>
      </svg>
    );
  }
);

BackAlt.displayName = 'BackAlt';
