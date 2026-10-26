import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignWaves = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M3 12l9-9 9 9-9 9z"></path>
      </svg>
    );
  }
);

SignWaves.displayName = 'SignWaves';
