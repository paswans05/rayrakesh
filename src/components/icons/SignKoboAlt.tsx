import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const SignKoboAlt = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M14.010 13.83h1.080v1.74zM8.91 8.43v1.77h1.11zM8.91 11.49v1.080h2.61l-0.69-1.080zM13.2 12.57h1.89v-1.080h-2.55zM24 12c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.627 5.373-12 12-12v0c6.627 0 12 5.373 12 12v0zM18 10.2h-1.47v-3.96h-1.47v3.96h-3.33l-2.46-3.96h-1.86v3.96h-1.41v1.29h1.41v1.080h-1.41v1.26h1.41v3.93h1.5v-3.93h3.39l2.52 3.9h1.74v-3.93h1.44v-1.26h-1.44v-1.080h1.44z"></path>
      </svg>
    );
  }
);

SignKoboAlt.displayName = 'SignKoboAlt';
