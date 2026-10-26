import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const ExternalAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 13.777v4.089c-0.002 1.73-1.404 3.131-3.133 3.134h-11.734c-1.73-0.002-3.131-1.404-3.133-3.134v-11.733c0.002-1.73 1.404-3.131 3.133-3.134h4.089c0.552 0 1 0.448 1 1s-0.448 1-1 1v0h-4.089c-0.626 0.001-1.133 0.508-1.133 1.134v11.732c0.001 0.626 0.508 1.133 1.133 1.134h11.733c0.626-0.001 1.133-0.508 1.133-1.134v-4.089c0-0.552 0.448-1 1-1s1 0.448 1 1v0zM20.923 3.618c-0.155-0.365-0.509-0.616-0.923-0.618h-5.334c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h2.919l-8.071 8.070c-0.186 0.182-0.302 0.435-0.302 0.716 0 0.552 0.448 1 1 1 0.281 0 0.534-0.116 0.716-0.302l0-0 8.071-8.070v2.919c0 0.552 0.448 1 1 1s1-0.448 1-1v0-5.333c-0-0.138-0.029-0.269-0.080-0.389l0.002 0.007z"></path>
      </svg>
    );
  }
);

ExternalAlt.displayName = 'ExternalAlt';
