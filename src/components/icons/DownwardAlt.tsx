import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const DownwardAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 18.529c-0.575-0.008-1.082-0.291-1.396-0.723l-0.003-0.005-7.801-10.401c-0.225-0.262-0.363-0.605-0.363-0.981 0-0.229 0.051-0.445 0.142-0.64l-0.004 0.009c0.26-0.475 0.757-0.791 1.327-0.791 0.034 0 0.068 0.001 0.102 0.003l-0.005-0h16c0.029-0.002 0.063-0.003 0.098-0.003 0.57 0 1.067 0.316 1.323 0.783l0.004 0.008c0.087 0.185 0.138 0.402 0.138 0.63 0 0.376-0.137 0.719-0.364 0.984l0.002-0.002-7.801 10.4c-0.317 0.438-0.825 0.721-1.398 0.729l-0.001 0zM5 7l7 9.333 7-9.333zM20.012 7v0z"></path>
      </svg>
    );
  }
);

DownwardAlt.displayName = 'DownwardAlt';
