import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const UserCircleFill = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 2c-5.523 0-10 4.477-10 10s4.477 10 10 10c5.523 0 10-4.477 10-10v0c-0.006-5.52-4.48-9.994-9.999-10h-0.001zM11.995 5.256c1.519 0 2.75 1.231 2.75 2.75s-1.231 2.75-2.75 2.75c-1.519 0-2.75-1.231-2.75-2.75v0c0.002-1.518 1.232-2.748 2.75-2.75h0zM17.869 16.078c-1.19 1.963-3.315 3.255-5.742 3.255-0.043 0-0.085-0-0.128-0.001l0.006 0c-0.037 0.001-0.081 0.001-0.125 0.001-2.435 0-4.565-1.301-5.734-3.246l-0.017-0.030-0.051-0.119 0.054-0.119c1.19-1.963 3.315-3.255 5.742-3.255 0.043 0 0.085 0 0.128 0.001l-0.006-0c0.037-0.001 0.081-0.001 0.125-0.001 2.435 0 4.565 1.301 5.734 3.246l0.017 0.030 0.033 0.119z"></path>
      </svg>
    );
  }
);

UserCircleFill.displayName = 'UserCircleFill';
