import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BackAltFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.212 2.575c-0.185-0.087-0.402-0.139-0.631-0.139-0.376 0-0.719 0.138-0.983 0.365l0.002-0.002-10.4 7.801c-0.444 0.312-0.73 0.822-0.73 1.399s0.286 1.087 0.725 1.396l0.005 0.004 10.4 7.801c0.275 0.22 0.625 0.357 1.007 0.367l0.002 0c0.001 0 0.001 0 0.002 0 0.219 0 0.425-0.053 0.608-0.146l-0.008 0.003c0.475-0.26 0.791-0.757 0.791-1.327 0-0.034-0.001-0.068-0.003-0.102l0 0.005v-16c0.002-0.029 0.003-0.063 0.003-0.098 0-0.57-0.317-1.067-0.783-1.323l-0.008-0.004z"></path>
      </svg>
    );
  }
);

BackAltFill.displayName = 'BackAltFill';
