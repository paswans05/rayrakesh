import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Pie = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.007-5.52-4.48-9.993-9.999-10h-0.001zM19.93 11h-6.93v-6.93c3.62 0.474 6.456 3.31 6.926 6.889l0.004 0.041zM4 12c0.007-4.062 3.037-7.413 6.96-7.926l0.040-0.004v15.861c-3.963-0.517-6.993-3.869-7-7.93v-0.001zM13 19.93v-6.93h6.93c-0.474 3.62-3.31 6.456-6.889 6.926l-0.041 0.004z"></path>
      </svg>
    );
  }
);

Pie.displayName = 'Pie';
