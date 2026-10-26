import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignUsdtAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M17.308 11.081c0.030 0.601-2.376 1.053-5.293 1.053-2.33 0-5.323-0.451-5.323-1.023 0-0.481 1.934-0.872 4.22-0.993v1.135c0.421 0.030 0.622 0.030 1.073 0.030 0.047 0.001 0.102 0.001 0.157 0.001 0.256 0 0.508-0.011 0.758-0.034l-0.032 0.002v-1.165c2.346 0.090 4.441 0.511 4.441 0.993zM24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12v0c6.627 0 12 5.373 12 12v0zM18 11.382c0-0.752-2.365-1.383-5.102-1.534v-1.592h3.719v-1.491h-9.323v1.491h3.619v1.592c-2.677 0.15-4.912 0.782-4.912 1.534s2.235 1.383 4.912 1.534v4.319h1.986v-4.319c2.737-0.15 5.102-0.782 5.102-1.534z"></path>
      </svg>
    );
  }
);

SignUsdtAlt.displayName = 'SignUsdtAlt';
