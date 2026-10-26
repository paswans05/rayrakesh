import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Vimeo = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M18.152 15.48q-4.245 5.52-7.184 5.52-1.819 0-3.081-3.36c-1.636-6.003-2.333-9.52-3.685-9.52-0.626 0.262-1.165 0.592-1.647 0.989l0.011-0.009-0.976-1.264c2.398-2.105 4.689-4.447 6.124-4.577q2.433-0.237 2.992 3.322c1.334 8.434 1.924 9.707 4.349 5.887 0.656-0.888 1.144-1.943 1.393-3.087l0.010-0.054c0.223-2.133-1.664-1.989-2.941-1.44q1.533-5.025 5.864-4.884c2.128 0.056 3.137 1.445 3.016 4.154q-0.139 3.038-4.247 8.322z"></path>
      </svg>
    );
  }
);

Vimeo.displayName = 'Vimeo';
