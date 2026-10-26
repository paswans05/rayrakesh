import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const EyeFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M22.887 11.539c-0.16-0.308-3.995-7.539-10.887-7.539s-10.728 7.231-10.887 7.539c-0.071 0.134-0.113 0.292-0.113 0.461s0.042 0.327 0.115 0.466l-0.003-0.005c0.16 0.308 3.995 7.539 10.887 7.539s10.728-7.231 10.887-7.539c0.071-0.134 0.113-0.292 0.113-0.461s-0.042-0.327-0.115-0.466l0.003 0.005zM12 16c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.209 0 4 1.791 4 4v0c-0.003 2.208-1.792 3.997-4 4h-0zM14 12c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2v0c1.104 0.001 1.999 0.896 2 2v0z"></path>
      </svg>
    );
  }
);

EyeFill.displayName = 'EyeFill';
