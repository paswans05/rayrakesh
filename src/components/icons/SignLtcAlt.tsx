import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignLtcAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12c6.627 0 12-5.373 12-12v0c0-6.627-5.373-12-12-12v0zM16.29 18h-8.4l0.72-3.39-1.38 0.93 0.33-1.83 1.44-0.99 1.41-6.72h2.61l-0.99 4.62 3.42-2.34-0.39 1.92-3.42 2.34-0.66 3.21h5.79z"></path>
      </svg>
    );
  }
);

SignLtcAlt.displayName = 'SignLtcAlt';
