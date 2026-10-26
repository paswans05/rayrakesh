import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ForwardAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M6.391 21.567c-0.001 0-0.001 0-0.002 0-0.219 0-0.426-0.053-0.608-0.146l0.008 0.004c-0.475-0.26-0.791-0.757-0.791-1.327 0-0.034 0.001-0.068 0.003-0.102l-0 0.005v-16c-0.002-0.029-0.003-0.063-0.003-0.098 0-0.57 0.317-1.067 0.783-1.323l0.008-0.004c0.185-0.087 0.402-0.138 0.631-0.138 0.376 0 0.719 0.137 0.983 0.365l-0.002-0.002 10.4 7.801c0.443 0.313 0.729 0.823 0.729 1.4s-0.286 1.086-0.723 1.395l-0.005 0.004-10.402 7.801c-0.275 0.221-0.625 0.357-1.007 0.367l-0.002 0zM7 5v14l9.333-7z"></path>
      </svg>
    );
  }
);

ForwardAlt.displayName = 'ForwardAlt';
