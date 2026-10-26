import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignWavesAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM12 18l-6-6 6-6 6 6z"></path>
      </svg>
    );
  }
);

SignWavesAlt.displayName = 'SignWavesAlt';
