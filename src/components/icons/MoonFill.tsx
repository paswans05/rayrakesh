import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MoonFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M11.999 3.002c-0.198 0-0.395 0.006-0.59 0.018-0.524 0.035-0.936 0.468-0.936 0.998 0 0.383 0.215 0.715 0.531 0.883l0.005 0.003c1.614 0.826 2.706 2.468 2.732 4.367l0 0.004c-0.094 2.782-2.372 5.002-5.168 5.002-0.052 0-0.103-0.001-0.155-0.002l0.008 0c-0.010 0-0.021 0-0.033 0-1.401 0-2.679-0.527-3.647-1.392l0.005 0.005c-0.176-0.16-0.412-0.257-0.67-0.257-0.552 0-1 0.448-1 1 0 0.072 0.008 0.143 0.022 0.211l-0.001-0.007c0.918 4.127 4.547 7.167 8.887 7.167 4.989 0 9.040-4.018 9.092-8.994l0-0.005c-0.030-4.977-4.071-9-9.053-9-0.011 0-0.022 0-0.033 0h0.002z"></path>
      </svg>
    );
  }
);

MoonFill.displayName = 'MoonFill';
