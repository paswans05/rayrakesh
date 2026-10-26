import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const PenFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M2.916 22c-0.506-0-0.916-0.41-0.916-0.917 0-0.086 0.012-0.169 0.034-0.247l-0.002 0.006 1.374-5.040c0.045-0.16 0.127-0.297 0.236-0.407l12.37-12.37c0.635-0.635 1.512-1.027 2.481-1.027 1.937 0 3.508 1.571 3.508 3.508 0 0.969-0.393 1.846-1.028 2.481l-12.37 12.37c-0.11 0.11-0.247 0.192-0.401 0.235l-0.006 0.002-5.040 1.374c-0.072 0.020-0.155 0.032-0.24 0.032h-0zM7.956 19.709v0z"></path>
      </svg>
    );
  }
);

PenFill.displayName = 'PenFill';
