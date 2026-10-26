import * as React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const Underline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        className={className}
        {...props}
      >
        <path d="M12 17c-0.030 0-0.066 0.001-0.101 0.001-3.769 0-6.832-3.021-6.899-6.774l-0-0.006v-6.221c0-0.552 0.448-1 1-1s1 0.448 1 1v0 6.221c0.066 2.654 2.234 4.78 4.898 4.78 0.036 0 0.072-0 0.108-0.001l-0.005 0c0.030 0.001 0.066 0.001 0.102 0.001 2.664 0 4.831-2.126 4.898-4.774l0-0.006v-6.221c0-0.552 0.448-1 1-1s1 0.448 1 1v0 6.221c-0.067 3.759-3.13 6.78-6.899 6.78-0.036 0-0.071-0-0.106-0.001l0.005 0zM21 20c0-0.552-0.448-1-1-1v0h-16c-0.552 0-1 0.448-1 1s0.448 1 1 1v0h16c0.552 0 1-0.448 1-1v0z"></path>
      </svg>
    );
  }
);

Underline.displayName = 'Underline';
