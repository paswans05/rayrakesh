import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const NavigateFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22.207 2.793c-0.181-0.181-0.43-0.293-0.706-0.293-0.156 0-0.303 0.036-0.435 0.1l0.006-0.003-18 8.526c-0.34 0.164-0.571 0.507-0.571 0.903 0 0.466 0.318 0.857 0.749 0.968l0.007 0.002 6.997 1.749 1.749 6.997c0.104 0.407 0.447 0.71 0.867 0.753l0.004 0c0.033 0.003 0.066 0.005 0.099 0.005 0.397-0 0.739-0.231 0.901-0.566l0.003-0.006 8.526-18c0.061-0.125 0.096-0.272 0.096-0.428 0-0.276-0.112-0.526-0.293-0.707v0z"></path>
      </svg>
    );
  }
);

NavigateFill.displayName = 'NavigateFill';
