import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const BarChartAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M21 20h-1v-11c-0.002-1.104-0.896-1.998-2-2h-2c-1.104 0.002-1.998 0.896-2 2v11h-2v-7.286c-0.001-1.104-0.896-1.999-2-2h-2c-1.104 0.001-1.999 0.896-2 2v7.286h-2v-17c0-0.552-0.448-1-1-1s-1 0.448-1 1v0 18c0 0.552 0.448 1 1 1v0h18c0.552 0 1-0.448 1-1s-0.448-1-1-1v0zM8 20v-7.286h2l0.002 7.286zM16 20v-11h2l0.002 11z"></path>
      </svg>
    );
  }
);

BarChartAlt.displayName = 'BarChartAlt';
