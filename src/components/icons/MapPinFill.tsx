import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const MapPinFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-4.442 0.109-8.002 3.736-8.002 8.195 0 0.059 0.001 0.118 0.002 0.177l-0-0.009c0 6.177 7.123 11.243 7.426 11.455 0.16 0.114 0.359 0.182 0.574 0.182s0.414-0.068 0.577-0.184l-0.003 0.002c0.303-0.212 7.426-5.278 7.426-11.455 0.001-0.050 0.002-0.109 0.002-0.168 0-4.458-3.559-8.086-7.992-8.195l-0.010-0zM12 14.182c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4v0c-0.002 2.208-1.792 3.998-4 4h-0zM14 10.182c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2v0c1.104 0.001 1.999 0.896 2 2v0z"></path>
      </svg>
    );
  }
);

MapPinFill.displayName = 'MapPinFill';
