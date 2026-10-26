import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const UpwordAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M20 19h-16c-0.029 0.002-0.063 0.003-0.098 0.003-0.57 0-1.067-0.316-1.323-0.783l-0.004-0.008c-0.087-0.185-0.138-0.402-0.138-0.63 0-0.376 0.137-0.719 0.364-0.984l-0.002 0.002 7.801-10.4c0.324-0.424 0.83-0.696 1.4-0.696s1.075 0.271 1.396 0.69l0.003 0.004 7.801 10.402c0.233 0.255 0.376 0.595 0.376 0.969 0 0.794-0.643 1.437-1.437 1.437-0.049 0-0.097-0.002-0.145-0.007l0.006 0zM19.607 17.811v0zM5 17h14l-7-9.333z"></path>
      </svg>
    );
  }
);

UpwordAlt.displayName = 'UpwordAlt';
